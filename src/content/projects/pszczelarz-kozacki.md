---
order: 2
featured: true
title: "Pszczelarz Kozacki"
role: "Full Stack Web Developer"
tech: ["WordPress", "PHP", "JavaScript", "jQuery", "React", "SCSS", "Bootstrap"]
link: "https://pszczelarz-kozacki.pl"
image: "/images/projects/pszczelarz_1.png"
gallery:
  - "/images/projects/pszczelarz_1.png"
  - "/images/projects/pszczelarz_2.png"
  - "/images/projects/pszczelarz_3.png"
  - "/images/projects/pszczelarz_4.png"
description: "A custom-developed, high-performance WordPress platform featuring a hybrid React.js architecture. This project bridges the gap between a classic CMS and a modern web app, featuring a real-time product configurator integrated with Stripe payments. Proven by 3 years of seamless production performance."
---

## Bespoke hybrid WordPress platform

This project is a custom-built brand website for a honey producer. It serves as a high-end digital business card with integrated e-commerce capabilities for specialized products. It demonstrates a **hybrid architecture**, combining the SEO and content management strengths of WordPress with the interactivity of a React.js library.

### 🎯 Project Goals
The client required a pixel-perfect implementation of a custom design (from PSD) that would distinguish their brand from competitors. Key requirements included:
1.  **Sales automation:** A tool for configuring and ordering personalized wedding gifts
2.  **Product discovery:** An interactive advisor to help customers choose the right honey
3.  **Zero-code management:** A backend so intuitive that non-technical staff could update every text, image, and translation without breaking the layout

### 🛠️ Tech Stack
* **Frontend:** HTML5, SCSS, JavaScript & jQuery, React.js (interactive modules), Bootstrap CSS
* **Backend:** Custom WordPress theme (PHP), REST API, Custom Post Types, ACF Pro, WPML (multilingual)
* **Integrations:** Stripe API (payments & order management), Contact Form 7, OpenStreetMap

### 🌟 Key Features & Implementation Details

#### 1. React.js wedding gift creator (hybrid integration)
To handle complex product customization, I stepped outside standard WordPress capabilities and built a **React.js application** embedded directly into the theme.
* **Live preview:** Users can modify jar labels, cap colors, fonts etc. seeing changes instantly
* **Seamless payments:** Integrated **Stripe API** with a custom webhook system. Once payment is confirmed, the system automatically sends order details to the company, automating the order process

#### 2. "Honey Advisor" system
A custom logic implementation using **WordPress Custom Post Types and Taxonomies**. This 3-step interactive guide filters the product catalog based on user preferences, directing them to the perfect product match.

#### 3. Full editorial control (ACF)
A priority for this project was independence for the client.
* I utilized **Advanced Custom Fields (ACF)** to modularize the entire design
* The client has full control over the content via an intuitive admin panel
* No page builders were used ensuring code cleanliness and high performance

#### 4. Stability & long-term reliability
* **Production-proven:** The system has been running smoothly in production for **over 3 years**
* **Maintenance-free:** Thanks to the solid architectural decisions made during development, the site requires minimal technical intervention, proving the quality and durability of the code

### 💡 Challenges & Solutions
* **WordPress & React integration:** The main challenge was seamlessly embedding a modern React application within a traditional PHP-based WordPress environment. I solved this by leveraging the **ACF Pro REST API** to fetch dynamic configuration data. This allowed the React frontend to stay decoupled while remaining perfectly synced with the backend data managed by the client
* **Design fidelity:** The project required a **pixel-perfect** implementation of high-fidelity PSD designs, ensuring the website looks exactly as envisioned by the graphic designer across all device sizes
* **Complex state management:** The gift creator is a multi-step experience where users need to navigate back and forth without losing their progress. I implemented **React Context API** to manage the global state of the configurator. This ensured a smooth, "single-app" feel, allowing users to revisit earlier steps and modify details (like honey type or cap color) while preserving all subsequent customizations
* **Automated workflow:** Integrating Stripe wasn't just about the payment. I had to ensure that the complex state from the React app was correctly serialized and passed through a custom API endpoint to trigger post-payment webhooks, ensuring the client receives 100% accurate production data every time
