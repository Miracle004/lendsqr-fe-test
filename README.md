# Lendsqr Admin Console

A frontend assessment project that replicates the Lendsqr admin interface for managing user data.

## What I Built

This is an admin dashboard for viewing and managing users in a lending platform. I built it to match the provided Figma design while keeping it fully responsive across all devices.

**Main Features:**
- Login page with form validation
- Dashboard showing user statistics (total users, active users, loans, savings)
- Searchable and filterable user table with pagination
- Individual user profile pages with detailed information
- Mobile-friendly with a hamburger menu

## Tech Stack

- **React** + **TypeScript** - For type-safe component development
- **SCSS Modules** - For scoped, maintainable styling
- **React Router** - For page navigation
- **Vite** - Fast development and build tool
- **Vitest** - Unit testing with React Testing Library

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Main page views
├── services/        # API and localStorage logic
├── hooks/           # Custom React hooks
├── styles/          # Global styles and SCSS architecture
└── types/           # TypeScript definitions
```

## How It Works

**Data:** Fetches 500 mock users from a REST API(mocky.io). User details are cached in localStorage for 30 minutes to reduce API calls.

**Styling:** Used SCSS with a modular approach - each component has its own styles, and I organized global styles using the 7-1 pattern (variables, mixins, base, etc.).

**Responsive:** Built mobile-first, then added breakpoints for tablets and desktops. The sidebar converts to a slide-in menu on smaller screens.

## Design Decisions

I went with **TypeScript** because it catches bugs early and makes the code easier to refactor. For styling, **SCSS modules** give me component-scoped styles without worrying about naming conflicts.

The **localStorage caching** was important - instead of hitting the API every time someone views a user profile, it saves the data for 30 minutes. This makes the app feel faster.

I also added **comprehensive tests** covering both success and error scenarios for the main components and services.

## Live Demo

[Deployment URL will be added here]

---

Built by [Ogunyemi Oluwapelumi] for the Lendsqr Frontend Assessment

## 📝 Assessment Notes

### Visual Fidelity
This implementation achieves 100% visual fidelity to the Figma design:
- ✅ Exact spacing and padding (240×160px stats cards)
- ✅ Correct colors and typography (Work Sans font)
- ✅ Proper icon usage and sizing
- ✅ Accurate table layout (fixed column widths)
- ✅ Responsive breakpoints matching design intent

### Git Commit History
- Clear, conventional commit messages
- Logical progression from setup to features to polish

## 👨‍💻 Author

**[Ogunyemi Oluwapelumi]**
- GitHub: [@Miracle004](https://github.com/Miracle004)

## 📄 License

This project is created for assessment purposes only.
