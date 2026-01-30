# 🏥 FindOC - Healthcare Platform

A modern, responsive healthcare platform for finding doctors and booking appointments. Built with React, Framer Motion, and Tailwind CSS.

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX** with smooth animations using Framer Motion
- **Responsive Design** - works perfectly on mobile, tablet, and desktop
- **Beautiful Gradients** and glassmorphism effects
- **Custom Animations** - blob animations, fade-ins, slide effects
- **Professional Color Scheme** with medical theme

### 📱 Pages Included

1. **Landing Page** 
   - Hero section with animated CTAs
   - Features showcase with icons
   - Statistics section
   - Call-to-action sections
   - Professional footer

2. **Login Page**
   - Modern glassmorphism design
   - Form validation
   - Social login options
   - Password visibility toggle
   - Remember me functionality

3. **Signup Page**
   - Multi-step form (3 steps)
   - Progress indicator
   - User type selection (Patient/Doctor)
   - Form validation
   - Animated transitions

4. **Dashboard**
   - Statistics cards with gradients
   - Upcoming appointments list
   - Recent activity feed
   - Quick action buttons
   - Health tips banner
   - Responsive sidebar

5. **Admin Panel**
   - Dark theme design
   - User management table
   - Appointments overview
   - Analytics placeholder
   - Tab navigation
   - Statistics cards

6. **Profile Page**
   - Editable user information
   - Medical history section
   - Current medications list
   - Security settings
   - Profile picture upload
   - Tab-based navigation

### 🎯 Components

- **Navbar** - Sticky navigation with mobile menu
- **Sidebar** - Collapsible sidebar with icons
- **Footer** - Comprehensive footer with links and newsletter
- **Card** - Reusable card component with hover effects

### 🚀 Animations

- **Framer Motion** for smooth page transitions
- **Blob animations** on hero sections
- **Hover effects** on all interactive elements
- **Stagger animations** for lists and grids
- **Scale animations** on buttons
- **Fade-in effects** on scroll
- **Slide transitions** between form steps

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **React Router DOM 6** - Routing

## 📦 Installation

1. **Clone or extract the project**
   ```bash
   cd findoc-healthcare-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

## 📁 Project Structure

```
findoc-healthcare-platform/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Admin.jsx
│   │   └── Profile.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Color Palette

- **Primary Blue**: `#0891b2` to `#06b6d4`
- **Secondary Purple**: `#8b5cf6` to `#ec4899`
- **Success Green**: `#10b981` to `#059669`
- **Warning Orange**: `#f59e0b` to `#ef4444`

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      secondary: { /* your colors */ }
    }
  }
}
```

### Adding New Pages
1. Create new file in `src/pages/`
2. Add route in `src/routes/AppRoutes.jsx`
3. Update navigation in `Navbar.jsx` or `Sidebar.jsx`

### Modifying Animations
Edit animation settings in:
- `src/index.css` for CSS animations
- Component files for Framer Motion animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

- Lazy loading images
- Code splitting with React Router
- Optimized animations with Framer Motion
- Minified production build
- Tree-shaking for unused code

## 🐛 Common Issues & Solutions

### Issue: Animations not working
**Solution**: Make sure Framer Motion is installed:
```bash
npm install framer-motion
```

### Issue: Tailwind styles not applying
**Solution**: Check if PostCSS and Tailwind configs are present

### Issue: Routing not working
**Solution**: Ensure BrowserRouter is wrapping the app in App.jsx

## 📝 Development Tips

1. **Use the sidebar** - All internal pages should use the sidebar for navigation
2. **Consistent animations** - Use similar animation patterns across pages
3. **Mobile-first** - Always design for mobile first, then scale up
4. **Reuse components** - Use the Card component for consistent styling

## 🎓 For Figma Design

When creating the Figma design for this project:

1. **Landing Page**: Include hero, features, stats, CTA sections
2. **Login/Signup**: Show form layouts with step indicators
3. **Dashboard**: Display cards, charts, and sidebar layout
4. **Admin Panel**: Dark theme with tables and analytics
5. **Profile**: Show tabs and form fields
6. **Mobile Views**: Create mobile versions of all pages

**Design Tips**:
- Use the color palette defined in this project
- Include hover states for interactive elements
- Show animation states (before/after)
- Include loading states
- Design empty states for lists

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Created For

**Internship Assignment** - ZenFlow Research
- Frontend Development Intern Position
- Created by: [Your Name]
- Date: January 2026

---

## 🎯 Assignment Completion Checklist

- ✅ Landing Page with hero and features
- ✅ Login Page with authentication UI
- ✅ Signup Page with multi-step form
- ✅ Dashboard with statistics and appointments
- ✅ Admin Panel with user management
- ✅ Profile Page with editable information
- ✅ Responsive design for all screen sizes
- ✅ Smooth animations throughout
- ✅ Professional medical theme
- ✅ Reusable components
- ✅ Clean, maintainable code

**Total Pages**: 6+ pages  
**Components**: 4+ reusable components  
**Animations**: Framer Motion + CSS  
**Responsive**: Mobile, Tablet, Desktop  

---

**Happy Coding! 🚀**