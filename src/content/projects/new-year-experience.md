---
order: 1
title: "New Year Experience"
role: "Frontend Developer"
tech: ["React", "Three.js", "TypeScript", "CSS"]
link: "https://kaszubdev.github.io/new-year"
github: "https://github.com/KaszubDev/new-year"
image: "/images/projects/new-year_1.png"
gallery:
  - "/images/projects/new-year_1.png"
  - "/images/projects/new-year_2.png"
  - "/images/projects/new-year_3.png"
description: 'A personal project exploring 3D web technologies. Built with React and Three.js, this creative coding experiment demonstrates my "just-in-time learning" approach. It features particle fireworks system and AI-generated audio, showcasing my ability to quickly learn and integrate new libraries.'
---

## 🎉 New Year's Experience 3D

A creative coding project designed to explore the capabilities of 3D rendering in the browser. This application serves as a "tech demo" for integrating **Three.js** within the **React** ecosystem, showcasing particle effects and audio synchronization.

🔗 **[View Code on GitHub](https://github.com/KaszubDev/new-year)**

### 🎯 Project Goals
The primary objective was self-improvement and technical exploration. I believe in a "learning by doing" approach. I wanted to gain hands-on experience with the 3D web stack (WebGL wrapper) and understand how to manage a 3D scene's lifecycle within a React application's state.

### 🛠️ Tech Stack
* **Core:** React.js, Three.js
* **Build Tool:** Vite
* **Assets:** AI-Generated audio (Suno), external fireworks particle system

### 🌟 Key Features & Technical Highlights

#### 1. 3D scene management
I implemented a 3D rendering loop within the React component structure. This required bridging the gap between the declarative nature of React and the imperative nature of the Three.js canvas.

#### 2. Integration of external libraries
I successfully integrated an existing third-party particle system (fireworks package) into a modern React hook-based architecture (useRef, useEffect) ensuring smooth performance without memory leaks.

#### 3. AI-enhanced content
To create an immersive atmosphere, I utilized generative AI tool (Suno) to compose the background music.

### 💡 Challenges & Solutions

* **React vs. DOM manipulation:** One of the challenges in 3D web development is managing the canvas correctly. I learned how to properly mount and unmount Three.js instances using React's lifecycle methods to prevent performance drops and ensure the animation loop runs smoothly only when the component is active.

---
*Created as a personal R&D project to explore immersive web technologies.*