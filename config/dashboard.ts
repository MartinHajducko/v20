import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Banka otazok",
      href: "/dashboard/questions",
      icon: "post",
      admin: true,
    },
    {
      title: "Posts",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Pages",
      href: "/",
      icon: "page",
      disabled: true,
    },
    {
      title: "Media",
      href: "/",
      icon: "media",
      disabled: true,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
  adminNav: [
    {
      title: "Prehľad",
      href: "/dashboard/admin",
      icon: "post",
    },
    {
      title: "Otázky",
      href: "/dashboard/admin/questions",
      icon: "post",
    },
    {
      title: "Používatelia",
      href: "/dashboard/admin/users",
      icon: "page",
      disabled: true,
    },
    {
      title: "Ine",
      href: "#",
      icon: "media",
      disabled: true,
    },
    {
      title: "Ine",
      href: "#",
      icon: "billing",
      disabled: true,
    },
    {
      title: "Ine",
      href: "#",
      icon: "settings",
      disabled: true,
    },
    {
      title: "Banka otazok",
      href: "/dashboard/questions",
      icon: "post",
      admin: true,
    },
    {
      title: "Posts",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Pages",
      href: "/",
      icon: "page",
      disabled: true,
    },
    {
      title: "Media",
      href: "/",
      icon: "media",
      disabled: true,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
