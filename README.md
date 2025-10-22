# 📦 Parcel Delivery System Frontend

A modern, responsive, and feature-rich frontend application for the Parcel Delivery System built with React and TypeScript.

---

🌟 Features

🔐 Secure Authentication - JWT-based login with role-based access control
👥 Multi-Role Dashboard - Customized interfaces for Sender, Receiver, Admin
📦 Parcel Management - Create, track, and manage parcels with real-time status updates
📊 Interactive Analytics - Visual dashboards with charts and statistics using Recharts
📲 OTP Verification - Secure phone-based registration with OTP validation
📧 Email Notifications - Integrated email service using EmailJS
🎨 Modern UI/UX - Beautiful, accessible components with shadcn/ui and Tailwind CSS
📱 Responsive Design - Seamless experience across desktop, tablet, and mobile devices
🔄 RTK Query - Data fetching and caching
✅ Form Validation - Robust form handling with React Hook Form and Zod

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI library for building interactive interfaces |
| **TypeScript** | Type-safe development and enhanced code quality |
| **RTK Query** | Data fetching and caching |
| **React Router DOM** | Client-side routing and navigation |
| **Axios** | HTTP client for API communication |
| **shadcn/ui** |High-quality, accessible React components |
| **Tailwind CSS** |Utility-first CSS framework for styling |
| **React Hook Form** | Performant form validation and handling|
| **Zod** | DTypeScript-first schema validation |
| **Recharts** | Composable charting library for data visualization |
| **EmailJS** | Client-side email service integration |

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/liton2k1/parcel-delivery-system-frontend.git
cd parcel-delivery-system-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
DB_URL=

# JWT Configuration
JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES=
JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRES=

# Bcrypt
BCRYPT_SALT_ROUND=

# Express Session
EXPRESS_SESSION_SECRET=

# Frontend URL
FRONTEND_URL=

# SMTP Gmail Configuration
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=

# Redis Configuration
REDIS_HOST=
REDIS_PORT=
REDIS_USERNAME=
REDIS_PASSWORD=
```

### 4️⃣ Run the Application

**Development Mode:**
```bash
npm run dev
```

## 👥 User Roles & Permissions

| Role | Capabilities |
|------|--------------|
| **`SENDER`** | Create parcels, cancel/delete own parcels, view parcel status and history |
| **`RECEIVER`** | View incoming parcels, confirm deliveries, access delivery history |
| **`DELIVERY_PERSONNEL`** | Assigned to parcels by admins, update delivery status |
| **`ADMIN`** | Manage users, create admins and personnel, handle coupons, oversee all parcels |
| **`SUPER_ADMIN`** | Full system access, can create super admins, complete administrative control |

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```


## 📊 Parcel Status Flow

```
REQUESTED → APPROVED → PICKED_UP → DISPATCHED → IN_TRANSIT → DELIVERED
                ↓           ↓            ↓            ↓
            CANCELLED    BLOCKED      FLAGGED    CANCELLED
```

---


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Liton**
- GitHub: [@liton2k1](https://github.com/liton2k1)

---


<div align="center">
  Made with ❤️ by Liton
</div>