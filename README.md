# Portfolio Website with MongoDB

A modern, full-stack portfolio website built with Next.js 14, TypeScript, MongoDB, and Tailwind CSS.

## 🚀 Features

- ✅ **MongoDB Integration** - Dynamic data from database
- ✅ **Full TypeScript** - Type-safe from database to UI
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Mode** - Automatic theme switching
- ✅ **Framer Motion** - Smooth animations
- ✅ **API Routes** - RESTful endpoints
- ✅ **Service Layer** - Clean architecture

## 📋 Prerequisites

- Node.js 18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- pnpm (or npm/yarn)

## 🛠️ Installation

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
pnpm install
```

### 2. Environment Configuration

Create `.env.local` file in the root directory:

```bash
# For Local MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# OR for MongoDB Atlas
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

### 3. Test Database Connection

```bash
pnpm test:db
```

Expected output:
```
🔍 Testing MongoDB Connection...
✅ Successfully connected to MongoDB!
📦 Collections in current database:
   (No collections yet - run "pnpm run seed" to create them)
```

### 4. Seed the Database

```bash
pnpm run seed
```

This will populate your database with sample data.

### 5. Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## 📊 Database Structure

### Database Name: `portfolio`

### Collections:

#### 1. **profiles** (1 document)
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "role": "Full Stack Developer",
  "photo": "/profile.jpg",
  "summary": "Experienced developer with 5+ years in web development...",
  "location": "San Francisco, CA",
  "isRelocatable": true,
  "links": {
    "email": "mailto:john@example.com",
    "resume": "https://example.com/resume.pdf",
    "github": "https://github.com/johndoe",
    "linkedin": "https://linkedin.com/in/johndoe"
  },
  "skills": ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### 2. **experiences** (multiple documents)
```json
{
  "_id": "ObjectId",
  "period": "Jan 2023 – Present",
  "title": "Senior Software Engineer",
  "org": "Tech Company Inc.",
  "bullets": [
    "Led development of microservices architecture serving 1M+ users",
    "Reduced API response time by 40% through optimization",
    "Mentored team of 5 junior developers"
  ],
  "order": 1,
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### 3. **educations** (multiple documents)
```json
{
  "_id": "ObjectId",
  "period": "2018 – 2022",
  "title": "B.Sc. Computer Science",
  "org": "University of Technology",
  "order": 1,
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### 4. **projects** (multiple documents)
```json
{
  "_id": "ObjectId",
  "name": "E-Commerce Platform",
  "role": "Lead Developer",
  "stack": ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
  "description": "Built scalable e-commerce platform handling 10k+ daily transactions",
  "demo": "https://demo-project.com",
  "order": 1,
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### 5. **posts** (multiple documents)
```json
{
  "_id": "ObjectId",
  "title": "Building Scalable APIs with Node.js",
  "href": "https://blog.example.com/scalable-apis",
  "tags": ["nodejs", "api", "backend"],
  "publishedAt": "2024-01-15T00:00:00.000Z",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 🎨 Customization

### Update Your Profile Data

**Edit seed script** (`scripts/seed.ts`)

Update the data constants at the top of the file, then run:
```bash
pnpm run seed
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── portfolio/
│   │       └── route.ts           # Main API endpoint
│   ├── page.tsx                   # Main page
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── ui/                        # Reusable UI components
├── lib/
│   ├── db/
│   │   ├── mongodb.ts             # DB connection
│   │   └── models/                # Mongoose schemas
│   ├── services/
│   │   └── portfolio.service.ts   # Business logic
│   └── hooks/
│       └── usePortfolioData.ts    # Data fetching hook
├── types/                         # TypeScript definitions
├── scripts/
│   ├── seed.ts                    # Database seeding
│   └── test-connection.ts         # Connection test
└── public/
    └── profile.jpg                # Your profile photo
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start dev server

# Database
pnpm test:db          # Test MongoDB connection
pnpm run seed         # Seed database with data

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Linting
pnpm lint             # Run ESLint
```

## 🐛 Troubleshooting

### "MONGODB_URI is not defined"
- Create `.env.local` file with your MongoDB connection string

### "Connection refused"
- Make sure MongoDB is running: `brew services list` (Mac)
- Check MongoDB status: `sudo systemctl status mongod` (Linux)

### "Authentication failed"
- Verify username/password in connection string
- For Atlas: check database user permissions

### Data not showing
- Run seed script: `pnpm run seed`
- Check browser console for errors
- Test API: `http://localhost:3000/api/portfolio`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable:
   - `MONGODB_URI` = your production MongoDB URI
4. Deploy!

### Environment Variables in Production

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/portfolio
NODE_ENV=production
```

## 📚 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB + Mongoose
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm


---

Made with ❤️ by Omi