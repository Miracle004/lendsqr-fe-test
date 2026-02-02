# UI/UX Design Specifications

## 👨‍🎨 Active Team Member: **UI/UX Designer**

**Status:** Analyzing design files and extracting specifications

---

## 🎨 Design System Analysis

### Design Files Available:
1. ✅ **Log In.png** - Login page design
2. ✅ **Dashboard.png** - Dashboard layout
3. 📋 **Figma Link:** https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend-Testing

---

## 🔍 Login Page Design Analysis (Log In.png)

### Visual Hierarchy:
The login page follows a split-screen layout with strong visual balance.

### Layout Structure:
```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│  LEFT SIDE (50%)        │    RIGHT SIDE (50%)            │
│  Brand + Illustration   │    Login Form                  │
│                         │                                │
│  - Lendsqr Logo         │    - Logo (top left)          │
│  - Tagline              │    - Welcome text             │
│  - Illustration         │    - Email input              │
│                         │    - Password input           │
│                         │    - Show password toggle     │
│                         │    - Forgot password link     │
│                         │    - Log in button            │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Design Tokens (To Be Extracted):

#### Color Palette:
```scss
// Primary Colors
$primary-color: #39CDCC;      // Teal/Cyan (brand color - to be confirmed from design)
$secondary-color: #545F7D;     // Dark blue-grey (text color - to be confirmed)

// Neutral Colors
$white: #FFFFFF;
$black: #213F7D;               // Dark navy (to be confirmed)
$grey-100: #F5F5F5;
$grey-200: #E5E5E5;
$grey-300: #D4D4D4;
$grey-600: #545F7D;

// Semantic Colors
$success: #39CD62;
$error: #E4033B;
$warning: #F89E0A;
$info: #39CDCC;
```

#### Typography:
```scss
// Font Families
$font-primary: 'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif;
$font-secondary: 'Avenir Next', sans-serif;

// Font Sizes
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;
$font-size-xl: 24px;
$font-size-2xl: 32px;
$font-size-3xl: 40px;

// Font Weights
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Line Heights
$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.75;
```

#### Spacing System:
```scss
// Based on 8px grid system
$spacing-1: 4px;
$spacing-2: 8px;
$spacing-3: 12px;
$spacing-4: 16px;
$spacing-5: 20px;
$spacing-6: 24px;
$spacing-8: 32px;
$spacing-10: 40px;
$spacing-12: 48px;
$spacing-16: 64px;
$spacing-20: 80px;
```

#### Border Radius:
```scss
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-radius-xl: 16px;
$border-radius-full: 9999px;
```

#### Shadows:
```scss
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

---

## 📐 Login Page Component Breakdown

### 1. **Left Panel - Brand Section**
- **Components:**
  - Lendsqr Logo (SVG)
  - Company tagline text
  - Hero illustration (PNG/SVG)
  
- **Styling Notes:**
  - Background: White or light gradient
  - Centered vertically and horizontally
  - Illustration should be responsive

### 2. **Right Panel - Login Form**
- **Components:**
  - Logo (smaller version, top-left)
  - Heading: "Welcome!"
  - Subheading: "Enter details to login."
  - Email input field
  - Password input field with show/hide toggle
  - "Forgot Password?" link
  - "Log In" button (primary CTA)
  
- **Form Field Specifications:**
  - Input height: ~48px
  - Border: 1px solid $grey-300
  - Border radius: $border-radius-md
  - Padding: $spacing-4
  - Focus state: Border color changes to $primary-color
  - Error state: Border color changes to $error

- **Button Specifications:**
  - Full width of form container
  - Height: ~48px
  - Background: $primary-color
  - Text: White, uppercase
  - Border radius: $border-radius-md
  - Hover state: Slightly darker background
  - Active state: Further darkened + slight scale

---

## 📱 Responsive Design Breakpoints

```scss
// Breakpoints
$breakpoint-mobile: 320px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-wide: 1440px;

// Media Queries
@mixin mobile {
  @media (max-width: #{$breakpoint-tablet - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$breakpoint-desktop}) {
    @content;
  }
}
```

### Responsive Behavior - Login Page:
- **Desktop (>1024px):** Split-screen layout (50/50)
- **Tablet (768-1023px):** Split-screen maintained, slightly adjusted proportions
- **Mobile (<768px):** 
  - Stack vertically
  - Hide left brand panel or show minimal version
  - Full-width login form
  - Adjust spacing and font sizes

---

## 🎯 Design Fidelity Checklist - Login Page

### Visual Elements:
- [ ] Logo placement and sizing
- [ ] Exact color matching
- [ ] Font family and weights
- [ ] Text sizes and line heights
- [ ] Spacing between elements
- [ ] Input field styling
- [ ] Button styling
- [ ] Illustration positioning
- [ ] Background colors

### Interactive Elements:
- [ ] Hover states for button
- [ ] Focus states for inputs
- [ ] Show/hide password toggle
- [ ] Error states for validation
- [ ] Loading states for form submission

### Responsive Design:
- [ ] Mobile layout (320px-767px)
- [ ] Tablet layout (768px-1023px)
- [ ] Desktop layout (1024px+)
- [ ] Wide screen layout (1440px+)

---

## 🔄 Next Steps for UI/UX Designer:

1. ✅ Analyze Login page design
2. ⏳ Extract exact color values from design files
3. ⏳ Measure spacing and dimensions
4. ⏳ Create design tokens file
5. ⏳ Analyze Dashboard page design
6. ⏳ Document component specifications for Users List page
7. ⏳ Create responsive design guidelines

---

## 📋 Handoff Notes for Frontend Engineer:

### Ready for Implementation:
- Basic layout structure defined
- Design token system outlined
- Component hierarchy documented

### Pending Clarification:
- Exact color values (need to extract from PNG or Figma)
- Exact font sizes and spacing measurements
- Icon assets and SVG files
- Illustration assets

### Recommendation:
Frontend Engineer should start with:
1. Setting up SCSS architecture with design tokens
2. Creating basic layout structure
3. Implementing form components
4. Once exact values are extracted, refine to pixel-perfect accuracy

---

**Status:** Design analysis in progress  
**Next Handoff:** After color extraction and measurement phase  
**Last Updated:** January 29, 2026
