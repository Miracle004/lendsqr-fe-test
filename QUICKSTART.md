# 🚀 Quick Start Guide

## Getting Started

### 1. Start Development Server
```bash
npm run dev
```

The app will be available at: `http://localhost:5173`

### 2. Test the Login Page

**Test Valid Login:**
- Email: `test@lendsqr.com`
- Password: `password123`
- Click "LOG IN"
- You should see a loading spinner
- It will attempt to navigate to `/dashboard` (not yet implemented)

**Test Form Validation:**
- Leave fields empty → Should show "required" errors
- Enter invalid email → Should show "valid email" error
- Enter short password → Should show "6 characters" error

**Test Password Toggle:**
- Type in password field
- Click "SHOW" button → Password becomes visible
- Click "HIDE" button → Password becomes hidden again

**Test Responsive Design:**
- Resize browser window
- Mobile (< 768px): Brand section hidden, form full-width
- Tablet (768-1023px): Adjusted layout
- Desktop (1024px+): Split-screen layout

---

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button/          ← Reusable button component
│   │   └── Input/           ← Reusable input component
│   └── features/
│       └── LoginForm/       ← Login form logic
├── pages/
│   └── LoginPage/           ← Login page layout
├── router/
│   └── AppRouter.tsx        ← Router configuration
├── styles/
│   ├── abstracts/           ← Variables, mixins, functions
│   ├── base/                ← Reset, typography, global
│   └── main.scss            ← Main SCSS entry
├── types/                   ← TypeScript definitions
└── App.tsx                  ← Root component
```

---

## Available Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production

# Lint
npm run lint         # Run ESLint

# Preview
npm run preview      # Preview production build
```

---

## What's Been Built

✅ Complete SCSS architecture with design tokens  
✅ Reusable Button component (3 variants, 3 sizes)  
✅ Reusable Input component (with password toggle)  
✅ Login page with split-screen layout  
✅ Form validation  
✅ Loading states  
✅ Responsive design  
✅ React Router setup  

---

## Next Steps

1. **Add Assets:**
   - Place login illustration in `public/images/`
   - Update logo if needed

2. **Build Dashboard:**
   - Create Header component
   - Create Sidebar component
   - Create Dashboard layout
   - Add dashboard route

3. **Add Testing:**
   - Install testing dependencies
   - Write component tests
   - Add E2E tests

---

## Design Tokens

All design tokens are in `src/styles/abstracts/_variables.scss`:

**Colors:**
- Primary Teal: `#39CDCC`
- Primary Navy: `#213F7D`
- Primary Grey: `#545F7D`

**Spacing:**
- 8px grid system
- Variables: `$spacing-1` through `$spacing-24`

**Typography:**
- Font: Work Sans
- Sizes: `$font-size-xs` through `$font-size-5xl`

---

## Component Usage

### Button
```tsx
import Button from './components/common/Button';

<Button variant="primary" size="md" fullWidth>
  Click Me
</Button>

// Variants: primary, secondary, text
// Sizes: sm, md, lg
// Props: loading, disabled, fullWidth
```

### Input
```tsx
import Input from './components/common/Input';

<Input
  type="email"
  placeholder="Email"
  error="Please enter a valid email"
  showPasswordToggle  // For password inputs
/>
```

---

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 5173
npx kill-port 5173
```

**SCSS not working?**
- Check that `sass` is installed: `npm list sass`
- Restart dev server

**TypeScript errors?**
- Run: `npm run build` to see full type errors
- Check `tsconfig.json` configuration

---

## Documentation

- [PROJECT_PLAN.md](PROJECT_PLAN.md) - Complete project plan
- [FRONTEND_ARCHITECTURE.md](FRONTEND_ARCHITECTURE.md) - Technical architecture
- [DEVELOPMENT_STATUS.md](DEVELOPMENT_STATUS.md) - Current development status
- [design/LOGIN_PAGE_PLAN.md](design/LOGIN_PAGE_PLAN.md) - Login page specs

---

**Happy Coding! 🚀**
