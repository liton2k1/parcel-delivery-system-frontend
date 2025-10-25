import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import NotFound from "@/components/NotFound";
import HomePage from "@/pages/main/Home/Home";
import Login from "@/pages/auth/Login/Login";
import Register from "@/pages/auth/Register/Register";
import Verify from "@/pages/auth/Verify/Verify";
import type { TRole } from "@/types";
import { Role } from "@/types/user";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import {
  ADMIN_DEFAULT_ROUTE,
  RECEIVER_DEFAULT_ROUTE,
  SENDER_DEFAULT_ROUTE,
  SUPER_ADMIN_DEFAULT_ROUTE,
} from "./constants";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { generateRoutes } from "./generateRoutes";
import { superAdminSidebarItems } from "./superAdminSidebarItems";
import ParcelStatus from "@/pages/sender/ParcelStatus";
import ViewParcelDetails from "@/pages/admin/ParcelDetails";
import TrackParcel from "@/pages/main/TrackParcel/TrackParcel";
import About from "@/pages/main/About/About";
import Contact from "@/pages/main/Contact/Contact";
import Features from "@/pages/main/Features/Features";
import FAQ from "@/pages/main/FAQ/FAQ";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: FAQ,
        path: "/faq",
      },
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: TrackParcel,
        path: "/track-parcel",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.ADMIN as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to={ADMIN_DEFAULT_ROUTE} /> },
      ...generateRoutes(adminSidebarItems),
      { Component: ViewParcelDetails, path: ":id/details" },
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.SUPER_ADMIN as TRole),
    path: "/super-admin",
    children: [
      { index: true, element: <Navigate to={SUPER_ADMIN_DEFAULT_ROUTE} /> },
      ...generateRoutes(superAdminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.SENDER as TRole),
    path: "/sender",
    children: [
      { index: true, element: <Navigate to={SENDER_DEFAULT_ROUTE} /> },
      ...generateRoutes(senderSidebarItems),
      { Component: ParcelStatus, path: ":id/status" },
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.RECEIVER as TRole),
    path: "/receiver",
    children: [
      { index: true, element: <Navigate to={RECEIVER_DEFAULT_ROUTE} /> },
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
