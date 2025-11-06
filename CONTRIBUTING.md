# Contributing to NAMMES Portal

Thank you for your interest in contributing to the NAMMES National Web Portal!

## Getting Started

1. **Fork the repository** and clone it locally
2. **Install dependencies**: `npm install`
3. **Copy `.env.example` to `.env`** and configure your environment
4. **Run database migrations**: `npx prisma migrate dev`
5. **Seed the database** (optional): `npm run seed`
6. **Start the development server**: `npm run dev`

## Development Workflow

### Branching Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature branches (e.g., `feature/certificate-generation`)
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Urgent production fixes

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add certificate PDF generation
fix: resolve login redirect issue
docs: update README with setup instructions
style: format code with Prettier
refactor: simplify payment webhook handler
test: add E2E tests for registration flow
chore: update dependencies
```

### Pull Request Process
1. Create a feature branch from `develop`
2. Make your changes and commit with clear messages
3. Write or update tests as needed
4. Ensure all tests pass: `npm test`
5. Run linter: `npm run lint`
6. Push to your fork and open a PR to `develop`
7. Request review from maintainers
8. Address review feedback
9. Once approved, a maintainer will merge

### Code Style
- Use **TypeScript** for type safety
- Follow **ESLint** and **Prettier** configurations
- Write **meaningful variable and function names**
- Add **JSDoc comments** for complex functions
- Keep functions **small and focused** (single responsibility)

### Testing
- Write **unit tests** for utility functions and business logic
- Write **integration tests** for API endpoints
- Write **E2E tests** for critical user flows (registration, login, certificate generation)
- Aim for **>80% code coverage** on core modules

## Project Structure
```
/
├── app/                  # Next.js App Router pages
│   ├── (public)/        # Public pages (landing, about, contact)
│   ├── (auth)/          # Auth pages (login, register, reset)
│   ├── portal/          # Member dashboard pages
│   └── admin/           # Admin console pages
├── components/          # React components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components (navbar, footer, sidebar)
│   └── features/       # Feature-specific components
├── lib/                # Utility functions and helpers
│   ├── prisma.ts       # Prisma client
│   ├── auth.ts         # Auth utilities
│   ├── email.ts        # Email sender
│   ├── storage.ts      # File storage helpers
│   └── pdf.ts          # PDF generation
├── prisma/             # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── public/             # Static assets
│   ├── images/
│   └── fonts/
├── tests/              # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example        # Environment variables template
├── .eslintrc.json      # ESLint config
├── .prettierrc         # Prettier config
├── next.config.js      # Next.js config
├── tailwind.config.ts  # Tailwind config
├── tsconfig.json       # TypeScript config
└── package.json
```

## Coding Guidelines

### React Components
- Use **functional components** with hooks
- Prefer **server components** (Next.js 14+) where possible
- Use **client components** only when needed (interactivity, browser APIs)
- Extract reusable logic into **custom hooks**

### API Routes
- Validate input with **Zod** schemas
- Return consistent error responses:
  ```typescript
  { error: "Error message", code: "ERROR_CODE" }
  ```
- Use proper HTTP status codes (200, 201, 400, 401, 403, 404, 500)
- Add rate limiting to public endpoints

### Database
- Use **Prisma migrations** for schema changes
- Never modify the database directly in production
- Seed with realistic test data for development

### Security
- **Never commit secrets** to version control
- **Validate and sanitize** all user input
- **Hash passwords** with bcrypt (cost factor 10+)
- Use **parameterized queries** (Prisma handles this)
- Implement **CSRF protection** for state-changing requests
- Set **secure, HttpOnly cookies** for sessions

## Testing Locally

### Run All Tests
```bash
npm test
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Run Specific Test File
```bash
npm test -- path/to/test.spec.ts
```

### Check Code Coverage
```bash
npm run test:coverage
```

## Reporting Issues

### Bug Reports
Please include:
- **Description** of the bug
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment** (OS, browser, Node version)

### Feature Requests
Please include:
- **Description** of the feature
- **Use case** (why is it needed?)
- **Proposed solution** (if any)
- **Alternatives considered**

## Questions?

- Open a **Discussion** for general questions
- Check existing **Issues** before creating new ones
- Reach out to maintainers via email (in README)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to NAMMES! 🎉
