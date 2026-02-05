---
order: 1
title: "Lumina Dashboard"
role: "Frontend Engineer"
tech: ["Next.js", "TypeScript", "D3.js", "WebSockets"]
link: "https://example.com/lumina"
github: "https://github.com/example/lumina"
image: "/images/projects/lumina-dashboard.png"
gallery:
  - "/images/projects/lumina-dashboard.png"
  - "/images/projects/lumina-dashboard.png"
  - "/images/projects/lumina-dashboard.png"
  - "/images/projects/lumina-dashboard.png"
description: "A dark-mode analytics dashboard designed for high-frequency traders. Features real-time data visualization and a customizable widget system."
---

### The Challenge
**Lumina** required a high-frequency trading dashboard that could handle real-time data ingestion without compromising UI performance. The main challenge was rendering thousands of data points per second while maintaining smooth 60fps animations.

We also needed to ensure the interface was fully customizable by the user, allowing them to drag-and-drop widgets and resize panels to fit their multi-monitor trading setups.

### The Solution
We leveraged **Next.js** for the framework but offloaded the heavy lifting of data visualization to **D3.js** and WebGL.

Key technical decisions included:
1.  **WebSockets** for real-time market data streaming.
2.  **Web Workers** to process data chunks off the main thread.
3.  **Canvas API** for high-performance chart rendering instead of SVG.

The result is a dashboard that feels "native" and instant, regardless of data load.
