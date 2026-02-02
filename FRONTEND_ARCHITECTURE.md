# Frontend Architecture Plan

## 👨‍💻 Active Team Member: **Frontend Engineer**

**Status:** Planning project architecture and folder structure

---

## 🏗️ Project Architecture Overview

### Tech Stack:
- **Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Styling:** SCSS (Sass 1.97.3)
- **Build Tool:** Vite 7.2.4
- **State Management:** React Context API + Local Storage/IndexedDB
- **Routing:** React Router v6
- **API Mocking:** Mock Service Worker (MSW) or fetch with mock data
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel or Netlify

---

## 📁 Proposed Folder Structure

```
lendr-mock-pages/
├── public/
│   ├── icons/                    # Icon assets
│   ├── images/                   # Images (login illustration, etc.)
│   └── mockData/                 # Mock API data (500 users)
├── src/
│   ├── assets/                   # Static assets
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/               # Reusable components
│   │   ├── common/               # Common UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── Button.module.scss
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Input.test.tsx
│   │   │   │   └── Input.module.scss
│   │   │   ├── Card/
│   │   │   ├── Table/
│   │   │   └── Modal/
│   │   ├── layout/               # Layout components
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   ├── Footer/
│   │   │   └── DashboardLayout/
│   │   └── features/             # Feature-specific components
│   │       ├── LoginForm/
│   │       ├── UserStats/
│   │       ├── UserTable/
│   │       └── UserDetails/
│   ├── pages/                    # Page components
│   │   ├── LoginPage/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── LoginPage.test.tsx
│   │   │   └── LoginPage.module.scss
│   │   ├── DashboardPage/
│   │   ├── UsersPage/
│   │   └── UserDetailsPage/
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useUsers.ts
│   │   └── usePagination.ts
│   ├── context/                  # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── UserContext.tsx
│   ├── services/                 # API and data services
│   │   ├── api.ts
│   │   ├── storage.ts
│   │   └── mockData.ts
│   ├── types/                    # TypeScript type definitions
│   │   ├── user.types.ts
│   │   ├── auth.types.ts
│   │   └── common.types.ts
│   ├── utils/                    # Utility functions
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── helpers.ts
│   ├── styles/                   # Global styles and SCSS
│   │   ├── abstracts/            # Variables, mixins, functions
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _functions.scss
│   │   │   └── _breakpoints.scss
│   │   ├── base/                 # Base styles
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _global.scss
│   │   ├── components/           # Component-specific styles
│   │   ├── layouts/              # Layout styles
│   │   └── main.scss             # Main SCSS entry point
│   ├── router/                   # Routing configuration
│   │   └── AppRouter.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests/                        # Test utilities and setup
│   ├── setup.ts
│   └── utils/
├── design/                       # Design files and specs
│   ├── assessment_questions.md
│   ├── UI_DESIGN_SPECS.md
│   ├── Log In.png
│   └── Dashboard.png
├── docs/                         # Documentation
│   └── API.md
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── PROJECT_PLAN.md
├── FRONTEND_ARCHITECTURE.md
└── README.md
```

---

## 🔧 Required Dependencies

### Production Dependencies:
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^6.22.0",
  "idb": "^8.0.0"
}
```

### Development Dependencies:
```json
{
  "sass": "^1.97.3",
  "typescript": "~5.9.3",
  "vite": "^7.2.4",
  "@vitejs/plugin-react": "^5.1.1",
  "vitest": "^1.2.0",
  "@testing-library/react": "^14.1.0",
  "@testing-library/jest-dom": "^6.1.0",
  "@testing-library/user-event": "^14.5.0",
  "msw": "^2.0.0"
}
```

---

## 🎯 Component Architecture

### 1. **Atomic Design Principles**

Following atomic design methodology:
- **Atoms:** Button, Input, Icon, Label
- **Molecules:** FormField, SearchBar, StatsCard
- **Organisms:** LoginForm, UserTable, Header, Sidebar
- **Templates:** DashboardLayout, AuthLayout
- **Pages:** LoginPage, DashboardPage, UsersPage, UserDetailsPage

### 2. **Component Design Pattern**

Each component follows this structure:
```
ComponentName/
├── ComponentName.tsx          # Component logic
├── ComponentName.module.scss  # Component styles
├── ComponentName.test.tsx     # Unit tests
├── ComponentName.types.ts     # TypeScript types (if complex)
└── index.ts                   # Export barrel
```

---

## 🗂️ Data Management Strategy

### 1. **Mock API Data Structure**

```typescript
interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
  // Extended fields for user details page
  personalInfo: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}
```

### 2. **State Management**

**Context Structure:**
```typescript
// AuthContext - User authentication state
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// UserContext - Users data state
interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  getUserById: (id: string) => User | undefined;
  filters: UserFilters;
  setFilters: (filters: UserFilters) => void;
}
```

### 3. **Local Storage/IndexedDB Strategy**

Use **IndexedDB** for better performance with 500 records:

```typescript
// services/storage.ts
class UserStorage {
  private dbName = 'lendsqr-db';
  private storeName = 'users';
  
  async saveUser(user: User): Promise<void>;
  async getUser(id: string): Promise<User | undefined>;
  async getAllUsers(): Promise<User[]>;
  async updateUser(user: User): Promise<void>;
  async deleteUser(id: string): Promise<void>;
}
```

---

## 🛣️ Routing Structure

```typescript
// router/AppRouter.tsx
const routes = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'users/:id',
        element: <UserDetailsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
```

### Protected Routes:
```typescript
<ProtectedRoute>
  <DashboardLayout />
</ProtectedRoute>
```

---

## 🎨 SCSS Architecture (7-1 Pattern)

```scss
// styles/main.scss
@charset "UTF-8";

// 1. Abstracts
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/breakpoints';

// 2. Base
@import 'base/reset';
@import 'base/typography';
@import 'base/global';

// 3. Components
@import 'components/button';
@import 'components/input';
@import 'components/card';

// 4. Layouts
@import 'layouts/header';
@import 'layouts/sidebar';
@import 'layouts/footer';

// 5. Pages (if needed for page-specific styles)
// 6. Themes (if needed)
// 7. Vendors (third-party CSS)
```

### SCSS Modules:
Each component uses CSS Modules to avoid style conflicts:
```scss
// Button.module.scss
.button {
  padding: $spacing-4;
  background: $primary-color;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
  
  &--secondary {
    background: $secondary-color;
  }
}
```

---

## 🧪 Testing Strategy

### 1. **Unit Tests** (Component Level)
```typescript
// Button.test.tsx
describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByText('Click')).toBeDisabled();
  });
});
```

### 2. **Integration Tests** (Feature Level)
```typescript
// LoginForm.test.tsx
describe('Login Form Integration', () => {
  it('submits form with valid credentials', async () => {
    // Positive scenario
  });
  
  it('shows error with invalid credentials', async () => {
    // Negative scenario
  });
  
  it('validates email format', async () => {
    // Negative scenario
  });
});
```

### 3. **E2E Tests** (User Flow)
- Login flow
- User list navigation and filtering
- User details view

---

## 🚀 Development Workflow

### Phase 1: Foundation Setup
1. ✅ Install required dependencies
2. ⏳ Set up folder structure
3. ⏳ Configure SCSS architecture
4. ⏳ Create design tokens
5. ⏳ Set up routing
6. ⏳ Configure testing environment

### Phase 2: Common Components
1. ⏳ Button component
2. ⏳ Input component
3. ⏳ Card component
4. ⏳ Table component
5. ⏳ Modal component

### Phase 3: Page Implementation
1. ⏳ Login page (pixel-perfect)
2. ⏳ Dashboard layout (header, sidebar)
3. ⏳ Dashboard page (stats cards)
4. ⏳ Users list page (table, filters, pagination)
5. ⏳ User details page (tabs, information display)

### Phase 4: Integration
1. ⏳ Mock API integration
2. ⏳ IndexedDB setup
3. ⏳ Authentication flow
4. ⏳ State management

### Phase 5: Testing & QA
1. ⏳ Write unit tests
2. ⏳ Test responsive design
3. ⏳ Cross-browser testing
4. ⏳ Performance optimization

### Phase 6: Deployment
1. ⏳ Build optimization
2. ⏳ Deploy to Vercel/Netlify
3. ⏳ Documentation
4. ⏳ Video recording

---

## 📋 Code Quality Standards

### TypeScript:
- Strict mode enabled
- No `any` types (use `unknown` when necessary)
- Proper interface/type definitions
- Explicit return types for functions

### React:
- Functional components with hooks
- Proper prop typing
- Use `React.memo` for expensive components
- Custom hooks for reusable logic

### SCSS:
- BEM naming convention (with CSS Modules)
- No inline styles
- Use design tokens/variables
- Mobile-first approach

### Git Commits:
```
feat: add login page component
fix: resolve input validation issue
style: update button hover state
test: add user table unit tests
docs: update README with setup instructions
```

---

## 🔄 Next Actions for Frontend Engineer:

### Immediate Tasks:
1. ✅ Complete architecture planning
2. ⏳ Install additional dependencies (React Router, testing libraries)
3. ⏳ Set up folder structure
4. ⏳ Create SCSS design tokens from UI specs
5. ⏳ Set up routing configuration
6. ⏳ Create common component templates

### Waiting On:
- **UI/UX Designer:** Exact color values and spacing measurements
- **Project Manager:** Approval of architecture plan

---

## 📊 Technical Decisions & Rationale

### 1. Why IndexedDB over Local Storage?
- Better performance with 500 records
- Supports complex data structures
- Asynchronous operations (non-blocking)
- Larger storage capacity

### 2. Why CSS Modules over regular SCSS?
- Scoped styles (no naming conflicts)
- Better code splitting
- Type-safe with TypeScript
- Easier maintenance

### 3. Why Vitest over Jest?
- Native Vite integration
- Faster test execution
- Modern ESM support
- Compatible with React Testing Library

### 4. Why React Context over Redux?
- Simpler for this project size
- Less boilerplate
- Built-in to React
- Sufficient for assessment requirements

---

**Status:** Architecture planning complete, ready to begin implementation  
**Next Phase:** Install dependencies and set up folder structure  
**Last Updated:** January 29, 2026
