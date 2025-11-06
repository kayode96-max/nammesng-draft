# NAMMES National Web Portal — Developer Prompt (Final)

## Project Title
**NAMMES — National Body Web Portal** (Landing site + Member Portal with certificate-based auth)

## Project Overview
Build a responsive, modern web application to serve as the NAMMES national body portal. The app has a public landing site and a secured member portal. For the prototype we will simulate payments (no real payment provider). Certificates are generated as PDFs, include a unique Certificate ID and QR code, and are downloadable via signed links. The Certificate ID becomes the username for portal login. An admin console is required in the MVP.

## Primary Goals
- **Public presence**: landing, about, contact and events.
- **Membership onboarding**: collect member details → simulated payment → generate PDF certificate → email credentials.
- **Authentication**: Certificate ID as username; temporary password emailed; force password change on first login.
- **Member portal**: gated content — Home, Blog/News, Resources, People, Gallery, IT Placement, Profile.
- **Admin console**: manage members, payments, certificates, posts, resources, internships, gallery.
- **Verification**: public certificate verification endpoint and QR code on PDFs.

## Design & UI
- **Theme colors**: Deep metallic blue `#003366` with gold/silver accents.
- **Typography**: Inter, Poppins or Roboto.
- **Visual style**: Minimal, sectioned layout; soft shadows; large card components; mobile-first responsive.
- **Navbar**: Home | About | Contact | Certificate | Login / Register
- **Accessibility**: semantic HTML, keyboard nav, color contrast compliance.

## Prototype Constraints / Clarifications
- **Payment**: simulate payment flow for prototype. Build an internal mock checkout + webhook simulator that mimics Paystack/Flutterwave webhook behavior.
- **Assets**: use mock logo, fonts, and signature for the prototype.
- **Certificate download**: certificates are downloadable publicly via signed, time-limited links (no login required to download when using the signed link).
- **Privacy / legal**: no extra GDPR/retention rules required.
- **Admin**: full admin management console is required in MVP.

## Core Pages & Behavior

### Public

#### 1. Landing Page
- Hero with headline and two CTAs: **Join NAMMES** (certificate/payment flow) and **Login to Portal**.
- About preview + Read More.
- Quick Links (sliding cards): News, Resources, People, Gallery — teasers that redirect unauthenticated users to Login/Register.
- Events carousel (click redirects to Login/Register).
- Footer: social icons, contact, copyright.

#### 2. About Page
- NAMMES history, mission, goals.
- Executives grid (photo, name, title, institution).

#### 3. Contact Page
- Contact form (Name, Email, Message) + contact details + Google Maps embed.

#### 4. Certificate & Payment Page (Registration flow)
- Form: Full name, Email, Phone, Institution, Level, optional fields.
- Simulated secure checkout flow and a mock webhook to validate payment success.
- On payment validation:
  - Create user account (if not existing).
  - Create Certificate record with unique Certificate ID (format below).
  - Generate PDF certificate (server-side) with name, Certificate ID, issue date, QR code linking to verification endpoint, mock signature and logo.
  - Generate a random temporary password.
  - Save PDF to storage, generate signed download URL.
  - Email user: certificate (PDF attachment or signed link), Certificate ID (username), temporary password, instructions and login link.
  - Allow immediate in-browser view/download of certificate (using signed link).

#### 5. Login / Register
- Registration via Certificate page (preferred) or standalone register with payment step.
- Login accepts:
  - Username: Certificate ID
  - Password
- On first login with temp password: force password change and show message "You are required to change your password for security reasons."
- Password reset via email OTP or reset link.

### Private (requires authentication)

#### 6. Member Dashboard (sidebar)
- **Home**: greeting, membership summary, quick certificate link, recent news.
- **Blog/News**: list and view posts (admin CRUD).
- **Resources**: searchable/filterable repository of PDFs and documents.
- **People**: directory with profile cards and contact/social links (privacy-controlled).
- **Gallery**: photo/video grid with lightbox.
- **IT Placement**: list of companies (company, location, field, year); logged-in members can submit new internship entries (pending admin review).
- **Profile**: edit personal info, change password, re-download certificate.

### Admin (MVP)
- Manage members, certificates, payments, blog posts, resources, gallery, internship listings.
- Reissue certificates and resend credentials.
- View payment logs and webhook events.
- Moderate contact messages and submissions.

## Certificate ID Format
- **Default pattern**: `NAMMES/{YYYY}/{NNNN}` (e.g., `NAMMES/2025/0001`)
- Store sequence number and `created_at` to ensure uniqueness; allow alternate campaign prefix if needed.

## Verification & PDF
- **Verification API**: `GET /api/v1/certificates/verify/{certificateId}` returns JSON:
  ```json
  {
    "verified": boolean,
    "certificateId": string,
    "fullName": string,
    "issueDate": string,
    "publicUrl": string (optional)
  }
  ```
- PDFs generated server-side (Puppeteer, wkhtmltopdf, or pdfkit).
- Store PDFs in S3-compatible storage; provide signed download links (expiry configurable).

## Data Model (Core Entities)

### User
- `id` (uuid)
- `name`
- `email`
- `phone`
- `institution`
- `certificate_id` (nullable)
- `password_hash`
- `role` (member/admin)
- `is_temp_password` (bool)
- `created_at`
- `updated_at`

### Certificate
- `id`
- `certificate_id`
- `user_id`
- `full_name`
- `issue_date`
- `pdf_url`
- `signed_url_expiry`
- `qr_code_data`
- `template_version`
- `created_at`

### Payment
- `id`
- `provider` (mock)
- `provider_payment_id`
- `amount`
- `currency`
- `status`
- `user_id`
- `certificate_id`
- `metadata`
- `created_at`

### BlogPost
- `id`
- `title`
- `slug`
- `content`
- `author_id`
- `published_at`
- `tags`
- `image_url`

### Resource
- `id`
- `title`
- `file_url`
- `category`
- `uploaded_by`
- `uploaded_at`

### Person (directory)
- `id`
- `name`
- `role`
- `bio`
- `photo_url`
- `contact`

### GalleryItem
- `id`
- `media_url`
- `caption`
- `date_taken`
- `uploaded_by`

### Internship
- `id`
- `company`
- `location`
- `field`
- `year`
- `submitted_by`
- `approved` (bool)
- `created_at`

### ContactMessage
- `id`
- `name`
- `email`
- `subject`
- `message`
- `read`
- `created_at`

## API Endpoints (Recommended)

### Public
- `GET /` (landing)
- `GET /about`
- `GET /contact`
- `POST /contact`
- `GET /certificate/register`
- `POST /certificate/checkout` (simulate checkout)
- `POST /webhooks/payments/mock` (simulate webhook)
- `GET /certificates/{certificateId}.pdf` (signed URL or auth-protected)
- `GET /api/v1/certificates/verify/{certificateId}`

### Auth
- `POST /auth/login` `{ username, password }`
- `POST /auth/password-reset-request` `{ email }`
- `POST /auth/password-reset` `{ token, new_password }`
- `POST /auth/first-time-change` `{ certificateId, old_temp_password, new_password }`

### Member
- `GET /portal/home`
- `GET /portal/news`
- `GET /portal/resources`
- `GET /portal/people`
- `GET /portal/gallery`
- `GET /portal/it-placement`
- `POST /portal/it-placement` (submission)

### Admin
- `/admin/*` (CRUD for users, certificates, payments, posts, resources, gallery, internships)

### Webhooks
- `POST /webhooks/payments` (secure in real integration; mock for prototype)

## Security & Privacy
- Use HTTPS in production.
- Hash passwords with bcrypt or argon2.
- Do not store raw card data (simulate checkout).
- Protect admin endpoints with RBAC.
- Signed URLs for certificate downloads with short expiry.
- Validate webhooks (simulate signature handling in prototype).

## Email Workflow (Post-Payment)
- **Subject**: "Your NAMMES Membership Certificate and Login Details"
- **Body**: Welcome message, Certificate ID (username), temporary password, login link, instructions to change password.
- **Attachment**: PDF certificate OR include signed download link in email body.

## Payment Simulation Requirements
- Mock checkout page that collects payment details (non-sensitive) and triggers a simulated successful transaction.
- Mock webhook endpoint that the app uses to mark payment as confirmed and triggers certificate issuance.
- Provide a "Test Payments" admin view to replay webhook events.

## Testing & Acceptance Criteria

### Functional
- Visitor views landing/about/contact on mobile/desktop.
- User fills registration form, completes simulated payment, and receives:
  - Certificate PDF generated and stored.
  - Certificate ID + temporary password emailed.
  - Signed download link for certificate.
- Certificate PDF contains unique Certificate ID and a QR code that verifies successfully via `GET /api/v1/certificates/verify/{certificateId}`.
- User logs in using Certificate ID + temp password and is forced to change password on first login.
- Member-only pages are gated; unauthenticated users are redirected to Login/Register with "Login or Register to access NAMMES member content."
- Admin console allows management of members, certificates, payments, posts, resources, gallery, internships and can reissue credentials.
- Internship submissions by members are stored and require admin approval.

### UI/UX
- Theme and typography applied; layout responsive.
- Success/error modals are present for major actions (payment, certificate generation, login).
- Certificate download link is user-friendly and secure (signed URL).

## Deliverables
- Figma or design mockups (landing + member dashboard) — clickable prototype.
- Working prototype (deployed or runnable locally) demonstrating:
  - Simulated payment → certificate generation (PDF) → email (simulated) → login workflow.
  - Admin console for required management tasks.
- Source repo with README, .env example, and deploy/run instructions.
- Test data and demo admin credentials.

## Recommended Tech Stack (Prototype)
- **Frontend**: Next.js (React) + TailwindCSS + TypeScript
- **Backend**: Node.js + Express or NestJS + TypeScript
- **Database**: PostgreSQL (SQLite acceptable for quick prototype)
- **ORM**: Prisma
- **Auth**: JSON Web Tokens + secure sessions or NextAuth
- **PDF Generation**: Puppeteer (HTML → PDF)
- **Storage**: S3-compatible storage (AWS S3 / DigitalOcean Spaces); local storage acceptable for prototype
- **Background jobs**: simple worker (Bull + Redis) or in-process queue for prototype
- **Email**: simulate with an in-app preview (Mailhog / ethereal.email for real test)
- **Payment**: mocked checkout + webhook simulator

## Project Timeline (Suggested)
- **Week 1**: Visual design (Figma) + component library and style guide
- **Week 2**: Public pages, contact form, certificate registration form, mock checkout
- **Week 3**: Mock webhook, certificate issuance, server-side PDF generation, signed links, mock email preview
- **Week 4**: Authentication, first-time password flow, member dashboard skeleton, admin console basics, QA and deployment
- **Buffer/Polish**: +1 week for bug fixes, documentation, and handoff

## Acceptance Checklist
- [ ] Figma mockups for landing and dashboard
- [ ] Landing, About, Contact implemented and responsive
- [ ] Certificate registration form implemented
- [ ] Simulated payment checkout and webhook implemented
- [ ] Certificate generation (PDF) and storage with signed download links
- [ ] Email workflow simulated: send certificate link + credentials
- [ ] Login with Certificate ID + temporary password
- [ ] First-time login forces password change
- [ ] Member dashboard with Home, Blog/News, Resources, People, Gallery, IT Placement, Profile
- [ ] Admin console for members, certificates, payments, posts, resources, gallery, internships
- [ ] Public certificate verification endpoint
- [ ] README with setup & run instructions and demo credentials

## Tasks for First Implementation Sprint
1. Setup repo and CI, install stack, create base Next.js app and API server.
2. Implement theme, header/footer, and global layout.
3. Build Landing, About, Contact pages and contact form with storage.
4. Implement Certificate registration form and mock checkout flow.
5. Implement mock webhook endpoint and handler to create user/certificate.
6. Implement PDF certificate template and generation (Puppeteer).
7. Save PDF to storage and produce signed URL; mock-send email (in-app preview).
8. Implement auth: login, first-time password change, password reset.
9. Implement Member Dashboard skeleton and protect routes.
10. Build Admin console with members/payments/certificates views.
11. Implement verification API and QR generation for certificates.
12. QA, docs, and deploy.

## Optional Next Features (Post-Prototype)
- Integrate real payment provider (Paystack/Flutterwave/Stripe).
- Real email provider integration (SendGrid/Mailgun).
- Two-factor authentication (2FA).
- Public certificate download page and embeddable verification widget.
- Role-based content visibility and advanced privacy controls.

---

## Developer-Ready Short Brief (One-Paragraph)

Build a responsive NAMMES national portal with a public landing site and a secured member portal. Prototype should simulate payment and webhook processing, generate a PDF certificate (`NAMMES/{YYYY}/{NNNN}`) with QR verification, create an account where the Certificate ID is the username, email temporary credentials and a signed certificate download link, enforce first-time password change, and provide a gated member dashboard (Home, News, Resources, People, Gallery, IT Placement, Profile) plus a full admin console to manage members, certificates, payments, content and internships. Use Next.js + Tailwind + Node + PostgreSQL + Prisma; use Puppeteer for PDF generation and S3-compatible storage for certificates. Deliver Figma mockups, working prototype, and source repo with README.
