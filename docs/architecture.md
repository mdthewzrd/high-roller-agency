# Architecture Documentation

## Overview

The N8N Builder App follows a modern, scalable architecture using Next.js 14, Convex, and Clerk with the BMad Method for parallel development.

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Client Browser                     │
│                  (React + Next.js)                   │
└─────────────────┬───────────────────────────────────┘
                  │
                  ├── Static Assets (CDN)
                  │
┌─────────────────▼───────────────────────────────────┐
│                 Vercel Edge Network                  │
│              (Edge Functions + Caching)              │
└─────────────────┬───────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────┐
│                  Next.js Application                 │
│         (App Router + Server Components)             │
├──────────────────────────────────────────────────────┤
│  • Pages & Layouts (app/)                           │
│  • API Routes (app/api/)                            │
│  • Middleware (authentication)                       │
│  • Server Actions                                    │
└─────────────────┬───────────────────────────────────┘
                  │
        ┌─────────┴─────────┬──────────────┐
        │                   │              │
┌───────▼────────┐ ┌────────▼──────┐ ┌─────▼──────┐
│     Clerk      │ │    Convex     │ │   Stripe   │
│ (Auth & Users) │ │  (Database)   │ │ (Billing)  │
└────────────────┘ └───────────────┘ └────────────┘
```

## Component Architecture

### Atomic Design Pattern

```
components/
├── atoms/           # Basic building blocks
│   ├── Button
│   ├── Input
│   └── Label
├── molecules/       # Combinations of atoms
│   ├── FormField
│   ├── Card
│   └── Modal
├── organisms/       # Complex components
│   ├── Header
│   ├── Sidebar
│   └── Dashboard
└── templates/       # Page layouts
    ├── AuthLayout
    └── DashboardLayout
```

### Component Guidelines

1. **TypeScript First**
   - Strict mode enabled
   - No `any` types
   - Comprehensive interfaces

2. **Mobile-First Design**
   - Start at 320px
   - Progressive enhancement
   - Touch-friendly

3. **Performance**
   - Lazy loading
   - Code splitting
   - Memoization

## Data Flow

### State Management

```typescript
// Global State (Zustand)
useAppStore
├── user
├── projects
├── workflows
└── settings

// Server State (React Query/SWR)
useQuery
├── API data
├── Convex subscriptions
└── Real-time updates

// Form State (React Hook Form)
useForm
├── Validation (Zod)
├── Error handling
└── Submission
```

### API Architecture

#### REST API Routes
```
/api/
├── auth/
│   ├── webhook    # Clerk webhooks
│   └── session    # Session management
├── projects/
│   ├── [id]       # CRUD operations
│   └── list       # List projects
└── workflows/
    ├── [id]       # CRUD operations
    └── execute    # Run workflow
```

#### Convex Functions
```
convex/
├── users.ts       # User management
├── projects.ts    # Project CRUD
├── workflows.ts   # Workflow logic
└── executions.ts  # Execution tracking
```

## Security Architecture

### Authentication Flow

```
1. User visits protected route
2. Middleware checks authentication
3. Redirect to Clerk if not authenticated
4. Clerk handles auth (OAuth, email, etc.)
5. Create/update user in Convex
6. Grant access to application
```

### Authorization Levels

- **Public** - Landing pages, documentation
- **Authenticated** - Dashboard, basic features
- **Pro/Enterprise** - Advanced features
- **Admin** - System management

### Security Measures

1. **Input Validation**
   - Zod schemas
   - Sanitization
   - Type checking

2. **API Security**
   - Rate limiting
   - CORS configuration
   - JWT verification

3. **Data Protection**
   - Encryption at rest
   - HTTPS only
   - Secure cookies

## Performance Architecture

### Optimization Strategies

1. **Code Splitting**
   ```typescript
   const DashboardComponent = dynamic(
     () => import('@/components/Dashboard'),
     { loading: () => <Skeleton /> }
   )
   ```

2. **Image Optimization**
   ```typescript
   <Image
     src="/hero.jpg"
     alt="Hero"
     width={1200}
     height={600}
     priority
   />
   ```

3. **Caching Strategy**
   - Static assets: 1 year
   - API responses: 5 minutes
   - Dynamic content: No cache
   - Database: Real-time

### Performance Budgets

| Metric | Target | Actual |
|--------|--------|--------|
| LCP | < 2.5s | - |
| FID | < 100ms | - |
| CLS | < 0.1 | - |
| Bundle | < 200KB | - |

## Deployment Architecture

### CI/CD Pipeline

```yaml
on: [push]
jobs:
  test:
    - Lint
    - Type check
    - Unit tests
    - E2E tests
  
  build:
    - Build application
    - Optimize assets
    - Generate sitemap
  
  deploy:
    - Deploy to Vercel
    - Run smoke tests
    - Monitor metrics
```

### Environment Strategy

- **Development** - Local development
- **Preview** - Branch deployments
- **Staging** - Pre-production testing
- **Production** - Live application

## Monitoring & Observability

### Metrics Collection

1. **Application Metrics**
   - Page views
   - User sessions
   - Feature usage
   - Error rates

2. **Performance Metrics**
   - Core Web Vitals
   - API latency
   - Database queries
   - Cache hit rates

3. **Business Metrics**
   - Sign-ups
   - Conversions
   - Revenue
   - Churn rate

### Alert Configuration

```javascript
alerts: {
  errorRate: { threshold: 1%, action: 'page' },
  apiLatency: { threshold: 500ms, action: 'email' },
  downtime: { threshold: 1min, action: 'phone' }
}
```

## Scalability Considerations

### Horizontal Scaling
- Stateless application
- Edge functions
- CDN distribution
- Database sharding

### Vertical Scaling
- Optimize queries
- Increase cache
- Upgrade instances
- Add resources

### Cost Optimization
- Usage-based pricing
- Auto-scaling
- Reserved capacity
- Resource monitoring