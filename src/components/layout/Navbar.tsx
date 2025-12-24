import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useNavigate } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { authApi, useLogoutMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { Role } from "@/types/user";
import { Truck } from "lucide-react";
import ModeToggle from "../ModeToggle";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/track-parcel", label: "Track Parcel", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: Role.ADMIN },
  { href: "/super-admin", label: "Dashboard", role: Role.SUPER_ADMIN },
  { href: "/sender", label: "Dashboard", role: Role.SENDER },
  { href: "/receiver", label: "Dashboard", role: Role.RECEIVER },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { data } = useGetMeQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl transition-colors dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center px-5">
        {/* Mobile Header */}
        <div className="flex w-full items-center justify-between lg:hidden">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-br from-[#FF2056] to-[#FF4070] p-1">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              Easy Parcel
            </span>
          </div>

          {/* Mode */}
          <ModeToggle />

          {/* Hamburger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group border rounded-full"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="w-40 p-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg"
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col">
                  {navigationLinks.map((link, index) => (
                    <Fragment key={index}>
                      {(link.role === "PUBLIC" ||
                        link.role === data?.data?.role) && (
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            asChild
                            className="w-full px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                    </Fragment>
                  ))}
                  <div className=" w-full flex flex-col gap-2">
                    {data?.data?.email ? (
                      <Button onClick={handleLogout} variant="outline">
                        Logout
                      </Button>
                    ) : (
                      <Button asChild variant="outline">
                        <Link to="/login">Login</Link>
                      </Button>
                    )}
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>

        {/* Desktop Header*/}
        <div className="hidden w-full items-center justify-between lg:flex">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-br from-[#FF2056] to-[#FF4070] p-2">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Easy Parcel
            </span>
          </div>

          {/* Nav */}
          <NavigationMenu>
            <NavigationMenuList className="gap-3">
              {navigationLinks.map((link, index) => (
                <Fragment key={index}>
                  {(link.role === "PUBLIC" ||
                    link.role === data?.data?.role) && (
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className="py-1.5 font-medium text-gray-600 hover:text-[#FF2056] dark:text-gray-300 dark:hover:text-[#FF4070]"
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            {data?.data?.email ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="rounded-full"
              >
                Logout
              </Button>
            ) : (
              <Button
                asChild
                className="bg-gradient-to-r from-[#FF2056] to-[#FF4070] rounded-full text-white"
              >
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
