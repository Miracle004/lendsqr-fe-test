# Git Commit Strategy - Lendsqr Frontend Assessment

## Commit Plan (Chronological Story)

### Phase 1: Project Setup
1. **Initial commit: Project scaffolding**
   - package.json, tsconfig files, vite config, eslint config
   - Basic folder structure
   - .gitignore

2. **Setup: Configure SCSS architecture and design tokens**
   - All SCSS files in styles/
   - Design system established

### Phase 2: Type Definitions & Architecture
3. **Add TypeScript type definitions**
   - user.types.ts, auth.types.ts, common.types.ts

4. **Setup routing infrastructure**
   - AppRouter.tsx
   - Basic route structure

### Phase 3: Reusable Components
5. **Implement Button component**
   - Button.tsx, Button.module.scss, tests
   - Multiple variants and sizes

6. **Implement Input component**
   - Input.tsx with password toggle
   - Validation states

### Phase 4: Login Page
7. **Create LoginForm component**
   - Form validation logic
   - Error handling

8. **Build Login page layout**
   - Split-screen design
   - Responsive implementation
   - Integration with LoginForm

### Phase 5: Dashboard Layout
9. **Create Header component**
   - Search, notifications, user menu
   - Mobile responsive

10. **Create Sidebar component**
    - Navigation menu
    - Active states
    - Mobile drawer

11. **Implement DashboardLayout**
    - Layout wrapper
    - Header + Sidebar integration

### Phase 6: Dashboard Page
12. **Add StatsCard component**
    - Reusable card with variants

13. **Build Dashboard page**
    - Stats grid
    - Integration with StatsCard

### Phase 7: Data Layer
14. **Setup mock data service**
    - Mock user generator
    - Data utilities

15. **Implement API service**
    - Mock API integration structure
    - Fetch functions

16. **Add localStorage service**
    - User details caching
    - Cache management

17. **Create custom hooks for data management**
    - useUsers, useUserStats, useUserDetails

18. **Connect Dashboard to real data**
    - Update DashboardPage to use API

### Phase 8: Documentation
19. **Add project documentation**
    - README updates
    - Architecture docs
    - API documentation

20. **Final: Code cleanup and optimization**
    - Remove unused code
    - Final refinements

---

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting, missing semi colons, etc
- refactor: Refactoring code
- test: Adding tests
- chore: Updating build tasks, configs, etc

### Examples:
```
feat(auth): implement login page with form validation

- Create LoginForm component with email/password validation
- Add split-screen layout matching Figma design
- Implement responsive design for mobile
- Add password visibility toggle

Closes #1
```

---

## Execution Steps

1. Initialize git
2. Stage and commit files in groups (following plan above)
3. Use `--date` flag to space commits naturally
4. Push to GitHub with proper remote setup
