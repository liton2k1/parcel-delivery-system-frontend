import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Outlet, useNavigate } from "react-router";
import { AppSidebar } from "../AppSidebar";
import ModeToggle from "../ModeToggle";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { authApi } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { Badge } from "../ui/badge";
import { getNameInitials } from "@/utils/getNameInitials";

export default function DashboardLayout() {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: userData } = useGetMeQuery(undefined);

  const user = userData?.data;

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      dispatch(authApi.util.resetApiState());
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to log out");
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 z-50 bg-background">
          <SidebarTrigger className="-ml-1" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          <div className="ml-auto flex items-center gap-2">
            {/* Theme Toggle */}
            <ModeToggle />

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-muted/80 transition focus:outline-none"
                  aria-label="User menu"
                >
                  <User className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 p-2">
                {/* User Info */}
                <div className="flex items-start gap-3 px-2 py-2">
                  {/* Avatar */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {getNameInitials(user?.name)}
                  </div>

                  <div className="flex flex-col space-y-0.5">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold leading-none">
                        {user?.name || "User"}
                      </p>
                      <Badge
                        variant="secondary"
                        className="text-[10px] rounded-full px-2 py-0"
                      >
                        {user?.role}
                      </Badge>
                    </div>

                    <p className="text-xs text-muted-foreground truncate max-w-[180px]">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer text-red-600 focus:text-red-600 flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
