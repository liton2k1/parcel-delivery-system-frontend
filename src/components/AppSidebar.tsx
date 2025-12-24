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

  const navMain = getSidebarItems(userData?.data?.role);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/" className="flex items-center gap-2 mt-2">
          <div className="bg-primary rounded-full p-2">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">Easy Parcel</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location.pathname.endsWith(item.url);

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          to={item.url}
                          className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors ${
                            isActive &&
                            "bg-primary text-white hover:!bg-primary hover:!text-white"
                          }`}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
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
