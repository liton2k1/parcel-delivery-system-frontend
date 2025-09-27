# 📦 Parcel Delivery System

A modern, modular, and secure web application for managing parcel deliveries.
Built with React, TypeScript, shadcn/ui, RTK Query, and Recharts for analytics.

---

Live Demo: [Parcel Delivery System](https://b5a6-frontend.vercel.app/).

## 🧱 Features

- Authentication: Email/password login, JWT, OTP verification
- Role-based Access to dashboard: Sender, Receiver, Admin, Super Admin, Delivery Personnel
- Manage users, parcels, and deliveries
- Parcel Lifecycle: Request, Approve, Picked, Dispatch, In Transit, Deliver, Block, Cancel, Flagged
- Real-time Tracking: Track parcels by tracking ID
- Status Analytics: Bar and Pie charts for delivery status, parcel type, shipping type, and trends
- Responsive UI: Modern design with shadcn/ui and Tailwind CSS
- Coupon Support: Admins can create and manage coupons
- Notifications: Email for OTP verification
- Contact email using Emailjs
- Global Error Handling: User-friendly error messages

## 🧩 Tech Stack

- React + Vite — Frontend framework
- TypeScript — Type safety
- shadcn/ui — Modern UI components
- Tailwind CSS — Utility-first styling
- RTK Query — Data fetching and caching
- Recharts — Analytics and charts
- Sonner — Toast notifications
- React Hook Form + Zod — Forms and validation
- Lucide Icons — Icon set
- Emailjs for email receiving

---

## 🛠️ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/faisal-akbar/b5b6-frontend.git
cd b5b6-frontend
# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env

# 4. Update .env with your MongoDB URI, nodemailer credentials, redis credentials, etc.
VITE_BASE_URL=http://localhost:5000/api/v1
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=template_id
VITE_EMAILJS_PUBLIC_ID=your_public_id

# 5. Run locally
npm run dev
```

---

## 🔐 Email and password for testing dummy users:

```
// SUPER_ADMIN
email: "super@gmail.com",
password: "12345678"

// SENDER
email: "john.sender@parcel.com",
password: "sender123"

// RECEIVER
email: "bob.receiver@parcel.com",
 password: "receiver123",

 // ADMIN
email: "admin@parcel.com",
password: "Ph@12345678"

// Sample Id's for delivery personnel

"68ad6b75b010e0e1a1c78d20"

"68ad6b74b010e0e1a1c78d1d"
```

---

## 📦 Public Parcel Status

Use this below sample tracking id:

- `TRK-20250826-404197`

## 📦 Sample Coupon

- `IK5QY5NL`
- `TU56CKCZ`

## 📁 Folder Structure

```
.
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── icons
│   │   │   └── Logo.tsx
│   │   ├── images
│   │   │   ├── parcel-login.jpg
│   │   │   └── parcel-register.jpg
│   │   └── react.svg
│   ├── components
│   │   ├── DeleteConformation.tsx
│   │   ├── Error.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Information.tsx
│   │   ├── Loading.tsx
│   │   ├── NotFound.tsx
│   │   ├── app-sidebar.tsx
│   │   ├── layout
│   │   │   ├── CommonLayout.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ModeToggle.tsx
│   │   │   └── Navbar.tsx
│   │   ├── modules
│   │   │   ├── about
│   │   │   │   ├── AboutFeatures.tsx
│   │   │   │   ├── AboutHero.tsx
│   │   │   │   └── AboutJourney.tsx
│   │   │   ├── admin
│   │   │   │   ├── parcels
│   │   │   │   │   ├── AdminParcelDetails.tsx
│   │   │   │   │   ├── AdminParcelModal.tsx
│   │   │   │   │   ├── AdminParcelTimeLine.tsx
│   │   │   │   │   ├── AdminParcelsTable.tsx
│   │   │   │   │   └── analytics
│   │   │   │   │       ├── DeliveryStatysBarChart.tsx
│   │   │   │   │       ├── OverViewCards.tsx
│   │   │   │   │       ├── ParcelsCharts.tsx
│   │   │   │   │       ├── ShipmentBarChart.tsx
│   │   │   │   │       ├── ShippingTypeChart.tsx
│   │   │   │   │       └── TypePieChart.tsx
│   │   │   │   └── users
│   │   │   │       ├── CreateStuff.tsx
│   │   │   │       └── UsersTable.tsx
│   │   │   ├── authentication
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RegisterForm.tsx
│   │   │   ├── contact
│   │   │   │   ├── ContactHero.tsx
│   │   │   │   └── contactForm.tsx
│   │   │   ├── faq
│   │   │   │   ├── FaqContact.tsx
│   │   │   │   ├── FaqHero.tsx
│   │   │   │   └── FaqSection.tsx
│   │   │   ├── features
│   │   │   │   ├── FeaturesBenefit.tsx
│   │   │   │   ├── FeaturesCTA.tsx
│   │   │   │   ├── FeaturesGrid.tsx
│   │   │   │   └── FeaturesHero.tsx
│   │   │   ├── home
│   │   │   │   ├── Feature.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── HomeAbout.tsx
│   │   │   │   ├── HomeCTA.tsx
│   │   │   │   ├── HomeFaq.tsx
│   │   │   │   └── HomeTestimonials.tsx
│   │   │   ├── receiver
│   │   │   │   ├── ReceiverHistoryParcelTable.tsx
│   │   │   │   └── ReceiverIncomingParcelTable.tsx
│   │   │   ├── sender
│   │   │   │   ├── SendParcelModal.tsx
│   │   │   │   ├── SenderParcelTable.tsx
│   │   │   │   ├── StatusDetails.tsx
│   │   │   │   └── StatusTimeLine.tsx
│   │   │   ├── testimonials
│   │   │   │   ├── TestimonialsCTA.tsx
│   │   │   │   └── TestimonialsSection.tsx
│   │   │   └── trackParcel
│   │   │       ├── HelpSection.tsx
│   │   │       ├── ParcelDetails.tsx
│   │   │       ├── TimeLine.tsx
│   │   │       ├── Track.tsx
│   │   │       ├── TrackParcelForm.tsx
│   │   │       └── TrackParcelHero.tsx
│   │   └── ui
│   │       ├── Password.tsx
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── nav-user.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── shadcn-io
│   │       │   └── spinner
│   │       │       └── index.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   ├── config
│   │   └── index.ts
│   ├── context
│   │   └── theme-context.ts
│   ├── hooks
│   │   ├── use-mobile.ts
│   │   └── useTheme.ts
│   ├── index.css
│   ├── lib
│   │   ├── axios.ts
│   │   ├── emailjs.ts
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── HomePage.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrackParcel.tsx
│   │   ├── Unauthorized.tsx
│   │   ├── Verify.tsx
│   │   ├── admin
│   │   │   ├── analytics
│   │   │   │   └── Analytics.tsx
│   │   │   ├── parcels
│   │   │   │   ├── ViewParcelDetails.tsx
│   │   │   │   └── ViewParcels.tsx
│   │   │   └── user
│   │   │       └── AllUsers.tsx
│   │   ├── receiver
│   │   │   ├── DeliveryHistory.tsx
│   │   │   └── IncomingParcels.tsx
│   │   └── sender
│   │       ├── MyParcels.tsx
│   │       └── ParcelStatus.tsx
│   ├── providers
│   │   └── theme-provider.tsx
│   ├── redux
│   │   ├── api
│   │   │   ├── axiosBaseQuery.ts
│   │   │   └── baseApi.ts
│   │   ├── features
│   │   │   ├── auth
│   │   │   │   └── authApi.ts
│   │   │   ├── coupon
│   │   │   │   └── couponApi.ts
│   │   │   ├── parcel
│   │   │   │   └── parcelApi.ts
│   │   │   └── user
│   │   │       └── userApi.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── routes
│   │   ├── adminSidebarItems.ts
│   │   ├── constants.ts
│   │   ├── index.tsx
│   │   ├── receiverSidebarItems.ts
│   │   └── senderSidebarItems.ts
│   ├── types
│   │   ├── auth-type.ts
│   │   ├── index.ts
│   │   ├── parcel-type.ts
│   │   ├── sender-parcel-type.ts
│   │   └── user-type.ts
│   ├── utils
│   │   ├── generateRoutes.ts
│   │   ├── getNameInitials.ts
│   │   ├── getSidebarItems.ts
│   │   ├── getStatusColor.ts
│   │   └── withAuth.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

---

## 👤 User Roles

| Role                 | Responsibilities                                          |
| -------------------- | --------------------------------------------------------- |
| `SENDER`             | send/cancel/delete parcels, view own parcels, status      |
| `RECEIVER`           | View incoming parcels, confirm delivery, delivery history |
| `DELIVERY_PERSONNEL` | Currently admin can assign to parcel, and create          |
| `ADMIN`              | Manage users, create admins and personnel, view analytics |
| `SUPER_ADMIN`        | Similar to admin                                          |

---

## Screenshots

### Admin Dashboard

![Parcel Analytics](docsImages/Parcel_Analytics.png)

![Parcel Management](docsImages/Parcel_manage.png)

![Parcel Details](docsImages/admin_parcel_details.png)

![User Management](docsImages/user_management.png)

---

### Sender Dashboard

![My Parcels](docsImages/sender-parcels.png)

![Parcel Status](docsImages/sender_status_log.png)

---

### Receiver Dashboard

![Incoming Parcels](docsImages/receiver_incoming.png)

![Delivery History](docsImages/receiver_history.png)
