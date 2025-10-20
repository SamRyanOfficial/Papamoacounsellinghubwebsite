# Papamoa Counselling Hub - Website Flow Chart

## 🏗️ Overall Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    PAPAMOA COUNSELLING HUB                      │
│                         WEBSITE FLOW                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   FRONTEND      │    │    BACKEND      │    │   EXTERNAL      │
│   (Next.js)     │◄──►│   (Supabase)    │◄──►│   SERVICES      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   UI Components │    │   Database      │    │   Stripe        │
│   (shadcn/ui)   │    │   (PostgreSQL)  │    │   (Payments)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🏠 Landing Page Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        LANDING PAGE (/)                         │
│                    Papamoa Counselling Hub                      │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    USER TYPE SELECTION                          │
└─────────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌──────────────┐    ┌──────────────────────┐    ┌──────────────┐
│   CLIENTS    │    │     NAVIGATION       │    │ COUNSELLORS  │
│   (Sign Up)  │    │   (Header Menu)      │    │  (Rooms)     │
└──────────────┘    └──────────────────────┘    └──────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌──────────────┐    ┌──────────────────────┐    ┌──────────────┐
│ /signup      │    │ • Home               │    │ /rooms       │
│              │    │ • About (/profile)   │    │              │
│              │    │ • Rooms              │    │              │
│              │    │ • Contact            │    │              │
│              │    │ • Login              │    │              │
└──────────────┘    └──────────────────────┘    └──────────────┘
```

## 🔐 Authentication Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        AUTHENTICATION FLOW                      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   SIGNUP     │───►│   LOGIN      │───►│   DASHBOARD  │
│   (/signup)  │    │   (/login)   │    │   (/dashboard)│
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. Form      │    │ 1. Form      │    │ 1. Profile   │
│    Validation│    │    Validation│    │    Setup     │
│              │    │              │    │              │
│ 2. Supabase  │    │ 2. Supabase  │    │ 2. Room      │
│    Auth      │    │    Auth      │    │    Booking   │
│              │    │              │    │              │
│ 3. Email     │    │ 3. Status    │    │ 3. Session   │
│    Verify    │    │    Check     │    │    Management│
│              │    │              │    │              │
│ 4. Admin     │    │ 4. Redirect  │    │ 4. Payments  │
│    Approval  │    │    Based on  │    │    (Stripe)  │
│              │    │    Status    │    │              │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 🏢 Room Booking Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        ROOM BOOKING FLOW                        │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   ROOMS      │───►│   SELECT     │───►│   CART       │
│   PAGE       │    │   ROOM &     │    │   SYSTEM     │
│   (/rooms)   │    │   TIME SLOT  │    │              │
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ • Serenity   │    │ • Date       │    │ • Add to     │
│   Suite      │    │   Picker     │    │   Cart       │
│   ($65)      │    │              │    │              │
│              │    │ • Time       │    │ • Remove     │
│ • Tranquility│    │   Slots      │    │   from Cart  │
│   Room       │    │   (9AM-4PM)  │    │              │
│   ($60)      │    │              │    │ • Total      │
│              │    │ • Calendar   │    │   Calculation│
│ • Harmony    │    │   Validation │    │              │
│   Lounge     │    │              │    │ • Checkout   │
│   ($60)      │    │ • Accessible │    │   Button     │
│              │    │   Features   │    │              │
│ • Focus Room │    │              │    │ • Mobile     │
│   ($70)      │    │ • Real-time  │    │   Drawer     │
│              │    │   Availability│   │              │
└──────────────┘    └──────────────┘    └──────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        CHECKOUT PROCESS                         │
└─────────────────────────────────────────────────────────────────┘
        │
        ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   PAYMENT    │───►│   CONFIRM    │───►│   BOOKING    │
│   (Stripe)   │    │   BOOKING    │    │   CREATED    │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 📊 Database Schema

```
┌─────────────────────────────────────────────────────────────────┐
│                        DATABASE SCHEMA                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   COUNSELLORS   │    │COUNSELLOR_PROFILES│   │  ROOM_BOOKINGS  │
│   TABLE         │    │   TABLE         │    │   TABLE         │
└─────────────────┘    └─────────────────┘    └─────────────────┘
│ • id (PK)      │    │ • id (PK)      │    │ • id (PK)      │
│ • full_name    │    │ • counsellor_id│    │ • counsellor_id│
│ • date_of_birth│    │   (FK)         │    │   (FK)         │
│ • status       │    │ • bio          │    │ • room_id      │
│   (pending/    │    │ • photo_url    │    │ • booking_date │
│    approved/   │    │ • specializations│  │ • start_time   │
│    rejected)   │    │ • qualifications│   │ • end_time     │
│ • created_at   │    │ • hourly_rate  │    │ • total_amount │
│ • approved_at  │    │ • created_at   │    │ • status       │
│ • approved_by  │    │ • updated_at   │    │ • created_at   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                       │                       │
        └───────────────────────┼───────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUPABASE AUTH USERS                          │
└─────────────────────────────────────────────────────────────────┘
```

## 🎨 UI Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    UI COMPONENT HIERARCHY                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐
│   LAYOUT        │
│   (layout.tsx)  │
└─────────────────┘
        │
        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   HEADER        │    │     MAIN        │    │   FOOTER        │
│   (header.tsx)  │    │   CONTENT       │    │   (footer.tsx)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ • Navigation    │    │ • Page          │    │ • Contact Info  │
│ • Logo          │    │   Components    │    │ • Social Links  │
│ • Auth Buttons  │    │ • Route         │    │ • Copyright     │
│ • Mobile Menu   │    │   Handling      │    │ • Legal Links   │
└─────────────────┘    └─────────────────┘    └─────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    SHADCN/UI COMPONENTS                         │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   FORMS      │    │   LAYOUT     │    ┌──────────────┐
│              │    │              │    │   FEEDBACK   │
│ • Input      │    │ • Card       │    │              │
│ • Button     │    │ • Dialog     │    │ • Toast      │
│ • Label      │    │ • Sheet      │    │ • Alert      │
│ • Textarea   │    │ • Badge      │    │ • Progress   │
│ • Select     │    │ • Separator  │    │ • Skeleton   │
│ • Calendar   │    │ • Tabs       │    │              │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 🔄 User Journey Flows

### Client Journey
```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   LANDING    │───►│   SIGNUP     │───►│   PROFILE    │
│   PAGE       │    │   FORM       │    │   SETUP      │
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ • Learn about│    │ • Create     │    │ • Complete   │
│   services   │    │   account    │    │   profile    │
│ • View       │    │ • Email      │    │ • Upload     │
│   counsellor │    │   verification│   │   photo      │
│   profile    │    │ • Admin      │    │ • Add bio    │
│ • Contact    │    │   approval   │    │ • Set rates  │
└──────────────┘    └──────────────┘    └──────────────┘
```

### Counsellor Journey
```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   LANDING    │───►│   ROOM       │───►│   BOOKING    │
│   PAGE       │    │   SELECTION  │    │   CART       │
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ • View rooms │    │ • Choose     │    │ • Add        │
│ • Check      │    │   room type  │    │   selections │
│   availability│   │ • Select     │    │ • Review     │
│ • View rates │    │   date/time  │    │   total      │
│ • See        │    │ • Check      │    │ • Proceed    │
│   amenities  │    │   features   │    │   to payment │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 🛠️ Technical Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                        TECHNICAL STACK                          │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   FRONTEND   │    │   BACKEND    │    │   SERVICES   │
│              │    │              │    │              │
│ • Next.js 15 │    │ • Supabase   │    │ • Stripe     │
│ • React 18   │    │ • PostgreSQL │    │ • Resend     │
│ • TypeScript │    │ • Auth       │    │ • Email      │
│ • Tailwind   │    │ • Real-time  │    │   Templates  │
│ • shadcn/ui  │    │ • Storage    │    │ • Webhooks   │
└──────────────┘    └──────────────┘    └──────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   TOOLS      │    │   LIBRARIES  │    │   FEATURES   │
│              │    │              │    │              │
│ • Vercel     │    │ • date-fns   │    │ • Responsive │
│ • Git        │    │ • lucide-react│   │   Design     │
│ • VS Code    │    │ • sonner     │    │ • Dark Mode  │
│ • DevTools   │    │ • react-hook-form│ • Animations │
│ • ESLint     │    │ • zod        │    │ • SEO        │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 🚀 Deployment & Environment

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT ARCHITECTURE                      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   LOCAL      │    │   STAGING    │    │   PRODUCTION │
│   DEVELOPMENT│    │   ENVIRONMENT│    │   ENVIRONMENT│
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ • npm run    │    │ • Vercel     │    │ • Vercel     │
│   dev        │    │   Preview    │    │   Production │
│ • Local      │    │ • Test       │    │ • Live       │
│   Database   │    │   Database   │    │   Database   │
│ • Hot        │    │ • CI/CD      │    │ • Monitoring │
│   Reload     │    │   Pipeline   │    │ • Analytics  │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 📱 Responsive Design Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    RESPONSIVE DESIGN FLOW                       │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   MOBILE     │    │   TABLET     │    │   DESKTOP    │
│   (< 768px)  │    │   (768-1024px)│   │   (> 1024px) │
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ • Stacked    │    │ • Grid       │    │ • Side-by-   │
│   Layout     │    │   Layout     │    │   Side       │
│ • Mobile     │    │ • Medium     │    │ • Full       │
│   Menu       │    │   Navigation │    │   Navigation │
│ • Touch      │    │ • Hybrid     │    │ • Hover      │
│   Optimized  │    │   Controls   │    │   Effects    │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 🔒 Security & Authentication

```
┌─────────────────────────────────────────────────────────────────┐
│                    SECURITY FLOW                                │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   USER       │───►│   SUPABASE   │───►│   DATABASE   │
│   INPUT      │    │   AUTH       │    │   ACCESS     │
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ • Form       │    │ • JWT        │    │ • Row Level  │
│   Validation │    │   Tokens     │    │   Security   │
│ • XSS        │    │ • Session    │    │ • RLS        │
│   Protection │    │   Management │    │   Policies   │
│ • CSRF       │    │ • Rate       │    │ • Encrypted  │
│   Protection │    │   Limiting   │    │   Storage    │
└──────────────┘    └──────────────┘    └──────────────┘
```

This flow chart represents the complete architecture and user journey of your Papamoa Counselling Hub website, showing how all components work together to create a seamless experience for both counselling clients and therapists. 