# Yosif Ibrahim — Personal Portfolio

<p align="center">
  <img src="public/myphoto.png" alt="Yosif Ibrahim" width="160" style="border-radius: 50%;" />
</p>

<p align="center">
  <strong>Computer Engineer & Full-Stack Developer</strong><br />
  A cutting-edge, horizontally-scrolling interactive portfolio showcasing high-performance web applications, hardware projects, and digital craftsmanship.
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.3.6-black?style=flat&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react" alt="React" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css" alt="Tailwind CSS" /></a>
  <a href="https://www.framer.com/motion"><img src="https://img.shields.io/badge/Framer_Motion-12-black?style=flat&logo=framer" alt="Framer Motion" /></a>
  <a href="https://pages.cloudflare.com"><img src="https://img.shields.io/badge/Cloudflare_Pages-Ready-F38020?style=flat&logo=cloudflare" alt="Cloudflare Pages" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Proprietary-red" alt="License" /></a>
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Sections Breakdown](#-sections-breakdown)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Connect & Contact](#-connect--contact)
- [License](#-license)

---

## 🌟 Overview

This repository houses the source code for the personal portfolio of **Yosif Ibrahim**. Designed with an editorial, architectural aesthetic and neo-brutalist accents, the site moves beyond traditional vertical scrolling by presenting a unified, physics-driven horizontal flow across multiple immersive panels.

Every interaction—from custom spring-accelerated cursor tooltips to an interactive rotary timeline and halftone comic-inspired media panels—is engineered for performance, precision, and visual delight.

---

## ✨ Key Features

- **↔️ Physics-Driven Horizontal Experience**: Custom scroll controller utilizing Framer Motion transforms and spring curves for seamless lateral panel navigation.
- **📱 Responsive & Touch-Adaptive**: Fluid adaptation between desktop multi-panel horizontal layout and touch-optimized mobile interfaces.
- **🎡 Interactive Mechanical Rotary Dial**: Bespoke rotary dial milestone navigator on the timeline section with smooth radial angles and tick marks.
- **🎯 Dynamic Cursor Follower & Floating Cards**: Smooth spring-interpolated tooltip cards triggered on hover across highlighted portfolio pieces.
- **🎨 Editorial & Neo-Brutalist Visual Design**: High-contrast typography with Space Mono and Inter, architectural measurement lines, and comic halftone pop aesthetics.
- **⏰ Cairo Real-Time Clock**: Live synchronized local time indicator for client inquiries.
- **⚡ Next.js 16 Turbopack & Static Output**: Optimized for zero-latency static delivery on global CDNs.

---

## 🧩 Sections Breakdown

| Panel | Section | Description |
|---|---|---|
| **00** | **Hero** | Dramatic typography (`SOFTWARE CRAFTSMAN`), parallax portrait container, and scroll indicator. |
| **01** | **About** | Engineering philosophy, architectural principles, and core language stack. |
| **02** | **Selected Work** | Interactive project showcases with floating cursor preview cards: <br/>• **Shams**: University student hub with automated schedule generation & Moodle API integration. <br/>• **Raqameen**: High-performance agency web application and digital product architecture. <br/>• **RFID-Wallet**: Universal multi-card hardware emulator based on ESP32 & C/C++. |
| **03** | **Experience** | Interactive mechanical rotary dial timeline showcasing milestones at Raqameen, The DevHouse, and Ain Shams University. |
| **04** | **Digital Educator** | Comic halftone aesthetic featuring YouTube content creation (`@yosufmaib`), animated mascot, and interactive speech bubbles. |
| **05** | **Contact & Let's Talk** | Direct channels for personal and agency inquiries, live Cairo clock, and client availability status. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation & Gestures**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (`Inter`, `Space Mono`)
- **Hosting / Edge**: [Cloudflare Pages](https://pages.cloudflare.com/) (configured via `wrangler.toml`)

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets, project imagery, and mascots
│   ├── projects/           # Screenshots for featured projects
│   ├── myphoto.png         # Portrait image
│   └── mycharacter.png     # Mascot character illustration
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & Tailwind configuration
│   │   ├── layout.tsx      # Root layout, metadata & typography definitions
│   │   └── page.tsx        # Single-page horizontal container composition
│   └── components/
│       ├── HorizontalScroll.tsx  # Core horizontal scroll context & physics
│       ├── Navbar.tsx            # Sticky quick navigation overlay
│       ├── ThemeController.tsx   # Theme and interactive controls
│       └── panels/
│           ├── HeroPanel.tsx       # 00: Hero presentation
│           ├── AboutPanel.tsx      # 01: Bio & technical capabilities
│           ├── WorkPanel.tsx       # 02: Projects & floating hover cards
│           ├── ExperiencePanel.tsx # 03: Rotary dial career timeline
│           ├── YouTubePanel.tsx    # 04: Content creation & cartoon mascot
│           └── ContactPanel.tsx    # 05: Inquiries & Cairo live clock
├── next.config.ts          # Next.js static export configuration
├── wrangler.toml           # Cloudflare Pages deployment configuration
├── package.json            # Project dependencies and npm scripts
└── LICENSE                 # Proprietary source code license
```

---

## 📬 Connect & Contact

- **Personal Inquiry**: [yosif@raqameen.com](mailto:yosif@raqameen.com)
- **Agency Website**: [raqameen.com](https://raqameen.com)
- **Agency Inquiry**: [contact@raqameen.com](mailto:contact@raqameen.com)
- **GitHub**: [@Uoerim](https://github.com/Uoerim)
- **YouTube**: [@yosufmaib](https://www.youtube.com/@yosufmaib)

---

## 📄 License

Copyright (c) 2026 **Yosif Ibrahim**. All Rights Reserved.

This project is proprietary. You are welcome to view and explore the source code for reference, but you may not copy, clone, reuse, modify, or distribute any part of it without explicit written permission. See the [LICENSE](LICENSE) file for complete details.
