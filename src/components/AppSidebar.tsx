// AppSidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import * as React from "react";
import { Link, useLocation } from "react-router";
import Error from "./Error";
import Loading from "./Loading";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { NavUser } from "./ui/nav-user";
import { Truck } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData, isLoading, isError } = useGetMeQuery(undefined);
  const location = useLocation();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/" className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full p-2">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Easy Parcel
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {data.navMain.map((group, groupIndex) => (
          <SidebarGroup key={groupIndex}>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const itemPath = `/admin/${item.url}`;
                  const isActive = location.pathname === itemPath;
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          to={itemPath}
                          className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors ${
                            isActive &&
                            "bg-primary text-white hover:!bg-primary hover:!text-white"
                          }`}
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
      <SidebarFooter>
        <NavUser user={userData?.data} />
      </SidebarFooter>
    </Sidebar>
  );
}