"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { quoteSchema, sendQuoteRequest, type QuoteFormState } from "@/app/actions";
import type { z } from "zod";
import { Loader2 } from "lucide-react";

const initialState: QuoteFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full text-lg py-6 font-bold transition-all duration-300 hover:shadow-primary/40 hover:shadow-[0_0_20px] active:scale-95"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
        </>
      ) : (
        "Send Quotation Request"
      )}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendQuoteRequest, initialState);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Oh no!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="bg-background/50 h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} className="bg-background/50 h-12"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Service of Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background/50 h-12">
                    <SelectValue placeholder="Select a photography service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="weddings">Weddings</SelectItem>
                  <SelectItem value="pre-weddings">Pre-Weddings</SelectItem>
                  <SelectItem value="sessions">Personal Sessions</SelectItem>
                  <SelectItem value="landscapes">Landscapes</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your event, desired dates, and any other details."
                  {...field}
                  className="bg-background/50 min-h-[150px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
