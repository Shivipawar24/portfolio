# Shivani Pawar — Creative Full-Stack Developer Portfolio

> **"Creative mind. Developer's hands."**  
> An editorial-inspired, artistic portfolio combining the technical rigor of a Software Engineer with the aesthetic sensibility of a Sketch Artist and Illustrator.

---

## 🎨 Design Philosophy & Concept

This portfolio breaks away from generic developer templates. Inspired by tactile sketchbooks, warm paper textures, and premium editorial publications:

- **Warm Cream & Paper Canvas**: `#F2EDE3` background with subtle grain textures.
- **Charcoal Ink Typography**: `#24221E` deep charcoal for readability and editorial contrast.
- **Terracotta & Muted Sage Accents**: `#B56D4C` (warm terracotta) and `#A5A88B` (muted sage) for organic warmth.
- **Editorial Typography**: Cormorant Garamond (Serif), Plus Jakarta Sans (Sans-serif), and Caveat / Kalam (Handwritten sketch notes).
- **Subtle Hand-Drawn Elements**: Organic pencil underlines, doodle stars, sketchbook frames, and washi tape details.

---

## 🚀 Key Sections

1. **Editorial Hero**:
   - Impactful headline: *"Creative mind. Developer's hands."*
   - Positioning: Frontend Developer (1.8 years exp) & Aspiring Full-Stack MERN Developer.
   - Whimsical Developer Illustration featuring the journey through React, APIs, and databases.
   - Quick action buttons: **View Projects**, **Download Resume**, **Get in Touch**, and verified availability status.

2. **About Me**:
   - Split editorial layout detailing the journey from Computer Science graduate (2023) to a frontend engineer expanding into full-stack MERN.
   - Tactile *"Personal Identity Sheet"* and sticky note exploring the synergy between sketching and code.

3. **Professional Journey (Experience)**:
   - Displays **1 year and 8 months** of actual frontend experience.
   - Highlights responsibilities: converting Figma wireframes into React components, Redux Toolkit state management, REST API integration with Axios, token-based authentication flows, and responsive optimization.
   - Clean, editable placeholders for company and project links.

4. **Technical Skills (No Generic Percentage Bars)**:
   - Categorized into:
     - **Frontend**: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React Router.
     - **Backend**: Node.js, Express.js, RESTful APIs.
     - **Database**: MongoDB, Mongoose ODM.
     - **Tools**: Git, GitHub, Postman, VS Code, Vite.
     - **Libraries**: Redux Toolkit, Axios, GSAP, Framer Motion.
   - **Currently Learning**: Dedicated roadmap cards for Advanced Node.js, Backend Architecture, System Design & Scalability, and Generative AI & Python.

5. **Interactive Full-Stack MERN Architecture Showcase**:
   - Visual 4-stage pipeline: **React Frontend** ➔ **REST API & Gateway** ➔ **Node.js + Express Backend** ➔ **MongoDB Database**.
   - Interactive Stage Inspector: Click any node to view architectural responsibilities, key principles, and real production code snippets.
   - **"Simulate API Data Flow"** button: Traces an asynchronous HTTP request through the entire stack.

6. **Featured Projects**:
   - **ArtMelody**: Creative artist portfolio platform & custom commission order management.
   - **Kinklink**: Social platform with user profiles, media albums, post feeds, and optimistic UI updates.
   - **Runner Admin**: Enterprise operations dashboard with data tables, debounced search, and Redux caching.
   - Interactive **Case Study Modal** for inspecting challenges and engineering solutions.

7. **Art Gallery & Sketchbook**:
   - Masonry-style gallery showcasing original sketches, graphite portraits, botanical ink drawings, and digital illustrations.
   - Category filtering (*Pencil & Watercolor*, *Pencil Sketches*, *Ink & Line Art*, *Digital Illustrations*, *Studies*).
   - High-resolution **Lightbox modal** with artwork dimensions, medium, year, and stories.
   - Link to **@ArtMelody** Instagram.

8. **Education**:
   - **B.Tech in Computer Science and Engineering** (Graduated in 2023).
   - Core foundations in Data Structures, Algorithms, DBMS, OOP, and Web Technologies.

9. **Contact & Inquiry**:
   - One-click email copy button (`shivani.pawar.dev@example.com`).
   - Validated contact form that generates a pre-filled `mailto:` link or copies the formatted inquiry directly to the clipboard.
   - Transparent operation with celebratory confetti interaction.

10. **Printable / Downloadable Resume Modal**:
    - Complete, beautifully formatted resume viewable in-browser.
    - One-click **Print / Save as PDF** and **Download (.txt)** buttons.

---

## 🛠️ Tech Stack

- **Framework**: React.js (v19)
- **Tooling**: Vite (v8)
- **Styling**: Tailwind CSS (v3.4), PostCSS, Autoprefixer
- **Typography**: Cormorant Garamond, Plus Jakarta Sans, Kalam, Caveat (Google Fonts)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Animation & FX**: Custom CSS Keyframes, Canvas Confetti

---

## 📦 Project Structure

```
my_portfolio/
├── frontend/
│   ├── public/
│   │   ├── artwork/
│   │   │   └── hero-illustration.jpg     # Whimsical developer sketch
│   │   └── favicon.svg                  # Custom artist-developer nib favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx                # About story & personal sheet
│   │   │   ├── ArtGallery.jsx           # Masonry gallery & Lightbox
│   │   │   ├── Contact.jsx              # Validated contact form & copy tools
│   │   │   ├── Education.jsx            # B.Tech CS degree card
│   │   │   ├── Experience.jsx           # 1.8 Yrs professional timeline
│   │   │   ├── Footer.jsx               # Editorial footer & back to top
│   │   │   ├── FullStackShowcase.jsx    # Interactive MERN pipeline explorer
│   │   │   ├── Hero.jsx                 # Editorial hero with illustration
│   │   │   ├── Navbar.jsx               # Sticky nav with resume trigger
│   │   │   ├── Projects.jsx             # Featured projects & case study modal
│   │   │   ├── ResumeModal.jsx          # Printable/downloadable resume
│   │   │   ├── SketchAccents.jsx        # Hand-drawn SVGs (arrows, stars, underlines)
│   │   │   └── SocialIcons.jsx          # SVG brand icons (GitHub, LinkedIn, IG)
│   │   ├── data/
│   │   │   └── portfolioData.js         # Single source of truth for all content
│   │   ├── App.jsx                      # Main application container
│   │   ├── index.css                    # Tailwind directives & paper styles
│   │   └── main.jsx                     # Vite React entrypoint
│   ├── index.html                       # SEO metadata & Google Fonts
│   ├── package.json
│   ├── tailwind.config.js               # Warm cream & terracotta theme tokens
│   └── vite.config.js
├── backend/                             # Optional Express REST API reference
│   ├── models/Contact.js
│   ├── server.js
│   └── package.json
├── package.json                         # Root scripts for running frontend
└── README.md
```

---

## 💻 Getting Started Locally

### 1. Run Development Server
From the root directory:
```bash
npm run dev
```
Or inside `frontend/`:
```bash
cd frontend
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `frontend/dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Details

All personal information, links, projects, and artworks are centralized in:
`frontend/src/data/portfolioData.js`

- **Name & Title**: Update `personalInfo.name` and `personalInfo.title`.
- **Links**: Update `personalInfo.socialLinks` with your actual GitHub, LinkedIn, and Instagram URLs.
- **Company Name**: Replace `[Company Name / Software Studio]` in `experienceData`.
- **Project Demos**: Add your deployed Vercel / Netlify links in `projectsData`.
- **Artworks**: Place your own artwork scans in `frontend/public/artwork/` and update `artworksData`.

---

## 🌐 Deployment (One-Click Ready)

This is a pure, static-compatible React + Vite single page application ready to deploy on any modern hosting provider:

### Deploy to Vercel:
1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set **Root Directory** to `frontend`.
4. Deploy!

### Deploy to Netlify:
1. Base directory: `frontend`
2. Build command: `npm run build`
3. Publish directory: `frontend/dist`

---

*Designed and crafted with passion for Shivani Pawar.*
