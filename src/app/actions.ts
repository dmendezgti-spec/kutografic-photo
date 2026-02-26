"use server";

import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type QuoteFormState = {
  success: boolean;
  message: string;
};

export async function sendQuoteRequest(
  prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const validatedFields = quoteSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    };
  }
  
  const { name, email, service, message } = validatedFields.data;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram environment variables are not set.");
    return {
      success: false,
      message: "Server configuration error. Could not send message.",
    };
  }

  const telegramMessage = `
New Quote Request from Kutografic Website:
-----------------------------------------
👤 Name: ${name}
📧 Email: ${email}
📸 Service: ${service}
-----------------------------------------
📝 Message:
${message}
-----------------------------------------
  `;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    const result = await response.json();
    
    if (!result.ok) {
      console.error("Telegram API error:", result);
      return {
        success: false,
        message: "Failed to send message via Telegram.",
      };
    }
    
    return {
      success: true,
      message: "Your quote request has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending quote request:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
