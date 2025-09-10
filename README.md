# High Roller Agency - Premium Digital Marketing Platform

A sophisticated B2B digital marketing platform built for high-end clients seeking premium social media marketing, publications, and digital tools services. Built with Next.js, TypeScript, Convex, and Clerk.

## Features

✅ **Complete Platform Implementation**
- Landing page with premium client showcase
- Service catalog with filtering
- User authentication (Clerk)
- Protected dashboard routes
- Sophisticated black/white/gray design
- Database schema (Convex)
- Reusable components library
- Premium client carousel

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Lucide Icons
- **Database**: Convex (schema and functions ready)
- **Authentication**: Clerk
- **Deployment**: Vercel-ready

## Project Structure

```
highrolleragency/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Landing page with client carousel
│   ├── services/          # Services catalog
│   ├── dashboard/         # Protected user dashboard
│   ├── sign-in/          # Clerk sign-in
│   └── sign-up/          # Clerk sign-up
├── components/
│   ├── ui/               # shadcn/ui components
│   └── shared/           # Custom reusable components
├── convex/               # Database schema and functions
├── public/               # Static assets including logo
└── lib/                  # Utilities
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Clerk account
- Convex account

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

# Convex Database
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_deployment
```

### Installation

```bash
# Install dependencies
npm install

# Set up Convex (optional - for database)
npx convex dev

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Key Features Implemented

### Public Pages
- **Landing Page**: Hero section, premium client carousel, service showcase
- **Services Hub**: Filterable catalog with tabs for categories
- **Authentication**: Sign-in/Sign-up with Clerk

### Protected Routes
- **Dashboard**: User stats, recent orders, quick actions
- **Middleware**: Route protection with Clerk

### Components Library
- **ClientCarousel**: Premium client showcase with auto-rotation
- **ServiceCard**: Display service packages with pricing
- **PricingTable**: Interactive tier selection
- **StatCard**: Dashboard statistics display
- **Header/Footer**: Responsive navigation with logo

### Database (Convex)
- **Schema**: Users, Services, Packages, Orders
- **Functions**: CRUD operations for all entities
- **Admin Functions**: User management, order tracking

## Design System

### Color Scheme
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)  
- **Accent**: Gray variants (#f5f5f5, #e5e5e5, #d4d4d4)
- **Background**: Dark gradients (gray-950 to black)

### Typography
- Modern sans-serif fonts
- Bold headings for impact
- Sophisticated hierarchy

## Development Status

✅ **Completed**
- Project setup and configuration
- High Roller Agency branding implementation
- Black/white/gray design system
- Premium client carousel
- Component library
- Service catalog
- Dashboard implementation
- Logo and visual identity

🔄 **Ready for Production**
- Connect Convex database
- Add environment variables
- Deploy to Vercel

## Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Vercel Deployment

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Documentation

Complete documentation available in `/docs`:
- `prd.md` - Product requirements
- `architecture.md` - Technical architecture
- `ui-ux-spec.md` - Design specifications
- `service-catalog-example.md` - Service data structure

## Service Categories

### Social Media
- Instagram (Monthly & Post Campaigns)
- YouTube (Video Promotion)
- TikTok (Growth Packages)
- Spotify (Song Campaigns)
- Twitter/X, LinkedIn

### Publications
- Online Media
- Print Publications
- Broadcast Television
- Digital Media

### Digital Tools
- Website Design
- SEO Services
- Email Automation
- App Development
- Google Knowledge Panel

## Premium Client Showcase

Features rotating carousel of Fortune 500 clients including:
- Technology companies (Apple, Google, Microsoft)
- Entertainment (Netflix, Spotify)
- E-commerce (Amazon)
- Automotive (Tesla)
- Sports & Apparel (Nike)

## Notes

- **Premium B2B Platform**: Invite-only access for high-end clients
- **Sophisticated Design**: Black/white/gray monochromatic theme
- **Mobile-first**: Responsive across all devices
- **Production-ready**: Clean, professional codebase
- **Scalable Architecture**: Built for growth

## License

Private - All rights reserved to High Roller Agency

---

Built with cutting-edge web technologies for premium digital marketing services.