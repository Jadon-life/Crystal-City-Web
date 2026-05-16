# Crystal City School Website

A fully functional, responsive school website with a **Next.js** frontend, **Express.js** backend, and **PostgreSQL** database.

---

## Features

### Public Pages
- **Home** - Hero section, stats, programs overview, call-to-action
- **About Us** - School history, mission/vision/values, leadership team
- **Admissions** - Process steps, requirements, fee structure
- **Contact** - Working contact form, school info, map placeholder
- **Events & News** - Tabbed view of upcoming events and announcements

### Authentication
- Secure JWT-based login for Students/Parents and Administrators
- Role-based route protection
- Token stored in localStorage with auto-redirect

### Admin Dashboard (`/dashboard`)
- **Overview** - Stats cards (students, announcements, events, messages)
- **Student Management** - Full CRUD (create, read, update, delete)
- **Announcements** - Create/edit/delete with categories and audience targeting
- **Events & Calendar** - Manage events with date, time, location
- **Messages** - View contact form submissions with reply functionality

### Student Portal (`/portal`)
- **Profile** - View personal, academic, and parent information
- **Announcements** - Expandable announcement cards
- **Events** - View upcoming school events

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React 18, Tailwind CSS, TypeScript |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Auth | JWT (JSON Web Tokens) + bcrypt |
| Icons | Lucide React |
| HTTP Client | Axios |

---

## Project Structure

```
crystal-city-school/
├── frontend/                 # Next.js App
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── about/page.tsx        # About page
│   │   │   ├── admissions/page.tsx   # Admissions page
│   │   │   ├── contact/page.tsx      # Contact form
│   │   │   ├── events/page.tsx       # Events & News
│   │   │   ├── login/page.tsx        # Login page
│   │   │   ├── dashboard/            # Admin Dashboard (protected)
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx          # Overview
│   │   │   │   ├── students/page.tsx
│   │   │   │   ├── announcements/page.tsx
│   │   │   │   ├── events/page.tsx
│   │   │   │   └── messages/page.tsx
│   │   │   └── portal/              # Student Portal (protected)
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx          # Profile
│   │   │       ├── announcements/page.tsx
│   │   │       └── events/page.tsx
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   └── lib/
│   │       └── api.ts               # API client with Axios
│   ├── package.json
│   ├── tailwind.config.ts
│   └── .env.example
│
├── backend/                  # Express.js API
│   ├── config/
│   │   ├── database.js              # PostgreSQL connection
│   │   └── initDb.js               # Database initialization script
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── adminController.js
│   │   ├── announcementController.js
│   │   ├── contactController.js
│   │   └── eventController.js
│   ├── middleware/
│   │   └── auth.js                  # JWT verification + role checks
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── adminRoutes.js
│   │   ├── announcementRoutes.js
│   │   ├── contactRoutes.js
│   │   └── eventRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── server.js                    # Express entry point
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

## Database Schema

### Tables

| Table | Purpose |
|-------|---------|
| `users` | Admins, students, parents (with role field) |
| `announcements` | School announcements with categories |
| `events` | School events with date/time/location |
| `contact_messages` | Contact form submissions |
| `calendar_entries` | Academic calendar items |

### Users Table Fields
- id, email, password, first_name, last_name, role (admin/student/parent)
- phone, address, class_name, admission_number
- parent_name, parent_phone, profile_image, is_active

---

## Getting Started (Local Development)

### Prerequisites
- Node.js 18+ installed
- PostgreSQL installed and running (or use a cloud database)

### Step 1: Clone & Install

```bash
# Backend
cd backend
cp .env.example .env    # Edit with your database URL
npm install

# Frontend
cd ../frontend
cp .env.example .env.local
npm install
```

### Step 2: Set Up Database

Edit `backend/.env` with your PostgreSQL connection string:
```
DATABASE_URL=postgresql://username:password@localhost:5432/crystal_city_school
JWT_SECRET=your-super-secret-key-change-this
```

Create the database:
```bash
# In PostgreSQL
createdb crystal_city_school

# Initialize tables + default admin
cd backend
npm run db:init
```

### Step 3: Run Development Servers

```bash
# Terminal 1 - Backend (port 5000)
cd backend
npm run dev

# Terminal 2 - Frontend (port 3000)
cd frontend
npm run dev
```

### Step 4: Access the Site
- **Website:** http://localhost:3000
- **API:** http://localhost:5000/api/health
- **Admin Login:** admin@crystalcity.edu / admin123

---

## API Endpoints

### Public Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | API health check |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/register` | User registration |
| GET | `/api/announcements` | Get announcements |
| GET | `/api/events` | Get events |
| POST | `/api/contact` | Submit contact form |

### Protected Routes (require JWT token)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/auth/me` | Get current user profile |

### Admin Routes (require admin role)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/stats` | Dashboard statistics |
| GET/POST | `/api/admin/students` | List/Create students |
| PUT/DELETE | `/api/admin/students/:id` | Update/Delete student |
| GET | `/api/admin/messages` | Get contact messages |
| POST | `/api/announcements` | Create announcement |
| PUT/DELETE | `/api/announcements/:id` | Update/Delete announcement |
| POST | `/api/events` | Create event |
| PUT/DELETE | `/api/events/:id` | Update/Delete event |

---

## Deployment Guide

### Phase 1: Deploy the Database

#### Option A: Supabase (Recommended - Free Tier)
1. Go to [supabase.com](https://supabase.com) and create an account
2. Click **"New Project"** and choose a name/password
3. Go to **Settings > Database** and copy the **Connection String (URI)**
4. It will look like: `postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres`
5. Use this as your `DATABASE_URL` in the backend

#### Option B: Neon (Free Tier)
1. Go to [neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Copy the connection string from the dashboard
4. Use as `DATABASE_URL`

#### Option C: MongoDB Atlas (if switching to MongoDB)
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) 
2. Create a free M0 cluster
3. Get the connection string

**After setting up the database, run the init script:**
```bash
cd backend
DATABASE_URL="your-connection-string" npm run db:init
```

---

### Phase 2: Deploy the Backend (Express API)

#### Option A: Render (Recommended - Free Tier)
1. Push your backend code to a GitHub repository
2. Go to [render.com](https://render.com) and sign up
3. Click **"New" > "Web Service"**
4. Connect your GitHub repo and select the `backend` folder
5. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node
6. Add **Environment Variables:**
   - `DATABASE_URL` = your Supabase/Neon connection string
   - `JWT_SECRET` = a strong random string
   - `JWT_EXPIRES_IN` = 7d
   - `NODE_ENV` = production
   - `FRONTEND_URL` = your Vercel frontend URL (add after deploying frontend)
7. Click **Deploy**
8. Note your API URL (e.g., `https://crystal-city-api.onrender.com`)

#### Option B: Railway
1. Go to [railway.app](https://railway.app) and sign up
2. Click **"New Project" > "Deploy from GitHub"**
3. Select your repo, point to `backend` folder
4. Add the same environment variables as above
5. Railway auto-detects Node.js and deploys

---

### Phase 3: Deploy the Frontend (Next.js)

#### Option A: Vercel (Recommended - Free Tier)
1. Push your frontend code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click **"Import Project"** and select your repo
4. Set the **Root Directory** to `frontend`
5. Add **Environment Variable:**
   - `NEXT_PUBLIC_API_URL` = `https://your-backend-url.onrender.com/api`
6. Click **Deploy**
7. Your site will be live at `https://your-project.vercel.app`

#### Option B: Netlify
1. Go to [netlify.com](https://www.netlify.com) and sign up
2. Click **"Add new site" > "Import from Git"**
3. Select your repo, set base directory to `frontend`
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add environment variable: `NEXT_PUBLIC_API_URL`
7. Deploy

---

### Phase 4: Custom Domain (Optional)

1. **Purchase a domain** from:
   - [Namecheap](https://namecheap.com) (~$10/year)
   - [GoDaddy](https://godaddy.com)
   - For Nigerian schools: get a `.edu.ng` domain from [NiRA](https://nira.org.ng)

2. **Connect to Vercel:**
   - Go to your Vercel project > Settings > Domains
   - Add your domain (e.g., `crystalcityschool.edu.ng`)
   - Update your domain's DNS:
     - Add an **A record** pointing to `76.76.21.21`
     - Or add a **CNAME** pointing to `cname.vercel-dns.com`
   - Wait for DNS propagation (5-30 minutes)

3. **Update Backend CORS:**
   - Add your domain to the `FRONTEND_URL` environment variable on Render/Railway

---

### Post-Deployment Checklist

- [ ] Database initialized with tables (`npm run db:init`)
- [ ] Default admin account works (admin@crystalcity.edu / admin123)
- [ ] Backend health check responds: `GET /api/health`
- [ ] Frontend loads and connects to API
- [ ] Login works for both admin and student
- [ ] Contact form submits successfully
- [ ] Admin can create students and announcements
- [ ] **Change the default admin password immediately!**
- [ ] Update CORS with your actual frontend domain

---

## Default Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@crystalcity.edu | admin123 |

> **Important:** Change the default admin password after first login in production!

---

## Customization

- **School Name/Info:** Edit `Navbar.tsx`, `Footer.tsx`, and page content
- **Colors:** Modify `tailwind.config.ts` primary/accent colors
- **Logo:** Replace the GraduationCap icon with your school logo image
- **Content:** Update text in page files under `src/app/`

---

## Environment Variables Summary

### Backend (`backend/.env`)
```
DATABASE_URL=postgresql://user:password@host:5432/dbname
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Frontend (`frontend/.env.local`)
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

---

## License

This project is built for Crystal City School. All rights reserved.
