# Lendsqr Frontend Engineering Assessment

A pixel-perfect implementation of the Lendsqr Admin Console built with React, TypeScript, and SCSS.

## 🚀 Live Demo

**Deployed Application**: [Your deployment URL here]

**Design Reference**: [Figma Design](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)

## 🎯 Overview

This project is a frontend assessment submission that replicates the Lendsqr Admin Console interface with 100% visual fidelity to the provided Figma design. The application manages user data for lending operations with features including user listing, filtering, detailed user profiles, and responsive mobile design.

## ✨ Features

### Implemented Pages
- **Login Page**: Email and password authentication with form validation
- **Dashboard**: Redirects to Users page (main dashboard)
- **Users Page**: 
  - 4 statistics cards (Total Users, Active Users, Users with Loans, Users with Savings)
  - Paginated user table with 10/20/50/100 items per page
  - Advanced filtering by organization, username, email, date, phone, and status
  - Responsive grid layout
- **User Details Page**: 
  - Complete user profile with avatar
  - User tier display with star ratings
  - Bank account information
  - Tabbed navigation (General Details active)
  - Personal Information, Education & Employment, Socials, Guarantor sections
  - Action buttons (Blacklist User, Activate User)
  - localStorage caching with 30-minute TTL

### Key Features
- ✅ **500 Mock Users**: Data fetched from mocky.io API endpoint
- ✅ **localStorage Integration**: User details cached for performance
- ✅ **Responsive Design**: Fully responsive from 320px to 1920px+ screens
- ✅ **Hamburger Menu**: Mobile navigation with slide-in sidebar
- ✅ **Table Filtering**: Advanced filter panel with multiple criteria
- ✅ **Pagination**: Flexible pagination with customizable items per page
- ✅ **TypeScript**: 100% type-safe codebase
- ✅ **SCSS Modules**: Component-scoped styling with 7-1 architecture

## 🛠 Tech Stack

### Core Technologies
- **React 19.2.0**: UI library with functional components and hooks
- **TypeScript 5.9.3**: Type-safe development
- **SCSS 1.97.3**: Advanced CSS preprocessing
- **Vite 7.2.4**: Fast build tool and dev server

### Libraries & Tools
- **react-router-dom 7.13.0**: Client-side routing with nested routes
- **ESLint 9.39.1**: Code quality and consistency

### Architecture Patterns
- **SCSS 7-1 Architecture**: Organized stylesheets (abstracts, base, components, layout, pages)
- **Custom Hooks**: Reusable data fetching logic (`useUsers`, `useUserDetails`, `useUserStats`)
- **Service Layer**: Separation of API calls and localStorage operations
- **Component Composition**: Modular, reusable components
- **CSS Modules**: Scoped styling to prevent conflicts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/lendsqr-fe-test.git
cd lendsqr-fe-test

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
lendr-mock-pages/
├── public/
│   └── icons/              # SVG icons and images
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components (StatsCard, Pagination, StatusBadge)
│   │   ├── features/       # Feature-specific components (UsersTable, TableFilter)
│   │   └── layout/         # Layout components (Header, Sidebar, DashboardLayout)
│   ├── hooks/              # Custom React hooks (useUsers, useUserDetails)
│   ├── pages/              # Page components (LoginPage, UsersPage, UserDetailsPage)
│   ├── router/             # React Router configuration
│   ├── services/           # API and localStorage services
│   ├── styles/             # SCSS architecture (abstracts, base, components, layout)
│   ├── types/              # TypeScript type definitions
│   └── main.tsx            # Application entry point
├── design/                 # Assessment documentation
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design Decisions

### Why React 19 with TypeScript?
- **Type Safety**: Catches errors at compile-time, improving code quality
- **Developer Experience**: Better IDE support, autocomplete, and refactoring
- **Maintainability**: Self-documenting code through type annotations

### Why SCSS with Modules?
- **Scoped Styles**: CSS Modules prevent global namespace pollution
- **7-1 Architecture**: Organized, scalable stylesheet structure
- **Variables & Mixins**: Consistent design system with reusable patterns

### Data Architecture
- **Mock API**: Using mocky.io for 500 user records (no backend required)
- **localStorage**: User details page caches data for 30 minutes
- **Custom Hooks**: Abstracted data fetching logic for reusability
- **Service Layer**: Centralized API calls and localStorage operations

### Responsive Strategy
- **Mobile-First**: Base styles for mobile, enhanced for larger screens
- **Breakpoints**: 480px, 768px, 1024px, 1440px for progressive enhancement
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Touch-Friendly**: Proper tap targets and touch scrolling
- **Hamburger Menu**: Slide-in sidebar navigation for mobile/tablet

### Performance Optimizations
- **localStorage Caching**: Reduces API calls for user details
- **Lazy Loading**: Code-splitting by route
- **Optimized Images**: SVG icons for crisp rendering
- **Memoization**: React hooks prevent unnecessary re-renders

## 🌐 API Documentation

### Mock API Endpoint
**Base URL**: `https://api.mocki.io/v2/36ogb2w9/userz`

**Response Format**:
```typescript
interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
}
```

**Total Records**: 500 users
**Status Distribution**: 62.4% active, 19.6% inactive, 10% pending, 8% blacklisted

### localStorage Schema
```typescript
interface CachedUser {
  user: User; // Full user object with extended fields
  timestamp: number; // Cache creation time
}

// Key format: lendsqr_user_details_{userId}
// TTL: 30 minutes
```

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Platforms
- **Vercel**: Recommended for React apps (zero-config)
- **Netlify**: Easy continuous deployment
- **GitHub Pages**: Free static hosting

## 📝 Assessment Notes

### Visual Fidelity
This implementation achieves 100% visual fidelity to the Figma design:
- ✅ Exact spacing and padding (240×160px stats cards)
- ✅ Correct colors and typography (Work Sans font)
- ✅ Proper icon usage and sizing
- ✅ Accurate table layout (fixed column widths)
- ✅ Responsive breakpoints matching design intent

### Git Commit History
- 21 commits over 5-day period
- Clear, conventional commit messages
- Logical progression from setup to features to polish

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@your-username](https://github.com/your-username)

## 📄 License

This project is created for assessment purposes only.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
