# NAMMES Portal

## Short Description

**NAMMES Portal** is a modern membership and community platform for the Nigerian Association of Materials and Metallurgical Engineering Students. It features a public landing page showcasing membership benefits, a secure member-only dashboard with news/resources/networking sections, and membership registration capabilities. Built with Next.js 15, React 18, and Shadcn UI components with Firebase integration.

---

## Full Project Description

### Project Overview
NAMMES Portal is a comprehensive web application designed for the Nigerian Association of Materials and Metallurgical Engineering Students (NAMMES). It serves as both a public-facing marketing platform and a secure member portal, connecting students and professionals in the materials and metallurgical engineering field across Nigeria.

### Technology Stack
- **Frontend Framework**: Next.js 15.3.3 with TypeScript
- **UI Library**: React 18.3.1 with Shadcn UI components
- **Styling**: Tailwind CSS with custom PostCSS configuration
- **Form Management**: React Hook Form with Zod validation
- **State & Data**: Firebase 11.9.1
- **AI Integration**: Google Genkit for generative features
- **Icons**: Lucide React
- **Component Library**: Radix UI primitives for accessible components
- **Analytics**: Vercel Analytics

### Public Pages

#### 1. Landing Page (`/`)
- Hero section with dynamic background image and prominent CTA ("Become a Member")
- Features section highlighting three key benefits:
  - **Professional Networking**: Connect with peers, mentors, and industry leaders
  - **Exclusive Resources**: Access to academic papers and industry reports
  - **Career Opportunities**: Job postings and IT placement opportunities
- About NAMMES section explaining the organization's mission ("Advancing Materials and Metallurgical Engineering in Nigeria")
- Member portal showcase with "Login to Access" button
- Responsive design with animations
- Dynamic placeholder image system for hero, feature, and about sections

#### 2. Membership Registration Page (`/membership`)
- Form-based membership enrollment
- Card-based UI with clear title and description
- Uses `MembershipForm` component with form validation
- Directs users to join the NAMMES community

#### 3. Login Page (`/login`)
- Certificate ID and password authentication
- Form validates credentials for member portal access
- "Forgot password?" recovery link
- Simulates successful login by redirecting to `/dashboard`

#### 4. Forgot Password Page (`/forgot-password`)
- Password recovery functionality for members

### Protected Member Dashboard (`/dashboard/*`)

#### Dashboard Layout Structure
- Responsive sidebar navigation with collapsible menu
- User navigation component in header
- 7 main menu items:
  1. Home (dashboard overview)
  2. Profile (member information)
  3. News (latest articles and updates)
  4. Resources (research materials and documents)
  5. People (member directory/networking)
  6. Gallery (image/media showcase)
  7. IT Placements (job opportunities)

#### Dashboard Home (`/dashboard`)
- Welcome greeting: "Welcome, Member!"
- Three stat cards showing:
  - **Membership Status**: Active status with expiration date
  - **New Resources**: Shows +12 resources added in last 30 days
  - **Recent News**: Displays +5 articles published this week
- Recent Activity table showing:
  - Latest news articles and resource uploads
  - Type badge (News/Resource)
  - Publication dates
- "View All" button linking to full news feed

#### Dashboard Sections
- **News** (`/dashboard/news`): Portal for latest updates, conference announcements, research highlights
- **Resources** (`/dashboard/resources`): Library of academic papers, industry reports, career development materials
- **People** (`/dashboard/people`): Member directory for networking and connection
- **Gallery** (`/dashboard/gallery`): Visual showcase of events, members, and achievements
- **Profile** (`/dashboard/profile`): Member account information and settings
- **IT Placements** (`/dashboard/placements`): Exclusive job opportunities and career postings

### Key UI Components

#### Reusable Component Library
- Form components (Form, Input, Label, Textarea)
- Card components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Dialog/Modal components (Dialog, Sheet, AlertDialog)
- Data display (Table, Accordion, Badge)
- Selection components (Select, Checkbox, RadioGroup, Dropdown, Tabs)
- Feedback (Toast, Skeleton, Progress)
- Navigation (Sidebar, Menubar, Breadcrumb)
- Advanced (Carousel, Collapsible, Scroll Area)

#### Custom Components
- `SiteHeader`: Sticky navigation with logo and responsive menu
- `SiteFooter`: Footer with copyright and branding
- `Logo`: NAMMES branding component
- `LoginForm`: Authentication form with validation
- `MembershipForm`: Registration form for new members
- `UserNav`: User profile navigation in dashboard
- `ThemeProvider`: Dark/light theme support

### Design Features
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Theme Support**: Configurable dark/light modes via theme provider
- **Animations**: Fade-in effects on hero sections, hover scale effects on cards
- **Typography**: Custom fonts (Space Grotesk for headlines, PT Sans for body text)
- **Color Scheme**: Primary/secondary color system with muted foreground states
- **Images**: AI-hinted placeholder images with dynamic loading

### Data & Forms
- Form validation using Zod schemas
- Login validation: Certificate ID and Password fields
- Membership registration form with field validation
- Placeholder data system for testing/development
- Firebase backend for authentication and data storage

### Development Features
- **Genkit AI**: Configured for generative features (in development)
- **Build Commands**: 
  - Dev: `next dev --turbopack -p 9002`
  - Build: Production-optimized Next.js build
  - Typecheck: TypeScript verification
- **Linting**: Next.js ESLint configuration
- **Analytics**: Vercel Analytics integration

### Project Structure
```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── login/             # Login page
│   ├── membership/        # Membership registration
│   ├── forgot-password/   # Password recovery
│   ├── dashboard/         # Protected member area
│   │   ├── layout.tsx     # Dashboard layout with sidebar
│   │   ├── page.tsx       # Dashboard home
│   │   ├── profile/       # User profile
│   │   ├── news/          # News section
│   │   ├── resources/     # Resource library
│   │   ├── people/        # Member directory
│   │   ├── gallery/       # Gallery
│   │   └── placements/    # Job placements
│   └── admin/             # Admin pages
├── components/            # Reusable React components
│   ├── ui/               # Shadcn UI components
│   └── Custom components
├── lib/                  # Utilities and helpers
│   ├── placeholder-images.ts
│   └── utils.ts
├── styles/              # Global CSS
└── ai/                  # Genkit AI integration
```

### Purpose & Goals
The NAMMES Portal aims to:
1. **Facilitate Community**: Connect students and professionals in materials/metallurgical engineering
2. **Share Knowledge**: Provide access to resources, research, and career development materials
3. **Create Opportunities**: Highlight job placements and networking events
4. **Build Unity**: Establish a unified national body for students in the field
5. **Bridge Academia & Industry**: Connect students with professional opportunities and insights

This is a full-featured web application with professional branding, secure authentication, and comprehensive member features designed to serve Nigeria's engineering student community.
