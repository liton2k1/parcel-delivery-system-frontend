import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import NotFound from "@/components/NotFound";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
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

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.ADMIN as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to={ADMIN_DEFAULT_ROUTE} /> },
      ...generateRoutes(adminSidebarItems),
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
