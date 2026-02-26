# **App Name**: Kutografic

## Core Features:

- Dynamic Photography Portfolio: Display photo and video galleries with category filtering (All, Weddings, Pre-Weddings, Sessions, Landscapes) and an interactive modal/lightbox for detailed viewing, sourcing data from a local JSON file.
- Contact and Quotation Form: A client-facing form for submitting quotation requests, including client details, message, and photography preferences.
- Secure Cloudflare Worker API: A Cloudflare Worker endpoint (POST /api/contact) to securely receive form submissions from the frontend, validate data, and forward it to a Telegram bot without exposing sensitive tokens on the client-side.
- Telegram Bot Integration for Notifications: Forward processed form data from the Cloudflare Worker to a designated Telegram chat ID, delivering well-formatted quotation requests.
- Comprehensive Site Navigation: A sticky navbar featuring the 'Kutografic' logo, navigational links (Home, Services, Gallery, Contact), and a prominent 'Get Quote' call-to-action button.
- Key Business Sections Display: Dedicated sections for a full-screen hero image with CTAs, key business metrics, featured services (highlighting one as 'Popular'), a contact area, and a footer with social media links.
- Floating WhatsApp Contact Button: An ever-present, accessible floating button for direct contact via WhatsApp with a predefined number.

## Style Guidelines:

- Dark Color Scheme: The interface will leverage a sophisticated dark aesthetic, similar to 'Emergent', providing an elegant and premium user experience.
- Primary Color: A deep, muted indigo (#AF73DC), balancing richness and vibrancy, to act as a sophisticated highlight on darker backgrounds for interactive elements and key accents. HSL: 260, 50%, 65%.
- Background Color: A dark, desaturated charcoal with a subtle hint of the primary hue (#221B28) to form a luxurious and unobtrusive foundation for content. HSL: 260, 15%, 12%.
- Accent Color: A vibrant blue (#627FDA), analogous to the primary color, used for secondary call-to-actions, hovers, and complementary highlights to provide depth and visual interest. HSL: 230, 70%, 55%.
- Headline Font: 'Alegreya' (humanist serif) for an elegant, intellectual, and contemporary feel in headings, titles, and hero text.
- Body Font: 'Inter' (grotesque-style sans-serif) for body text, ensuring modern readability, neutrality, and clean aesthetics for descriptions, paragraphs, and functional UI elements.
- Subtle Line Icons: Use refined, minimalistic line icons that subtly convey function or category without distracting from the photographic content, ensuring they integrate seamlessly with the dark aesthetic.
- Hero Section: A full-screen hero section featuring captivating imagery overlaid with concise text and clear calls-to-action (CTA buttons), providing a strong visual introduction.
- Card Elements: Employ cards for metrics and services, designed with soft, subtle shadows and gentle gradients to achieve a premium, floating effect on the dark background.
- Sticky Navigation: A permanently visible navbar at the top, maintaining critical navigation links and branding accessible while scrolling.
- Button Glow Effects: Interactive buttons will feature a subtle 'glow' effect on hover, hinting at interactivity and complementing the premium dark aesthetic without being distracting.
- Scroll Reveal Animations: Elements such as sections, images, and cards will gracefully animate into view as the user scrolls down the page, enhancing engagement and visual flow.