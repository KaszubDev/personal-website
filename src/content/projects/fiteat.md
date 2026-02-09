---
order: 3
title: "Fiteat"
role: "Full Stack Web Developer"
tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "jQuery", "SCSS", "Bootstrap"]
link: "https://fiteat.co"
image: "/images/projects/fiteat_1.jpg"
gallery:
  - "/images/projects/fiteat_1.jpg"
  - "/images/projects/fiteat_2.png"
  - "/images/projects/fiteat_3.png"
  - "/images/projects/fiteat_4.png"
description: "A comprehensive diet catering platform built on a custom WordPress & WooCommerce architecture. As the Founding Developer, I engineered the initial architecture of this project, transforming vibrant PSD designs into a pixel-perfect theme. I deeply customized WooCommerce to handle complex, configurable diet plans, creating a scalable e-commerce foundation that powers the brand's growth."
---

## Custom dietary catering platform

A web platform for a premium diet catering service. This was a major project where I served as the **Full Stack Developer**, responsible for transforming the graphic concepts into a fully functional web application with a complex ordering logic.

### 🎯 Project Goals
The client needed more than just a brochure site; they required a robust sales tool that reflected the energy and vitality of their brand. The goal was to build a custom system allowing users to order personalized diet plans while maintaining a colorful aesthetic that drives user engagement.

### 🛠️ Tech Stack
* **Frontend:** HTML5, JavaScript & jQuery, SCSS (BEM methodology), Bootstrap
* **Backend:** Custom WordPress Theme, PHP, Advanced Custom Fields (ACF Pro), WooCommerce, Custom Post Types
* **Integrations:** Contact Form 7 with custom styling

### 🌟 Key Features & Implementation Details

#### 1. Advanced WooCommerce customization (diet configurator)
The core of the business required more than a standard online shop. I deeply customized the **WooCommerce** platform to handle the complex logic of dietary catering.
* **Complex product logic:** I engineered a solution where standard WooCommerce products were transformed into configurable diet plans. Users can select caloric value, specific exclusions, and delivery duration
* **Streamlined checkout:** I modified the checkout flow to capture specific delivery schedules and dietary preferences, ensuring the kitchen received structured, error-free orders

#### 2. Custom WordPress theme
I was responsible for translating high-energy, colorful **PSD designs** into a fully functional custom theme.
* **Visual fidelity:** I implemented complex layouts, overlapping elements, and bold typography with precision, capturing the brand's vitality exactly as envisioned by the graphic designer
* **Performance optimization:** Despite the heavy use of high-quality food photography and rich graphical elements, I optimized the CSS/JS delivery to ensure the site remained fast and responsive, especially on mobile devices

#### 3. Scalable architecture & ACF content management
Since I built the platform from the ground up, my focus was on creating a robust foundation for future growth.
* **Modular backend:** I utilized **ACF Pro** to create a flexible content management system. This allowed the non-technical team to easily manage the content without breaking the layout
* **Legacy of quality:** The solid codebase and architectural decisions I made during the initial build provided a stable framework that allowed the project to be successfully maintained and expanded by other developers in later years

### 💡 Challenges & Solutions
* **Adapting WooCommerce for catering logic:** Standard WooCommerce is designed for simple physical products, not complex daily service subscriptions
    * **The Challenge:** I needed to handle variable data like caloric intake, specific meal exclusions, and delivery calendars within the standard cart flow
    * **The Solution:** I engineered a custom layer on top of WooCommerce product attributes. By utilizing custom hooks and filters, I modified the checkout process to capture and validate this complex data, ensuring the kitchen received precise orders without breaking the native e-commerce functionality
* **High-Fidelity PSD implementation:** The design provided was visually rich, featuring overlapping elements, bold colors, and non-standard grid layouts to reflect the brand's "energy"
    * **The Solution:** I avoided heavy page builders that would slow down the site. Instead, I wrote **clean, semantic HTML5 and SCSS** using modern CSS techniques to recreate the vibrant design pixel-perfectly while maintaining high performance and full mobile responsiveness
* **Architecture for growth:** As the sole developer building the platform from scratch, I had to ensure the code was scalable
    * **The Solution:** I structured the codebase with strict adherence to WordPress coding standards. This "clean code" approach created a solid foundation, allowing the project to be easily handed over and expanded by subsequent developers in the company
