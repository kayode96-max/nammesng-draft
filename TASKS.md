# NAMMES Project Tasks

This document breaks down the project into GitHub-issue-ready tasks organized by epic/milestone.

## Epic 1: Project Setup & Foundation

### Task 1.1: Repository and Development Environment Setup
**Labels**: `setup`, `infrastructure`
**Priority**: P0

#### Description
Initialize the project repository with the complete development stack and tooling.

#### Acceptance Criteria
- [ ] Next.js project initialized with TypeScript
- [ ] TailwindCSS configured with NAMMES theme colors (`#003366` base)
- [ ] PostgreSQL database setup (or SQLite for local dev)
- [ ] Prisma ORM installed and configured
- [ ] Environment variables template (`.env.example`) created
- [ ] ESLint and Prettier configured
- [ ] Git hooks setup (Husky) for pre-commit linting
- [ ] README with setup instructions
- [ ] CI/CD pipeline basics (GitHub Actions)

#### Technical Notes
- Use Next.js 14+ with App Router
- Configure Tailwind with custom colors: `#003366` (primary blue), gold/silver accents
- Set up Prisma with initial schema structure

---

### Task 1.2: Design System & Component Library
**Labels**: `design`, `frontend`, `ui`
**Priority**: P0

#### Description
Create the base design system and reusable component library.

#### Acceptance Criteria
- [ ] Typography system implemented (Inter/Poppins/Roboto)
- [ ] Color palette defined and applied
- [ ] Button component (primary, secondary, ghost variants)
- [ ] Input/Form components (text, email, password, textarea, select)
- [ ] Card component with shadow variants
- [ ] Modal/Dialog component
- [ ] Toast/Alert notification system
- [ ] Loading spinner and skeleton loaders
- [ ] Responsive navbar component
- [ ] Footer component
- [ ] Accessibility compliance (ARIA labels, keyboard navigation)

#### Technical Notes
- Use Tailwind @apply for consistent styling
- Ensure WCAG AA color contrast compliance
- Component documentation in Storybook (optional but recommended)

---

## Epic 2: Public Pages

### Task 2.1: Landing Page
**Labels**: `frontend`, `public`, `ui`
**Priority**: P1

#### Description
Build the main landing page with hero, quick links, events carousel, and footer.

#### Acceptance Criteria
- [ ] Hero section with headline and two CTAs ("Join NAMMES", "Login to Portal")
- [ ] About preview section with "Read More" link
- [ ] Quick Links sliding cards (News, Resources, People, Gallery) - redirect to login when unauthenticated
- [ ] Events carousel (mock data, redirects to login)
- [ ] Footer with social icons, contact info, copyright
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Smooth scroll animations (optional)

#### Technical Notes
- Use Swiper or Embla for carousel
- Lazy load images for performance

---

### Task 2.2: About Page
**Labels**: `frontend`, `public`, `content`
**Priority**: P1

#### Description
Create the About page showcasing NAMMES history, mission, and executives.

#### Acceptance Criteria
- [ ] NAMMES history and mission section
- [ ] Executives grid (photo, name, title, institution)
- [ ] Responsive layout
- [ ] Placeholder images for executives

#### Technical Notes
- Store executive data in Prisma or static JSON for prototype

---

### Task 2.3: Contact Page
**Labels**: `frontend`, `backend`, `public`
**Priority**: P1

#### Description
Build contact page with form submission and Google Maps integration.

#### Acceptance Criteria
- [ ] Contact form (Name, Email, Subject, Message)
- [ ] Form validation (client + server)
- [ ] `POST /contact` API endpoint stores messages in database
- [ ] Success/error toast notifications
- [ ] Google Maps embed (mock location acceptable)
- [ ] Contact details displayed (email, phone, address)
- [ ] Responsive design

#### Technical Notes
- Create `ContactMessage` model in Prisma
- Use React Hook Form + Zod for validation

---

## Epic 3: Certificate & Payment Flow

### Task 3.1: Certificate Registration Form
**Labels**: `frontend`, `backend`, `certificates`
**Priority**: P0

#### Description
Create the registration form for new members applying for certificates.

#### Acceptance Criteria
- [ ] Multi-step form or single-page form (Full Name, Email, Phone, Institution, Level, etc.)
- [ ] Client-side validation
- [ ] Form state management
- [ ] "Continue to Payment" button
- [ ] Responsive design

#### Technical Notes
- Use React Hook Form
- Store form data in session/localStorage before payment

---

### Task 3.2: Mock Payment Checkout & Webhook
**Labels**: `backend`, `payment`, `certificates`
**Priority**: P0

#### Description
Implement simulated payment checkout and webhook processing.

#### Acceptance Criteria
- [ ] Mock checkout page (simulate Paystack/Flutterwave UI)
- [ ] `POST /certificate/checkout` endpoint
- [ ] `POST /webhooks/payments/mock` endpoint
- [ ] Payment record created with status "pending"
- [ ] Webhook validates payment and triggers certificate generation
- [ ] Payment status updated to "completed"
- [ ] Admin view to replay webhook events

#### Technical Notes
- Use UUIDs for mock `provider_payment_id`
- Webhook should validate signature (mock signature for prototype)
- Store payment metadata (amount, currency, timestamp)

---

### Task 3.3: PDF Certificate Generation
**Labels**: `backend`, `certificates`, `pdf`
**Priority**: P0

#### Description
Generate PDF certificates server-side with QR codes and unique Certificate IDs.

#### Acceptance Criteria
- [ ] PDF template (HTML-based for Puppeteer)
- [ ] Certificate includes: Name, Certificate ID (`NAMMES/YYYY/NNNN`), Issue Date, QR Code, Mock Signature, Mock Logo
- [ ] QR code links to verification endpoint
- [ ] Certificate ID sequence management (ensure uniqueness)
- [ ] PDF stored in local storage or S3-compatible storage
- [ ] Signed download URL generated (expiry: 24-48 hours)

#### Technical Notes
- Use Puppeteer or pdfkit
- QR code generation with `qrcode` npm package
- Store Certificate records in Prisma with `certificate_id`, `pdf_url`, `signed_url_expiry`

---

### Task 3.4: Post-Payment User Account Creation
**Labels**: `backend`, `auth`, `certificates`
**Priority**: P0

#### Description
Automatically create user accounts after successful payment validation.

#### Acceptance Criteria
- [ ] User record created (or updated if email exists)
- [ ] Certificate record linked to user
- [ ] Random temporary password generated
- [ ] `is_temp_password` flag set to `true`
- [ ] User role set to `member`

#### Technical Notes
- Hash password with bcrypt
- Use `nanoid` or `crypto.randomBytes` for temp password

---

### Task 3.5: Certificate Email Workflow (Simulated)
**Labels**: `backend`, `email`, `certificates`
**Priority**: P1

#### Description
Simulate email sending with certificate download link and login credentials.

#### Acceptance Criteria
- [ ] Email template created (HTML)
- [ ] Email contains: Welcome message, Certificate ID (username), Temporary Password, Login Link, Instructions
- [ ] Certificate PDF attached OR signed download link included
- [ ] Email preview endpoint for dev testing (`/api/dev/email-preview`)
- [ ] Email stored in mock inbox (Ethereal or Mailhog for local dev)

#### Technical Notes
- Use `nodemailer` with Ethereal for prototype
- Email subject: "Your NAMMES Membership Certificate and Login Details"

---

## Epic 4: Authentication

### Task 4.1: Login System
**Labels**: `backend`, `auth`, `frontend`
**Priority**: P0

#### Description
Implement login with Certificate ID as username.

#### Acceptance Criteria
- [ ] Login page with Username (Certificate ID) and Password fields
- [ ] `POST /auth/login` endpoint returns JWT or session token
- [ ] Password validation against hashed password
- [ ] Error handling (invalid credentials)
- [ ] Redirect to dashboard on success
- [ ] "Forgot Password?" link

#### Technical Notes
- Use NextAuth.js or custom JWT implementation
- Session management with HTTP-only cookies

---

### Task 4.2: First-Time Password Change Flow
**Labels**: `backend`, `auth`, `frontend`
**Priority**: P0

#### Description
Force password change on first login with temporary password.

#### Acceptance Criteria
- [ ] Detect `is_temp_password === true` on login
- [ ] Redirect to password change modal/page
- [ ] Display message: "You are required to change your password for security reasons."
- [ ] `POST /auth/first-time-change` endpoint
- [ ] Validate old password, set new password, update `is_temp_password` to `false`
- [ ] Password strength requirements enforced

#### Technical Notes
- Use Zod or Joi for password validation (min 8 chars, uppercase, number, special char)

---

### Task 4.3: Password Reset Flow
**Labels**: `backend`, `auth`, `frontend`
**Priority**: P1

#### Description
Implement password reset via email OTP or reset link.

#### Acceptance Criteria
- [ ] "Forgot Password?" page with email input
- [ ] `POST /auth/password-reset-request` sends reset link/OTP (simulated email)
- [ ] Reset link contains time-limited token
- [ ] `POST /auth/password-reset` validates token and updates password
- [ ] Token expiry handling (15-30 minutes)

#### Technical Notes
- Store reset tokens in database or use signed JWT
- Invalidate token after use

---

## Epic 5: Member Dashboard

### Task 5.1: Dashboard Layout & Navigation
**Labels**: `frontend`, `portal`, `ui`
**Priority**: P1

#### Description
Create the member dashboard layout with sidebar navigation.

#### Acceptance Criteria
- [ ] Sidebar with navigation links (Home, Blog/News, Resources, People, Gallery, IT Placement, Profile)
- [ ] Responsive sidebar (collapsible on mobile)
- [ ] User avatar and name display
- [ ] Logout button
- [ ] Protected routes (redirect to login if unauthenticated)

#### Technical Notes
- Use Next.js middleware for route protection
- Store auth state in context or Zustand

---

### Task 5.2: Dashboard Home Page
**Labels**: `frontend`, `portal`
**Priority**: P1

#### Description
Build the member dashboard home/overview page.

#### Acceptance Criteria
- [ ] Greeting with user name
- [ ] Membership summary card (Certificate ID, Issue Date)
- [ ] Quick link to re-download certificate
- [ ] Recent news/blog posts preview (3-5 items)
- [ ] Responsive layout

---

### Task 5.3: Blog/News Section
**Labels**: `frontend`, `backend`, `portal`
**Priority**: P2

#### Description
Implement blog/news listing and detail pages.

#### Acceptance Criteria
- [ ] Blog post list page (paginated or infinite scroll)
- [ ] Blog post detail page (title, content, author, published date, image)
- [ ] `GET /api/blog-posts` endpoint (public or member-only)
- [ ] `GET /api/blog-posts/:slug` endpoint
- [ ] Responsive design

#### Technical Notes
- Store posts in `BlogPost` model
- Use markdown or rich text for content (MDX or TipTap)

---

### Task 5.4: Resources Repository
**Labels**: `frontend`, `backend`, `portal`
**Priority**: P2

#### Description
Build searchable/filterable resources page with downloadable files.

#### Acceptance Criteria
- [ ] Resource list with search and category filter
- [ ] `GET /api/resources` endpoint (filterable)
- [ ] Download button with signed URL for each resource
- [ ] Responsive grid layout

#### Technical Notes
- Store files in S3 or local storage
- Generate signed URLs on demand

---

### Task 5.5: People Directory
**Labels**: `frontend`, `backend`, `portal`
**Priority**: P2

#### Description
Create member directory with profile cards.

#### Acceptance Criteria
- [ ] Grid of member profile cards (photo, name, role, bio, contact)
- [ ] `GET /api/people` endpoint
- [ ] Privacy controls (members can hide contact info)
- [ ] Search/filter functionality
- [ ] Responsive design

#### Technical Notes
- Use `Person` or `User` model with visibility flags

---

### Task 5.6: Gallery
**Labels**: `frontend`, `backend`, `portal`
**Priority**: P2

#### Description
Build photo/video gallery with lightbox viewer.

#### Acceptance Criteria
- [ ] Grid layout for media items
- [ ] `GET /api/gallery` endpoint
- [ ] Lightbox modal for full-size view
- [ ] Caption and date display
- [ ] Responsive masonry or grid layout

#### Technical Notes
- Use `react-photo-view` or similar for lightbox
- Store media in S3 or local storage

---

### Task 5.7: IT Placement Section
**Labels**: `frontend`, `backend`, `portal`
**Priority**: P2

#### Description
Create internship/placement listing with member submission capability.

#### Acceptance Criteria
- [ ] List of placements (company, location, field, year)
- [ ] `GET /api/internships` endpoint (approved only for members)
- [ ] Member submission form (company, location, field, year)
- [ ] `POST /api/internships` endpoint (creates pending submission)
- [ ] Success message after submission
- [ ] Admin approval required

#### Technical Notes
- Store in `Internship` model with `approved` flag
- Only show `approved === true` to members

---

### Task 5.8: Profile Page
**Labels**: `frontend`, `backend`, `portal`
**Priority**: P1

#### Description
Allow members to edit their profile and re-download certificate.

#### Acceptance Criteria
- [ ] Display current user info (name, email, phone, institution)
- [ ] Edit form for personal info
- [ ] `PUT /api/profile` endpoint
- [ ] Change password section
- [ ] Re-download certificate button (generates new signed URL)
- [ ] Success/error notifications

---

## Epic 6: Admin Console

### Task 6.1: Admin Layout & Access Control
**Labels**: `frontend`, `backend`, `admin`
**Priority**: P1

#### Description
Create admin console layout and protect admin routes.

#### Acceptance Criteria
- [ ] Admin sidebar navigation (Members, Certificates, Payments, Blog, Resources, Gallery, Internships, Settings)
- [ ] Role-based access control (only `role === 'admin'` can access)
- [ ] Redirect non-admins to member dashboard
- [ ] Responsive layout

#### Technical Notes
- Use middleware to check `user.role === 'admin'`

---

### Task 6.2: Admin - Manage Members
**Labels**: `backend`, `admin`
**Priority**: P1

#### Description
CRUD interface for managing members.

#### Acceptance Criteria
- [ ] List all members (searchable, sortable)
- [ ] `GET /api/admin/members` endpoint
- [ ] View member details
- [ ] Edit member info (`PUT /api/admin/members/:id`)
- [ ] Delete/deactivate member (`DELETE /api/admin/members/:id`)
- [ ] Reissue credentials (generate new temp password, resend email)

---

### Task 6.3: Admin - Manage Certificates
**Labels**: `backend`, `admin`
**Priority**: P1

#### Description
CRUD interface for certificates.

#### Acceptance Criteria
- [ ] List all certificates
- [ ] `GET /api/admin/certificates` endpoint
- [ ] View certificate details and PDF preview
- [ ] Regenerate PDF (`POST /api/admin/certificates/:id/regenerate`)
- [ ] Resend certificate email

---

### Task 6.4: Admin - Manage Payments
**Labels**: `backend`, `admin`
**Priority**: P1

#### Description
View and manage payment records.

#### Acceptance Criteria
- [ ] List all payments (filterable by status, date)
- [ ] `GET /api/admin/payments` endpoint
- [ ] View payment details
- [ ] Replay webhook events (`POST /api/admin/payments/:id/replay-webhook`)
- [ ] Export payment data (CSV)

---

### Task 6.5: Admin - Manage Blog Posts
**Labels**: `backend`, `admin`
**Priority**: P2

#### Description
CRUD interface for blog posts.

#### Acceptance Criteria
- [ ] List all posts
- [ ] Create new post (`POST /api/admin/blog-posts`)
- [ ] Edit post (`PUT /api/admin/blog-posts/:id`)
- [ ] Delete post (`DELETE /api/admin/blog-posts/:id`)
- [ ] Publish/unpublish toggle
- [ ] Rich text editor (TipTap or similar)

---

### Task 6.6: Admin - Manage Resources
**Labels**: `backend`, `admin`
**Priority**: P2

#### Description
CRUD interface for resources.

#### Acceptance Criteria
- [ ] List all resources
- [ ] Upload new resource (file + metadata) (`POST /api/admin/resources`)
- [ ] Edit resource metadata (`PUT /api/admin/resources/:id`)
- [ ] Delete resource (`DELETE /api/admin/resources/:id`)
- [ ] File upload to storage

---

### Task 6.7: Admin - Manage Gallery
**Labels**: `backend`, `admin`
**Priority**: P2

#### Description
CRUD interface for gallery media.

#### Acceptance Criteria
- [ ] List all gallery items
- [ ] Upload new media (`POST /api/admin/gallery`)
- [ ] Edit caption/metadata (`PUT /api/admin/gallery/:id`)
- [ ] Delete media (`DELETE /api/admin/gallery/:id`)

---

### Task 6.8: Admin - Manage Internships
**Labels**: `backend`, `admin`
**Priority**: P2

#### Description
Approve/reject member-submitted internship listings.

#### Acceptance Criteria
- [ ] List all submissions (pending and approved)
- [ ] `GET /api/admin/internships` endpoint
- [ ] Approve submission (`PUT /api/admin/internships/:id/approve`)
- [ ] Reject/delete submission (`DELETE /api/admin/internships/:id`)
- [ ] Edit internship details

---

### Task 6.9: Admin - Moderate Contact Messages
**Labels**: `backend`, `admin`
**Priority**: P2

#### Description
View and manage contact form submissions.

#### Acceptance Criteria
- [ ] List all contact messages
- [ ] `GET /api/admin/contact-messages` endpoint
- [ ] Mark as read/unread
- [ ] Delete message

---

## Epic 7: Verification & QA

### Task 7.1: Public Certificate Verification Endpoint
**Labels**: `backend`, `certificates`
**Priority**: P1

#### Description
Create public API to verify certificate authenticity.

#### Acceptance Criteria
- [ ] `GET /api/v1/certificates/verify/:certificateId` endpoint
- [ ] Returns JSON: `{ verified, certificateId, fullName, issueDate, publicUrl }`
- [ ] Handle invalid/non-existent certificate IDs gracefully
- [ ] Rate limiting to prevent abuse

#### Technical Notes
- No authentication required (public endpoint)

---

### Task 7.2: QR Code Generation & Verification Flow
**Labels**: `backend`, `certificates`
**Priority**: P1

#### Description
Ensure QR codes on certificates link to verification endpoint.

#### Acceptance Criteria
- [ ] QR code on PDF links to `/api/v1/certificates/verify/{certificateId}`
- [ ] Scanning QR code returns verification JSON
- [ ] Test with multiple QR code scanners

#### Technical Notes
- Use `qrcode` npm package
- QR data format: `https://yourapp.com/api/v1/certificates/verify/NAMMES/2025/0001`

---

### Task 7.3: End-to-End Testing
**Labels**: `testing`, `qa`
**Priority**: P1

#### Description
Test complete user flows from registration to dashboard access.

#### Acceptance Criteria
- [ ] Registration → Payment → Certificate → Email → Login flow tested
- [ ] First-time password change flow tested
- [ ] All member dashboard pages accessible after login
- [ ] Admin console accessible only to admins
- [ ] Unauthenticated users redirected correctly
- [ ] Certificate verification endpoint tested
- [ ] Responsive design tested on mobile/tablet/desktop

#### Technical Notes
- Use Playwright or Cypress for E2E tests

---

### Task 7.4: Documentation & Deployment
**Labels**: `documentation`, `deployment`
**Priority**: P1

#### Description
Finalize documentation and deploy prototype.

#### Acceptance Criteria
- [ ] README with setup instructions
- [ ] `.env.example` with all required variables
- [ ] Database migration instructions
- [ ] Seed script for test data
- [ ] Demo admin credentials documented
- [ ] API documentation (optional: Swagger/OpenAPI)
- [ ] Deployed to staging environment (Vercel/Railway/Render)
- [ ] Deployment guide in README

---

## Epic 8: Design (Optional but Recommended)

### Task 8.1: Figma Mockups - Landing & Public Pages
**Labels**: `design`, `figma`
**Priority**: P2

#### Description
Create high-fidelity mockups for landing, about, contact pages.

#### Acceptance Criteria
- [ ] Landing page mockup (desktop + mobile)
- [ ] About page mockup
- [ ] Contact page mockup
- [ ] Clickable prototype in Figma

---

### Task 8.2: Figma Mockups - Member Dashboard
**Labels**: `design`, `figma`
**Priority**: P2

#### Description
Create high-fidelity mockups for member dashboard.

#### Acceptance Criteria
- [ ] Dashboard home mockup
- [ ] Sidebar navigation mockup
- [ ] Blog/News, Resources, People, Gallery, IT Placement, Profile page mockups
- [ ] Clickable prototype in Figma

---

### Task 8.3: Figma Mockups - Admin Console
**Labels**: `design`, `figma`
**Priority**: P2

#### Description
Create high-fidelity mockups for admin console.

#### Acceptance Criteria
- [ ] Admin dashboard mockup
- [ ] Members, Certificates, Payments management mockups
- [ ] Clickable prototype in Figma

---

## Summary

**Total Tasks**: 42
**Epics**: 8

### Priority Breakdown
- **P0 (Critical)**: 10 tasks (foundation, auth, certificates)
- **P1 (High)**: 18 tasks (core features, admin, testing)
- **P2 (Medium)**: 14 tasks (nice-to-have features, design)

### Suggested Sprint Allocation
- **Sprint 1 (Week 1)**: Tasks 1.1, 1.2, 8.1, 8.2, 8.3 (Setup + Design)
- **Sprint 2 (Week 2)**: Tasks 2.1, 2.2, 2.3, 3.1, 3.2 (Public pages + Payment)
- **Sprint 3 (Week 3)**: Tasks 3.3, 3.4, 3.5, 4.1, 4.2, 7.2 (Certificates + Auth)
- **Sprint 4 (Week 4)**: Tasks 4.3, 5.1-5.8, 6.1-6.9, 7.1, 7.3, 7.4 (Dashboard + Admin + QA)
