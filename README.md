# Project: All-in-One Viral Bridge Page

## 1. Objective

This project is a single, responsive HTML page designed to function as a high-performance "bridge page" for an affiliate marketing campaign. Its primary goals are:

1.  **Warm Up Cold Traffic**: Prepare users from low-context sources (e.g., push notification ads) for the main offer, reducing bounce rates.
2.  **Capture Leads**: Seamlessly capture user email addresses via an embedded GoHighLevel (GHL) form.
3.  **Incentivize Virality**: Encourage social media sharing in exchange for a high-value bonus to generate free, organic traffic.

After a successful lead capture OR a social share, the user is redirected to a final checkout URL to maximize immediate Return On Ad Spend (ROAS).

## 2. Core Strategy & User Flow

The page presents two distinct paths to the user, both leading to the same final checkout page:

*   **Primary Path (Lead Capture)**: For users with high intent, this path offers direct sign-up via an embedded email form. Upon submission, they are redirected to the checkout.
*   **Secondary Path (Viral Loop)**: For users seeking more value, this path offers a "Cheat Sheet" bonus in exchange for sharing the page on social media. After sharing, the user downloads the bonus and is then redirected to the checkout.

This dual-path strategy maximizes the value extracted from each paid click.

## 3. Technical Stack

*   **HTML**: Single `index.html` file.
*   **Styling**: Tailwind CSS via CDN.
*   **JavaScript**: Vanilla JavaScript for all client-side logic. No external libraries or frameworks.

## 4. JavaScript Functionality

The core logic is contained within the `<script>` tag in `index.html` and handles the viral sharing mechanism.

*   **Configuration**: Key URLs (`CHEAT_SHEET_PDF_LINK`, `CHECKOUT_URL`) are stored in easily editable constants at the top of the script.
*   **Viral Modal**: The "Share to Unlock FREE!" button triggers a modal with Facebook and Twitter sharing options.
*   **Share Handling**: Clicking a share button opens a new pop-up window. A `setInterval` function polls to detect when the user closes this window.
*   **Post-Share Actions**: Once the pop-up is closed, the script programmatically triggers the bonus PDF download and then, after a 500ms delay, redirects the user to the final checkout URL.

## 5. Setup & Configuration

To make this page fully functional, you **must** perform the following steps:

1.  **Update JavaScript Constants**: Open `index.html` and locate the `<script>` tag at the bottom. Modify the placeholder values for the following constants:
    *   `CHEAT_SHEET_PDF_LINK`: Set this to the direct URL of your bonus PDF file.
    *   `CHECKOUT_URL`: Set this to your final affiliate checkout link.

2.  **Embed GHL Form**: In the `index.html` file, find the `<div>` with the `id="ghl-form-container"`. **Replace the placeholder content** inside this div with your actual GoHighLevel form embed code.

3.  **Configure GHL Form Redirect**: This is a critical **external step**. Log in to your GoHighLevel account and configure the form to **redirect to your `CHECKOUT_URL`** on successful submission. Failure to do this will break the primary lead capture path.
