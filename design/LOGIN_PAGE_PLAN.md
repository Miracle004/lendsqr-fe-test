# 🔐 Login Page Implementation Plan

## 👨‍🎨 Active Team Member: **UI/UX Designer**
**Status:** Analyzing Log In.png for exact specifications

---

## 📸 Design Reference
**Source:** `design/Log In.png`  
**Figma Link:** https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend-Testing

---

## 🎨 Login Page - Detailed Visual Analysis

### Layout Overview:
The login page uses a **split-screen layout** with two equal-width panels.

```
┌───────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ┌─────────────────────────┬───────────────────────────────────────┐  │
│  │                         │                                       │  │
│  │   LEFT PANEL (50%)      │      RIGHT PANEL (50%)               │  │
│  │                         │                                       │  │
│  │   ┌─────────────┐       │      [Logo - Top Left]              │  │
│  │   │   LENDSQR   │       │                                       │  │
│  │   │    LOGO     │       │      Welcome!                         │  │
│  │   └─────────────┘       │      Enter details to login.          │  │
│  │                         │                                       │  │
│  │   Tagline/Subtitle      │      ┌─────────────────────────┐     │  │
│  │                         │      │  Email                  │     │  │
│  │   ┌─────────────────┐   │      └─────────────────────────┘     │  │
│  │   │                 │   │                                       │  │
│  │   │  ILLUSTRATION   │   │      ┌─────────────────────────┐     │  │
│  │   │   (Character    │   │      │  Password        [SHOW] │     │  │
│  │   │    with laptop) │   │      └─────────────────────────┘     │  │
│  │   │                 │   │                                       │  │
│  │   └─────────────────┘   │      FORGOT PASSWORD?                 │  │
│  │                         │                                       │  │
│  │                         │      ┌─────────────────────────┐     │  │
│  │                         │      │      LOG IN             │     │  │
│  │                         │      └─────────────────────────┘     │  │
│  │                         │                                       │  │
│  └─────────────────────────┴───────────────────────────────────────┘  │
│                                                                         │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 📏 Measurements & Specifications

### Container & Layout:
- **Total Page Width:** 100vw
- **Total Page Height:** 100vh
- **Left Panel Width:** 50% (min: 500px at breakpoint)
- **Right Panel Width:** 50% (min: 500px at breakpoint)
- **Content Max Width:** ~600px (centered within panel)

### Left Panel (Brand Section):
```scss
// Background
background: linear-gradient(to bottom, #FFFFFF 0%, #F5F5F5 100%); // To be confirmed

// Logo
width: 173.76px;      // To be measured from design
height: 36px;         // To be measured from design
margin-top: 80px;     // Approximate
margin-left: 80px;    // Approximate

// Tagline/Subtitle
font-size: 48px;      // To be confirmed
font-weight: 700;
color: #213F7D;       // To be confirmed
margin-top: 24px;

// Illustration
width: ~500px;        // To be measured
height: auto;
margin-top: 100px;    // Approximate
```

### Right Panel (Form Section):
```scss
// Background
background: #FFFFFF;
padding: 100px 80px;  // Approximate

// Logo (top right)
width: 173.76px;
height: 36px;
margin-bottom: 60px;

// Heading "Welcome!"
font-size: 40px;      // To be confirmed
font-weight: 700;
color: #213F7D;       // To be confirmed
margin-bottom: 12px;

// Subheading "Enter details to login."
font-size: 20px;      // To be confirmed
font-weight: 400;
color: #545F7D;       // To be confirmed
margin-bottom: 60px;

// Form Container
max-width: 447px;     // To be measured
width: 100%;
```

---

## 🎯 Form Elements Specifications

### Input Fields:
```scss
.input-field {
  width: 100%;
  height: 50px;           // To be confirmed
  padding: 0 20px;        // To be confirmed
  margin-bottom: 24px;    // To be confirmed
  
  border: 2px solid #545F7D;  // Border color to be confirmed
  border-radius: 8px;         // To be confirmed
  
  font-size: 14px;
  font-family: 'Work Sans', sans-serif;
  color: #545F7D;
  
  &::placeholder {
    color: #9CA3AF;       // To be confirmed
    opacity: 0.7;
  }
  
  &:focus {
    outline: none;
    border-color: #39CDCC;  // Primary color - to be confirmed
    box-shadow: 0 0 0 3px rgba(57, 205, 204, 0.1);
  }
  
  &:error {
    border-color: #E4033B;  // Error color
  }
}
```

### Password Field (with Show/Hide):
```scss
.password-wrapper {
  position: relative;
  
  .show-password-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    
    font-size: 12px;
    font-weight: 600;
    color: #39CDCC;         // Primary color
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    background: transparent;
    border: none;
    cursor: pointer;
    
    &:hover {
      color: darken(#39CDCC, 10%);
    }
  }
}
```

### Forgot Password Link:
```scss
.forgot-password {
  display: block;
  margin-top: 8px;
  margin-bottom: 30px;
  
  font-size: 12px;
  font-weight: 600;
  color: #39CDCC;         // Primary color
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
}
```

### Login Button:
```scss
.login-button {
  width: 100%;
  height: 48px;           // To be confirmed
  
  background: #39CDCC;    // Primary color - to be confirmed
  border: none;
  border-radius: 8px;     // To be confirmed
  
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: darken(#39CDCC, 8%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(57, 205, 204, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: #D4D4D4;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &.loading {
    position: relative;
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid #FFFFFF;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
  }
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
```

---

## 🎨 Color Palette (To Be Extracted)

### Primary Colors:
```scss
// Based on visual analysis - TO BE CONFIRMED WITH COLOR PICKER
$primary-teal: #39CDCC;           // Main brand color (teal/cyan)
$primary-navy: #213F7D;           // Dark navy blue (headings)
$primary-grey: #545F7D;           // Medium grey (body text, borders)
```

### Neutral Colors:
```scss
$white: #FFFFFF;
$grey-50: #FAFAFA;
$grey-100: #F5F5F5;
$grey-200: #E5E5E5;
$grey-300: #D4D4D4;
$grey-400: #9CA3AF;
$grey-600: #545F7D;
$grey-900: #213F7D;
$black: #000000;
```

### Semantic Colors:
```scss
$success: #39CD62;                // Green
$error: #E4033B;                  // Red
$warning: #F89E0A;                // Orange
$info: #39CDCC;                   // Same as primary
```

### Opacity Variants:
```scss
$primary-teal-light: rgba(57, 205, 204, 0.1);    // For hover effects
$primary-teal-medium: rgba(57, 205, 204, 0.3);   // For shadows
$grey-overlay: rgba(33, 63, 125, 0.5);           // For overlays
```

---

## 📱 Responsive Breakpoints

### Desktop (Default - 1024px and above):
```scss
.login-page {
  display: flex;
  
  .left-panel,
  .right-panel {
    width: 50%;
  }
}
```

### Tablet (768px - 1023px):
```scss
@media (max-width: 1023px) {
  .login-page {
    .left-panel {
      width: 45%;
      padding: 60px 40px;
    }
    
    .right-panel {
      width: 55%;
      padding: 60px 50px;
    }
    
    // Slightly smaller fonts and spacing
  }
}
```

### Mobile (below 768px):
```scss
@media (max-width: 767px) {
  .login-page {
    flex-direction: column;
    
    .left-panel {
      display: none;  // Or show minimal version
      // Alternative: Show only logo
    }
    
    .right-panel {
      width: 100%;
      padding: 40px 24px;
      
      .form-container {
        max-width: 100%;
      }
      
      h1 {
        font-size: 32px;  // Smaller heading
      }
      
      p {
        font-size: 16px;
      }
    }
  }
}
```

### Small Mobile (below 480px):
```scss
@media (max-width: 479px) {
  .login-page {
    .right-panel {
      padding: 32px 20px;
      
      h1 {
        font-size: 28px;
      }
      
      .input-field {
        height: 44px;  // Slightly smaller
        font-size: 16px;  // Prevent zoom on iOS
      }
      
      .login-button {
        height: 44px;
      }
    }
  }
}
```

---

## 🧩 Component Breakdown

### 1. LoginPage Component
```typescript
// pages/LoginPage/LoginPage.tsx
interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className={styles.loginPage}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
};
```

### 2. LeftPanel Component (Brand Section)
```typescript
// components/features/LoginForm/LeftPanel.tsx
export const LeftPanel: React.FC = () => {
  return (
    <div className={styles.leftPanel}>
      <Logo className={styles.logo} />
      <h1 className={styles.tagline}>tagline here</h1>
      <img 
        src="/images/login-illustration.png" 
        alt="Lendsqr illustration" 
        className={styles.illustration}
      />
    </div>
  );
};
```

### 3. RightPanel Component (Form Section)
```typescript
// components/features/LoginForm/RightPanel.tsx
export const RightPanel: React.FC = () => {
  return (
    <div className={styles.rightPanel}>
      <Logo className={styles.logoSmall} />
      <div className={styles.formContainer}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <LoginForm />
      </div>
    </div>
  );
};
```

### 4. LoginForm Component
```typescript
// components/features/LoginForm/LoginForm.tsx
interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation and submission logic
  };
  
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Input 
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      
      <PasswordInput
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPassword={showPassword}
        onToggleShow={() => setShowPassword(!showPassword)}
        error={errors.password}
      />
      
      <Link to="/forgot-password" className={styles.forgotPassword}>
        Forgot Password?
      </Link>
      
      <Button 
        type="submit" 
        fullWidth 
        loading={isLoading}
        disabled={!email || !password}
      >
        Log In
      </Button>
    </form>
  );
};
```

---

## ✅ Implementation Checklist

### Assets Needed:
- [ ] Lendsqr logo (SVG format)
- [ ] Login page illustration (PNG/SVG)
- [ ] Favicon

### HTML Structure:
- [ ] Semantic HTML elements
- [ ] Proper accessibility attributes
- [ ] Form labels (can be visually hidden)
- [ ] ARIA labels where needed

### Styling (SCSS):
- [ ] Split-screen layout
- [ ] Typography styles
- [ ] Input field styling
- [ ] Button styling
- [ ] Hover states
- [ ] Focus states
- [ ] Error states
- [ ] Loading states
- [ ] Responsive breakpoints

### Functionality:
- [ ] Email validation
- [ ] Password validation
- [ ] Show/hide password toggle
- [ ] Form submission
- [ ] Error handling
- [ ] Loading state during submission
- [ ] Redirect on successful login
- [ ] Remember user (optional)

### Testing:
- [ ] Positive scenario: Valid credentials
- [ ] Negative scenario: Invalid email format
- [ ] Negative scenario: Empty fields
- [ ] Negative scenario: Wrong credentials
- [ ] Test responsive layout at all breakpoints
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility

### Accessibility:
- [ ] Keyboard navigable
- [ ] Screen reader compatible
- [ ] Proper focus indicators
- [ ] Error announcements
- [ ] Label associations
- [ ] Color contrast compliance (WCAG AA)

---

## 🎬 Implementation Order

### Step 1: Setup (30 min)
**Owner:** Frontend Engineer
- Create folder structure for LoginPage
- Set up SCSS modules
- Create basic component shells

### Step 2: Layout (1 hour)
**Owner:** Frontend Engineer
- Implement split-screen layout
- Position elements
- Add placeholder content
- Test responsive breakpoints

### Step 3: Styling (2-3 hours)
**Owner:** Frontend Engineer
**Dependency:** Exact color values from UI/UX Designer
- Apply design tokens
- Style all form elements
- Implement hover/focus states
- Fine-tune spacing and typography

### Step 4: Functionality (2 hours)
**Owner:** Frontend Engineer
- Implement form validation
- Add show/hide password toggle
- Handle form submission
- Add loading states
- Implement error handling

### Step 5: Testing (1-2 hours)
**Owner:** Frontend Engineer
- Write unit tests
- Test all user interactions
- Test responsive design
- Accessibility testing

### Step 6: Pixel-Perfect Refinement (1-2 hours)
**Owner:** Frontend Engineer + UI/UX Designer
- Compare with design side-by-side
- Adjust any discrepancies
- Fine-tune animations
- Final QA

**Total Estimated Time:** 8-11 hours

---

## 🚨 Critical Notes

### Pixel-Perfect Requirements:
- Use exact measurements from design
- Match colors precisely (use color picker)
- Typography must match exactly (size, weight, line-height, letter-spacing)
- Spacing must be consistent with design
- Border radius must match
- Shadows must match

### Common Pitfalls to Avoid:
- ❌ Using approximate values
- ❌ Inconsistent spacing
- ❌ Wrong font weights
- ❌ Missing hover/focus states
- ❌ Poor mobile responsiveness
- ❌ Accessibility issues
- ❌ Missing error states

---

## 🔄 Next Actions

### Immediate (UI/UX Designer):
1. Open Log In.png in image editor
2. Use color picker to extract exact hex values
3. Measure all dimensions with pixel ruler
4. Update color palette section
5. Update measurements section
6. Export/create assets (logo, illustration)

### Following (Frontend Engineer):
1. Wait for exact specifications
2. Install dependencies
3. Create folder structure
4. Implement layout
5. Apply styling
6. Add functionality
7. Write tests

---

**Status:** ⏳ Awaiting exact design measurements  
**Blocker:** Need color extraction and precise measurements  
**Est. Time to Complete:** 8-11 hours after specs provided  
**Last Updated:** January 29, 2026
