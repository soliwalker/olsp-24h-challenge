Spec Kit: All-in-One Viral Bridge Page
1. Objective

To create a single, responsive HTML page that functions as a high-performance "bridge page" for an affiliate marketing campaign. The page must achieve three primary goals:

    Warm Up Cold Traffic: Prepare users arriving from impulsive, low-context sources like push notification ads for the offer. This involves quickly building trust and aligning their expectations with the offer's core promise, which is crucial for reducing bounce rates.

    Capture Leads: Seamlessly capture the user's email address via an embedded GHL form. The primary goal is to convert a paid click into a long-term asset (a lead) with the least possible friction.

    Incentivize Virality: Encourage users to share the page on social media in exchange for a high-value bonus. This mechanism is designed to generate free, high-trust organic traffic, effectively lowering the average lead acquisition cost across the campaign.

After a successful lead capture OR a social share, the user must be redirected to a final checkout URL to maximize the immediate Return On Ad Spend (ROAS).
2. Core Strategy & User Flow

The page is designed to convert cold, impulse-driven traffic. It presents two distinct but equally valuable paths to the user, both leading to the same final destination (the checkout page). This ensures we capture value from different user motivations.

    Primary Path (Lead Capture): This path is for the user who is immediately sold on the core promise. They are presented with a clear and compelling reason to sign up for the free challenge and can enter their email directly into an embedded form. Upon submission, they are immediately redirected to the checkout, capitalizing on their high intent.

    Secondary Path (Viral Loop): This path targets users who are intrigued but may want more value before committing. They are offered an "unfair advantage"—a "Cheat Sheet"—as a powerful bonus. To get this bonus, they must share the page on social media. After the share action is complete, they receive the bonus download and are also redirected to the checkout.

This dual-path strategy is a key optimization, maximizing the value extracted from each paid click by converting both high-intent users and value-seeking users.
3. Page Structure & Layout

The page should be clean, professional, and built on a single-column layout that gracefully adapts to a two-column grid on larger screens. This approach ensures a simple, linear experience on mobile while taking advantage of wider screens to present both user paths simultaneously.

    [Header Section]

        Icon/Logo: A simple, relevant icon (e.g., a rocket, a sprint icon) to visually anchor the page's theme.

        Main Headline (H1): "How to Get Your 'Instant Commission Machine' Up and Running Before This Time Tomorrow..."

        Sub-headline (p): "(Without Building a Website, Writing a Single Email, or Having Any Tech Skills)"

    [Main Content - Two-Column Grid on Desktop, Stacks on Mobile]

        [Left Column: The Offer & Lead Capture] (The Primary Path)

            Benefit Bullets: A list of 3-4 "fascination" style bullet points that create curiosity and sell the benefits of the challenge. These are designed not to explain, but to intrigue.

            Embedded Form Section:

                Call-to-Action Text: "Enter your best email to get instant access:"

                GHL Form Embed: A container <div> where the GoHighLevel form will be embedded. This form must be configured in GHL to only have ONE field (Email) and a submit button. This is non-negotiable to minimize friction.

        [Right Column: The Viral Incentive] (The Secondary Path)

            This section must be visually distinct (e.g., a bg-gray-100 background, a subtle border) to frame it as a separate, valuable option.

            Icon: A "secret document" or "gift" icon to visually represent the bonus.

            Headline: "WAIT! Want an Unfair Advantage?"

            Description: A short paragraph explaining the value of the "Cheat Sheet" bonus, positioning it as a shortcut to success.

            Viral CTA Button: A prominent button with the text: "🚀 Share to Unlock FREE!"

    [Footer Section]

        A simple, clean footer containing:

            Copyright information: © 2025 JoinTheSprint.co - All Rights Reserved.

            Links to the legal pages: Privacy Policy, Terms of Service, Earnings Disclaimer. This is crucial for ad network compliance and user trust.

4. Styling & Design (Tailwind CSS)

    Font: 'Poppins' or 'Montserrat' via Google Fonts.

    Background: A very light grey (bg-gray-50 or #f9fafb) for a clean, modern feel.

    Main Content Area: White cards (bg-white) with soft shadows (shadow-lg) and rounded corners (rounded-lg) to create depth and organize information.

    Color Palette:

        Primary Text: Dark Grey (text-gray-800).

        GHL Form Button: Should be a high-contrast, primary color like Orange (#F97316). This color choice is deliberate, leveraging the psychological principle of urgency and drawing the user's eye to the main conversion action.

        Viral CTA Button: Should be a distinct, secondary color like Green (#10B981). The green suggests value, growth, and a positive, secondary action without competing with the primary orange button.

    Responsiveness: The layout must be fully responsive and prevent any horizontal scrolling on mobile devices. The two-column grid should stack vertically on screens smaller than the md breakpoint.

5. Technical Requirements & JavaScript Logic

    Frameworks: Tailwind CSS via CDN. No other CSS frameworks.

    JavaScript: Vanilla JavaScript only.

JavaScript Functionality:

    Variable Configuration: At the top of the <script> tag, create easily editable constants for:

        CHEAT_SHEET_PDF_LINK: The direct URL to the bonus PDF.

        CHECKOUT_URL: The final affiliate checkout link.

        SHARE_URL: The URL of the page itself (window.location.href).

        SHARE_TEXT: The pre-written message for social sharing.

    Viral Modal:

        The "Share to Unlock FREE!" button must trigger a modal pop-up.

        The modal will contain two buttons: "Share on Facebook" and "Share on Twitter."

        The modal should be dismissible by clicking an 'X' button or clicking on the background overlay for a standard, user-friendly experience.

    Share Pop-up Handling:

        Clicking a share button inside the modal will open a new, small pop-up window (window.open) for the respective social network.

        A setInterval function must be used to check if this pop-up window has been closed by the user. This "polling" mechanism is a necessary client-side approach because security restrictions in browsers prevent us from directly listening to events inside the share window (like the "post" button click). We are therefore tracking the user's intent to share by detecting when they close the window to return to our page.

    Post-Share Actions:

        Once the setInterval function detects that the share window is closed, it must trigger two actions in sequence:

            Trigger PDF Download: Programmatically create a temporary <a> tag with the CHEAT_SHEET_PDF_LINK and a download attribute, click it, and then remove it from the DOM. This provides the instant gratification promised to the user.

            Redirect: After a short delay (e.g., 500ms) to ensure the download starts reliably, redirect the user to the CHECKOUT_URL using window.location.href. This completes the viral loop and moves the user to the final conversion step.

    GHL Form Configuration (External):

        The embedded GHL form itself must be configured within the GoHighLevel platform to redirect to the CHECKOUT_URL on successful submission. This is a critical step. If this redirect is not configured correctly, the primary lead capture path will be broken, resulting in lost leads and wasted ad spend. This ensures both paths lead to the same final destination.

6. Copywriting (To be used verbatim)

The copy is based on proven direct-response principles designed to create curiosity and drive action.

    Main Headline: How to Get Your 'Instant Commission Machine' Up and Running Before This Time Tomorrow...

    Sub-headline: (Without Building a Website, Writing a Single Email, or Having Any Tech Skills)

    Bullet Point 1: The strange 'Mega Link' method that does 99% of the selling for you...

    Bullet Point 2: How to activate the system in the next 17 minutes, even if you've never made a cent online...

    Bullet Point 3: The single biggest mistake that guarantees you will fail (and how to avoid it)...

    Embedded Form CTA: Enter your best email to get instant access:

    Viral Incentive Headline: WAIT! Want an Unfair Advantage?

    Viral Incentive Description: Unlock "The 24-Hour Commission Cheat Sheet" for FREE to get 5 proven email subject lines, the #1 mistake to avoid, and a simple script to promote your link.

    Viral Button Text: 🚀 Share to Unlock FREE!

    Share Text: Just accepted the FREE 24-Hour Challenge to earn my first online commission. Who wants to join me and see if it's real? 💪 #24HourChallenge