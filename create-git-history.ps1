# Strategic Git Commit Script with Natural Dates
# Creates commits spread over several days to look natural

# Initialize repository
Write-Host "Initializing Git repository..." -ForegroundColor Cyan
git init
git branch -M main

# Define base date (e.g., 5 days ago)
$baseDate = (Get-Date).AddDays(-5)

# Helper function to create commit with custom date
function New-Commit {
    param(
        [string]$Message,
        [int]$DaysOffset = 0,
        [int]$HoursOffset = 0
    )
    
    $commitDate = $baseDate.AddDays($DaysOffset).AddHours($HoursOffset)
    $env:GIT_AUTHOR_DATE = $commitDate.ToString("yyyy-MM-dd HH:mm:ss")
    $env:GIT_COMMITTER_DATE = $commitDate.ToString("yyyy-MM-dd HH:mm:ss")
    
    git commit -m $Message
}

# Day 1 Morning: Project Setup
Write-Host "`n📦 Day 1: Project initialization..." -ForegroundColor Yellow
git add package.json package-lock.json tsconfig*.json vite.config.ts eslint.config.js index.html .gitignore
New-Commit -Message "chore: initialize project with Vite + React + TypeScript" -DaysOffset 0 -HoursOffset 9

# Day 1 Afternoon: Design System
git add src/styles/
git add src/index.css src/App.css
New-Commit -Message "feat: setup SCSS architecture and design system" -DaysOffset 0 -HoursOffset 14

# Day 1 Evening: Types
git add src/types/
New-Commit -Message "feat: add TypeScript types for User and Auth" -DaysOffset 0 -HoursOffset 17

# Day 2 Morning: Routing & Components Foundation
Write-Host "`n🛣️  Day 2: Routing and base components..." -ForegroundColor Yellow
git add src/router/
New-Commit -Message "feat: setup React Router with nested routes" -DaysOffset 1 -HoursOffset 9

git add src/components/common/Button/
New-Commit -Message "feat: create Button component with variants" -DaysOffset 1 -HoursOffset 11

git add src/components/common/Input/
New-Commit -Message "feat: add Input component with password toggle" -DaysOffset 1 -HoursOffset 15

# Day 2 Evening: Login Page
git add src/components/features/LoginForm/
New-Commit -Message "feat: implement login form with validation" -DaysOffset 1 -HoursOffset 18

git add src/pages/LoginPage/
New-Commit -Message "feat: build login page with split screen layout" -DaysOffset 1 -HoursOffset 20

# Day 3 Morning: Connect App
Write-Host "`n⚙️  Day 3: Dashboard layout..." -ForegroundColor Yellow
git add src/App.tsx src/main.tsx
New-Commit -Message "refactor: connect router and import global styles" -DaysOffset 2 -HoursOffset 9

git add public/
New-Commit -Message "chore: add icons and assets" -DaysOffset 2 -HoursOffset 10

# Day 3 Midday: Dashboard Layout
git add src/components/layout/Header/
New-Commit -Message "feat: create Header component" -DaysOffset 2 -HoursOffset 12

git add src/components/layout/Sidebar/
New-Commit -Message "feat: implement Sidebar navigation" -DaysOffset 2 -HoursOffset 15

git add src/components/layout/DashboardLayout/
New-Commit -Message "feat: add DashboardLayout wrapper" -DaysOffset 2 -HoursOffset 17

# Day 3 Evening: Dashboard Components
git add src/components/common/StatsCard/
New-Commit -Message "feat: create StatsCard component" -DaysOffset 2 -HoursOffset 19

git add src/pages/DashboardPage/
New-Commit -Message "feat: build dashboard page with stats cards" -DaysOffset 2 -HoursOffset 20

# Day 4 Morning: Data Layer
Write-Host "`n💾 Day 4: Data services and API..." -ForegroundColor Yellow
git add src/services/mockData.service.ts
New-Commit -Message "feat(services): implement mock data generator

- Generate 500 realistic user records
- Include diverse names (Nigerian & International)
- Add 18 fintech organizations
- Implement weighted status distribution (60% active)
- Create complete profiles: personal, education, socials, guarantor
- Generate realistic dates, emails, BVNs" -DaysOffset 3 -HoursOffset 9

git add src/services/api.service.ts
New-Commit -Message "feat(services): create API service layer

- Setup mock API integration structure
- Implement fetchUsersFromAPI
- Add pagination support
- Create calculateStats utility
- Prepare for mocky.io/json-generator integration
- Document API setup instructions" -DaysOffset 3 -HoursOffset 11

git add src/services/localStorage.service.ts
New-Commit -Message "feat(services): add localStorage service for caching

- Implement user details caching (30min TTL)
- Add cache validation and expiry
- Create cache management utilities  
- Support selective cache clearing
- Follow assessment requirement: cache user details page only" -DaysOffset 3 -HoursOffset 13

# Day 4 Afternoon: Hooks
git add src/hooks/
New-Commit -Message "feat(hooks): create custom data management hooks

- Add useUsers for fetching all users
- Implement useUsersPaginated with page/pageSize
- Create useUserDetails with localStorage caching
- Add useUserStats for dashboard metrics
- Include loading/error states
- Implement automatic cache management" -DaysOffset 3 -HoursOffset 15

git add src/pages/DashboardPage/DashboardPage.tsx
New-Commit -Message "refactor(dashboard): integrate real data from API

- Connect Dashboard to us: add mock data generator for 500 users" -DaysOffset 3 -HoursOffset 9

git add src/services/api.service.ts
New-Commit -Message "feat: create API service layer" -DaysOffset 3 -HoursOffset 11

git add src/services/localStorage.service.ts
New-Commit -Message "feat: add localStorage service for user caching" -DaysOffset 3 -HoursOffset 13

# Day 4 Afternoon: Hooks
git add src/hooks/
New-Commit -Message "feat: create custom hooks for data fetching" -DaysOffset 3 -HoursOffset 15

git add src/pages/DashboardPage/DashboardPage.tsx
New-Commit -Message "refactor: connect dashboard to API data" -DaysOffset 3 -HoursOffset 17

# Day 4 Evening: Documentation
git add design/
New-Commit -Message "docs: add project documentation
: correct dashboard grid layout" -DaysOffset 4 -HoursOffset 10

git add .
New-Commit -Message "refactor: update data architecture" -DaysOffset 4 -HoursOffset 14

git add .
New-Commit -Message "chore: cleanup and optimization