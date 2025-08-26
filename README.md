build# Unarine Makhesha - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my experience as an Integration Engineer.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Multi-Theme Support**: Light, Medium, and Dark themes with smooth transitions
- **Interactive Elements**: Animated typing effects, progress bars, hover animations
- **Modern UI/UX**: Clean design with smooth scrolling and micro-interactions
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/UnarineMk/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Updating Personal Information

1. **Contact Details**: Update contact information in `src/components/Header.tsx`, `src/components/About.tsx`, and `src/components/Contact.tsx`
2. **Social Links**: Update GitHub and LinkedIn URLs in `src/components/Hero.tsx`, `src/components/Contact.tsx`, and `src/components/Footer.tsx`
3. **Experience**: Modify experience data in `src/components/Experience.tsx`
4. **Skills**: Update skills and technologies in `src/components/Skills.tsx`
5. **Education**: Update educational background in `src/components/Education.tsx`

### Theme Customization

Themes are configured in `tailwind.config.js`. You can:
- Add new color schemes
- Modify existing theme colors
- Add custom animations and transitions

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N` (for first deployment)
   - Project name: Enter your preferred name
   - Directory: `./` (current directory)
   - Override settings: `N`

5. **Production Deployment**:
   ```bash
   vercel --prod
   ```

### Alternative: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository:
1. Go to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Choose your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with typing animation
│   ├── About.tsx       # About me section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Skills.tsx      # Skills and technologies
│   ├── Education.tsx   # Educational background
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles and Tailwind imports
└── vite-env.d.ts      # Vite type definitions
```

## 🎯 Performance Optimization

- **Code Splitting**: Components are loaded efficiently
- **Image Optimization**: Uses external CDN for images
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   # Or use a different port
   npm run dev -- --port 3000
   ```

2. **Node modules issues**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**:
   ```bash
   # Check for TypeScript errors
   npm run lint
   # Fix auto-fixable issues
   npm run lint -- --fix
   ```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Unarine Makhesha**
- Email: unarine.makhesha2@gmail.com
- LinkedIn: [unarine-makhesha-063b65180](https://www.linkedin.com/in/unarine-makhesha-063b65180/)
- GitHub: [UnarineMk](https://github.com/UnarineMk/)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!