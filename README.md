# My Portfolio

A modern developer portfolio built with Next.js, React, and Tailwind CSS. Easily showcase your projects, experience, and skills with a beautiful, responsive design.

## 🚀 Project Overview
This is a personal portfolio website to highlight your work, skills, and experience. It features a dynamic projects section, testimonials, work experience, and more. All content is easily customizable via the `/data/index.ts` file.

## ✨ Features
- Modern, responsive design
- Projects section with icons and external links
- Experience, testimonials, and client/company sections
- Easy data-driven customization
- Built with Next.js, React, and Tailwind CSS

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
 git clone <your-repo-url>
 cd My-portfolio

# Install dependencies
 npm install
# or
yarn install
```

### Running Locally
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Folder Structure
```
My-portfolio/
├── app/                # Next.js app directory (pages, layout, etc.)
├── components/         # Reusable React components
├── data/               # All portfolio data (edit index.ts to update content)
├── public/             # Static assets (SVGs, images)
├── styles/             # Global styles (if any)
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🖼️ Customization
- **Projects:** Edit the `projects` array in `data/index.ts` to add, remove, or update your projects. Each project supports a title, description, icon list, and external link.
- **SVGs/Icons:** Place your SVGs in the `public/` folder. Reference them in `data/index.ts` using their filename (e.g., `/next.svg`).
- **Other Sections:** Update testimonials, experience, companies, and social media in the same data file.

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

---
Feel free to customize and use this portfolio for your own personal site!
