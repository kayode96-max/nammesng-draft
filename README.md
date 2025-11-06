# NAMMES National Web Portal

> A modern, responsive web application for the NAMMES (National Association of Medical and Dental Students) national body, featuring certificate-based authentication, member portal, and admin console.

[![CI](https://github.com/kayode96-max/nammesng-draft/actions/workflows/ci.yml/badge.svg)](https://github.com/kayode96-max/nammesng-draft/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 Project Overview

NAMMES Portal is a comprehensive web platform that provides:
- **Public Landing Site**: Information about NAMMES, events, and contact
- **Certificate-Based Onboarding**: Automated member registration with PDF certificate generation
- **Secure Member Portal**: Gated access to resources, news, community, and IT placements
- **Admin Console**: Full management of members, certificates, content, and submissions

## ✨ Key Features

### For Members
- 📜 **Digital Certificates**: Unique Certificate ID with QR verification
- 🔐 **Secure Authentication**: Certificate ID as username, forced password change on first login
- 📰 **News & Blog**: Stay updated with NAMMES announcements
- 📚 **Resource Library**: Access educational materials and documents
- 👥 **Member Directory**: Connect with fellow members
- 🖼️ **Gallery**: View event photos and videos
- 💼 **IT Placements**: Browse and submit internship opportunities
- 👤 **Profile Management**: Update info and re-download certificates

### For Administrators
- 👨‍💼 **Member Management**: View, edit, and manage member accounts
- 🎫 **Certificate Management**: Generate, regenerate, and verify certificates
- 💳 **Payment Tracking**: Monitor payment records and webhooks
- ✍️ **Content Management**: Create and manage blog posts, resources, gallery
- 🏢 **Internship Moderation**: Review and approve member-submitted placements
- 📧 **Message Moderation**: Respond to contact form submissions

### Security & Verification
- ✅ **Public Certificate Verification**: API endpoint to verify certificate authenticity
- 🔗 **Signed Download URLs**: Time-limited, secure certificate downloads
- 🔒 **Role-Based Access Control**: Separate member and admin permissions
- 🛡️ **Password Security**: Bcrypt hashing with strong password requirements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL (or SQLite for local development)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kayode96-max/nammesng-draft.git
   cd nammesng-draft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Seed the database (optional)**
   ```bash
   npm run db:seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Dark Mode
- Click the sun/moon toggle in the navbar to switch between light and dark themes.
- Your preference is saved and the site respects your system setting by default.

### Default Admin Credentials (Development)
After running the seed script:
- **Email**: `admin@nammes.org`
- **Password**: `ChangeMe123!`

⚠️ **Change default passwords immediately in production!**

### Quick Test Flow (Registration → Login)
1. Visit `/certificate/register`
2. Fill the form and submit (simulates payment + certificate generation)
3. Copy the Certificate ID and temporary password shown
4. Visit `/auth/login` and login with those credentials
5. You'll be redirected to `/portal/home` (member dashboard)
6. Admin users can access `/admin` for the admin console

### New UI Sections
- A modern Testimonials section has been added to the home page.

## 📚 Documentation

- **[Project Brief](PROJECT_BRIEF.md)** - Full developer requirements and specifications
- **[Tasks & Issues](TASKS.md)** - Detailed task breakdown for implementation
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute to the project
- **[API Documentation](docs/API.md)** *(coming soon)*

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14+ (React) with App Router
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Custom component library

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes (or NestJS)
- **Database**: PostgreSQL (SQLite for dev)
- **ORM**: Prisma
- **Authentication**: NextAuth.js or custom JWT

### Infrastructure
- **PDF Generation**: Puppeteer
- **File Storage**: S3-compatible storage (AWS S3, DigitalOcean Spaces, or local)
- **Email**: Nodemailer with Ethereal (prototype) or SendGrid/Mailgun (production)
- **Payment**: Mock provider (prototype) → Paystack/Flutterwave (production)
- **Deployment**: Vercel, Railway, or Render

## 📁 Project Structure

```
/
├── app/                    # Next.js pages (App Router)
│   ├── (public)/          # Public pages
│   ├── (auth)/            # Authentication pages
│   ├── portal/            # Member dashboard
│   └── admin/             # Admin console
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layouts (navbar, footer, sidebar)
│   └── features/         # Feature-specific components
├── lib/                  # Utilities and helpers
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── tests/                # Test files
└── docs/                 # Documentation
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run E2E tests
npm run test:e2e

# Check coverage
npm run test:coverage

# Lint code
npm run lint
```

## 🚢 Deployment

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t nammes-portal .
docker run -p 3000:3000 nammes-portal
```

### Environment Variables (Production)
Ensure all variables in `.env.example` are set in your production environment:
- Database connection string
- JWT secrets
- Email provider credentials
- Storage provider credentials
- Payment provider keys (when using real payments)

## 📈 Roadmap

### MVP (Prototype)
- [x] Project setup and documentation
- [x] Public pages and contact form
- [x] Mock payment and webhook flow
- [x] PDF certificate generation (placeholder HTML)
- [x] Authentication with NextAuth.js
- [x] Member dashboard (Home, News, Resources, People, Gallery, Placements, Profile)
- [x] Admin console (Members, Certificates, Payments, Posts)
- [x] Certificate verification API
- [ ] First-time password change enforcement
- [ ] Enhanced PDF generation with Puppeteer
- [ ] Email sending (real SMTP or simulated)
- [ ] Deployment

### Post-MVP
- [ ] Real payment provider integration (Paystack/Flutterwave)
- [ ] Real email provider integration
- [ ] Two-factor authentication (2FA)
- [ ] Public certificate verification widget
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: NAMMES National Body
- **Developer**: [Your Name / Team]
- **Design**: [Designer Name]

## 📞 Support

- **Email**: support@nammes.org
- **Website**: [https://nammes.org](https://nammes.org)
- **Issues**: [GitHub Issues](https://github.com/kayode96-max/nammesng-draft/issues)

## 🙏 Acknowledgments

- NAMMES National Executive Committee
- All contributors and community members
- Open source projects that made this possible

---

**Built with ❤️ for NAMMES by the development community**