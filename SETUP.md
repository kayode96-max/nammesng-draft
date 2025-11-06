# NAMMES Portal — Setup Guide

This guide will help you get the NAMMES portal running locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18 or higher ([download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **PostgreSQL** (or use SQLite for quick local dev)
- **Git**

## 🚀 Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/kayode96-max/nammesng-draft.git
cd nammesng-draft
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

> **Note**: We use `--legacy-peer-deps` to resolve peer dependency conflicts between packages.

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and configure the following:

#### Database (PostgreSQL)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nammes_db"
```

**Or use SQLite for quick local testing:**

```env
DATABASE_URL="file:./dev.db"
```

> If using SQLite, update `prisma/schema.prisma` datasource to:
> ```prisma
> datasource db {
>   provider = "sqlite"
>   url      = env("DATABASE_URL")
> }
> ```

#### Application URLs

```env
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

#### Authentication

```env
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-change-this"
```

Generate a secure secret with:

```bash
openssl rand -base64 32
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Database Migrations

This will create all necessary database tables:

```bash
npx prisma migrate dev --name init
```

### 6. Seed the Database (Optional but Recommended)

This creates an admin user and sample data:

```bash
npm run db:seed
```

**Default admin credentials:**
- Email: `admin@nammes.org`
- Password: `ChangeMe123!`

### 7. Start the Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

---

## 🧪 Testing the Application

### User Registration Flow

1. Visit **http://localhost:3000/certificate/register**
2. Fill out the registration form
3. Click "Complete Registration" (simulates payment)
4. You'll see a success screen with:
   - Certificate ID (your username)
   - Temporary password
5. **Save these credentials!**

### Login Flow

1. Visit **http://localhost:3000/auth/login**
2. Enter the Certificate ID (e.g., `NAMMES/2025/0001`) and password
3. You'll be redirected to the member portal

### Member Portal

After logging in, you can access:
- **Home** — Dashboard overview
- **News** — Blog posts
- **Resources** — Downloadable materials
- **People** — Member directory
- **Gallery** — Photos and media
- **IT Placements** — Internship listings
- **Profile** — Edit your profile

### Admin Console

1. Login with admin credentials (`admin@nammes.org` / `ChangeMe123!`)
2. Visit **http://localhost:3000/admin**
3. Manage members, certificates, payments, posts, etc.

---

## 🛠️ Useful Commands

### Database Management

```bash
# Open Prisma Studio (visual database editor)
npm run db:studio

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database (⚠️ deletes all data)
npx prisma migrate reset

# Push schema changes without creating migration
npm run db:push
```

### Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

### Testing

```bash
# Run tests
npm test

# Run E2E tests
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

---

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── (public)/          # Public pages (landing, about, contact)
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── portal/            # Member dashboard
│   ├── admin/             # Admin console
│   ├── certificate/       # Certificate registration
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components (future)
├── lib/                   # Utilities
│   ├── prisma.ts         # Prisma client
│   ├── storage.ts        # File storage helpers
│   ├── pdf.ts            # PDF generation
│   └── qr.ts             # QR code generation
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed script
├── styles/
│   └── globals.css       # Global styles
├── .env.example          # Environment variables template
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS config
└── package.json
```

---

## 🐛 Troubleshooting

### "Cannot connect to database"

- Ensure PostgreSQL is running
- Check your `DATABASE_URL` in `.env`
- For SQLite, ensure file path is correct and writable

### "Module not found" errors

```bash
npm install --legacy-peer-deps
npx prisma generate
```

### Port 3000 already in use

Change the port:

```bash
PORT=3001 npm run dev
```

### Prisma Client errors

Regenerate the client:

```bash
npx prisma generate
```

### Type errors in IDE

Restart your TypeScript server:
- VS Code: `Cmd/Ctrl + Shift + P` → "TypeScript: Restart TS Server"

---

## 🔐 Security Notes

⚠️ **For Development Only:**
- Default admin password is weak
- Temporary passwords are shown in browser (in production, only send via email)
- Mock payment flow has no real validation

**Before deploying to production:**
1. Change all default passwords
2. Use strong `NEXTAUTH_SECRET`
3. Integrate real payment provider (Paystack/Flutterwave)
4. Set up real email provider (SendGrid/Mailgun)
5. Enable HTTPS
6. Review and update security headers in `next.config.js`
7. Implement rate limiting on API routes

---

## 📚 Next Steps

- [ ] Enhance PDF generation with Puppeteer (real PDF rendering)
- [ ] Implement first-time password change enforcement
- [ ] Set up email sending (SMTP)
- [ ] Add real payment integration
- [ ] Deploy to Vercel/Railway/Render
- [ ] Set up monitoring and logging

---

## 💡 Tips

- Use **Prisma Studio** (`npm run db:studio`) to view/edit database records
- Check `uploads/` folder for generated certificate files
- API endpoints are at `/api/*` — test with Postman/Insomnia
- Certificate verification endpoint: `GET /api/certificates/verify/{certificateId}`

---

## 🤝 Need Help?

- Check the [Contributing Guide](CONTRIBUTING.md)
- Read the full [Project Brief](PROJECT_BRIEF.md)
- Review [Task Breakdown](TASKS.md)
- Open an issue on GitHub

---

**Happy coding! 🚀**
