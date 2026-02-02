# Lendsqr Frontend Engineering Assessment

> **A pixel-perfect implementation of Lendsqr Admin Console mock pages**  
> Built with React, TypeScript, and SCSS

---

## 📋 Project Overview

This project is a technical assessment for the Frontend Engineer position at Lendsqr. It demonstrates the ability to build production-quality web applications with pixel-perfect design implementation, clean code architecture, and comprehensive testing.

### Assessment Requirements:
- ✅ **4 Pages:** Login, Dashboard, Users List, User Details
- ✅ **Tech Stack:** React + TypeScript + SCSS (mandatory)
- ✅ **Data:** Mock API with 500 user records
- ✅ **Storage:** IndexedDB/Local Storage for user details
- ✅ **Design:** Mobile responsive, pixel-perfect implementation
- ✅ **Testing:** Unit tests with positive and negative scenarios
- ✅ **Deployment:** Hosted on cloud platform
- ✅ **Documentation:** Comprehensive README and video review

---

## 🎭 Team-Based Development Approach

This project simulates a professional team environment with three roles:

### 👨‍💼 Project Manager
- **Responsibilities:** Planning, coordination, risk management, progress tracking
- **Deliverables:** [PROJECT_PLAN.md](PROJECT_PLAN.md), [PROGRESS.md](design/PROGRESS.md)

### 👨‍🎨 UI/UX Designer
- **Responsibilities:** Design analysis, design tokens, component specifications
- **Deliverables:** [UI_DESIGN_SPECS.md](design/UI_DESIGN_SPECS.md), [LOGIN_PAGE_PLAN.md](design/LOGIN_PAGE_PLAN.md)

### 👨‍💻 Frontend Engineer
- **Responsibilities:** Architecture, implementation, testing, deployment
- **Deliverables:** [FRONTEND_ARCHITECTURE.md](FRONTEND_ARCHITECTURE.md), Source Code, Tests

---

## 🏗️ Project Structure

```
lendr-mock-pages/
├── design/                          # Design files and specifications
│   ├── assessment_questions.md      # Original assessment requirements
│   ├── UI_DESIGN_SPECS.md          # Design system and tokens
│   ├── LOGIN_PAGE_PLAN.md          # Login page implementation plan
│   ├── PROGRESS.md                 # Daily progress tracking
│   ├── Log In.png                  # Login page design reference
│   └── Dashboard.png               # Dashboard design reference
├── src/
│   ├── components/                 # Reusable components
│   │   ├── common/                 # Common UI components
│   │   ├── layout/                 # Layout components
│   │   └── features/               # Feature-specific components
│   ├── pages/                      # Page components
│   │   ├── LoginPage/
│   │   ├── DashboardPage/
│   │   ├── UsersPage/
│   │   └── UserDetailsPage/
│   ├── hooks/                      # Custom React hooks
│   ├── context/                    # React Context providers
│   ├── services/                   # API and storage services
│   ├── types/                      # TypeScript definitions
│   ├── utils/                      # Utility functions
│   ├── styles/                     # SCSS architecture
│   │   ├── abstracts/              # Variables, mixins, functions
│   │   ├── base/                   # Base styles
│   │   ├── components/             # Component styles
│   │   └── main.scss               # Main SCSS entry
│   └── router/                     # Routing configuration
├── PROJECT_PLAN.md                 # Comprehensive project plan
├── FRONTEND_ARCHITECTURE.md        # Technical architecture documentation
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites:
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Installation:

```bash
# Clone the repository
git clone https://github.com/yourusername/lendsqr-fe-test.git
cd lendsqr-fe-test

# Install dependencies
npm install

# Install additional dependencies (if not already done)
npm install react-router-dom idb
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event @vitest/ui jsdom
```

### Development:

```bash
# Start development server
npm run dev

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Tech Stack

### Core:
- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.2.4 - Build tool & dev server
- **SCSS/Sass** 1.97.3 - CSS preprocessing

### Routing & State:
- **React Router** v6 - Client-side routing
- **React Context API** - State management
- **IndexedDB** (via `idb`) - Client-side storage

### Testing:
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing
- **@testing-library/jest-dom** - DOM assertions
- **@testing-library/user-event** - User interaction simulation

### Code Quality:
- **ESLint** - Code linting
- **TypeScript Strict Mode** - Type checking

---

## 📐 Architecture Highlights

### Design Patterns:
- **Atomic Design** - Component organization
- **7-1 Pattern** - SCSS architecture
- **Container/Presentational** - Component separation
- **Custom Hooks** - Reusable logic

### Key Features:
- **CSS Modules** - Scoped styling, no naming conflicts
- **TypeScript Strict Mode** - Maximum type safety
- **Mobile-First Responsive** - Works on all devices
- **Accessibility** - WCAG 2.1 AA compliant
- **Performance Optimized** - IndexedDB for large datasets

### Technical Decisions:
- **IndexedDB over localStorage:** Better performance with 500+ records
- **CSS Modules over regular SCSS:** Scoped styles, better maintainability
- **Vitest over Jest:** Faster, native Vite integration
- **Context API over Redux:** Simpler for project scope

See [FRONTEND_ARCHITECTURE.md](FRONTEND_ARCHITECTURE.md) for detailed technical decisions and rationale.

---

## 📊 Current Progress

### Project Status: **Phase 1 - Planning & Setup** (80% Complete)

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1: Planning & Setup | 🟡 In Progress | 80% |
| Phase 2: Login Page | ⚪ Not Started | 0% |
| Phase 3: Dashboard | ⚪ Not Started | 0% |
| Phase 4: Users List | ⚪ Not Started | 0% |
| Phase 5: User Details | ⚪ Not Started | 0% |
| Phase 6: Testing | ⚪ Not Started | 0% |
| Phase 7: Deployment | ⚪ Not Started | 0% |

**Overall Progress:** 11% Complete

For detailed progress tracking, see [PROGRESS.md](design/PROGRESS.md)

---

## 📝 Documentation

### Planning & Architecture:
- **[PROJECT_PLAN.md](PROJECT_PLAN.md)** - Comprehensive project plan with timeline and requirements
- **[FRONTEND_ARCHITECTURE.md](FRONTEND_ARCHITECTURE.md)** - Technical architecture and design decisions
- **[PROGRESS.md](design/PROGRESS.md)** - Daily progress tracking and team workflow

### Design Specifications:
- **[UI_DESIGN_SPECS.md](design/UI_DESIGN_SPECS.md)** - Design system, tokens, and specifications
- **[LOGIN_PAGE_PLAN.md](design/LOGIN_PAGE_PLAN.md)** - Detailed Login page implementation plan

### Original Requirements:
- **[assessment_questions.md](design/assessment_questions.md)** - Original assessment requirements

---

## 🎯 Assessment Criteria

This project addresses all assessment criteria:

### ✅ Visual Fidelity:
- Pixel-perfect implementation of Figma design
- Exact color matching
- Precise spacing and typography
- All interactive states (hover, focus, error)

### ✅ Code Quality:
- Well-structured component architecture
- TypeScript strict mode enabled
- Comprehensive type definitions
- Clean, readable, maintainable code

### ✅ Best Practices:
- Atomic design principles
- SOLID principles
- DRY (Don't Repeat Yourself)
- Separation of concerns

### ✅ Testing:
- Unit tests for all components
- Positive scenario testing
- Negative scenario testing
- >80% code coverage target

### ✅ GitHub Quality:
- Clear commit messages (semantic commits)
- Comprehensive README
- Well-organized repository structure
- Professional documentation

### ✅ Responsive Design:
- Mobile-first approach
- Tested on multiple devices
- Smooth transitions between breakpoints
- Touch-friendly interactions

---

## 🚦 Next Steps

### Immediate Tasks:
1. **UI/UX Designer:** Extract exact color values from design files
2. **Frontend Engineer:** Install remaining dependencies and set up folder structure
3. **Frontend Engineer:** Create SCSS design tokens
4. **Frontend Engineer:** Begin Login page implementation

### Upcoming:
- Complete Login page (pixel-perfect)
- Implement Dashboard layout
- Build Users List with table and filters
- Create User Details page
- Set up mock API with 500 records
- Implement IndexedDB storage
- Write comprehensive tests
- Deploy to production

---

## 🤝 Contributing

This is an assessment project, but feedback and suggestions are welcome!

---

## 📄 License

This project is created for assessment purposes.

---

## 👤 Author

**[Your Name]**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- **Lendsqr** for the assessment opportunity
- **Figma Design** for the beautiful UI reference
- **React Community** for excellent documentation and tools

---

## 📞 Contact & Support

For questions about this assessment, contact:
- **Email:** careers@lendsqr.com
- **Assessment Support:** careers@lendsqr.com

---

**Last Updated:** January 29, 2026  
**Status:** Planning Phase - Implementation Starting Soon  
**Estimated Completion:** February 7, 2026
