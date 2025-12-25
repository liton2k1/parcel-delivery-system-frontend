import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import {
  ADMIN_DEFAULT_ROUTE,
  RECEIVER_DEFAULT_ROUTE,
  SENDER_DEFAULT_ROUTE,
} from "@/routes/constants";
import { ILogin } from "@/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const Login = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const navigate = useNavigate();
  const form = useForm<ILogin>({
    defaultValues: {
      email: "litonmia2k1@gmail.com",
      password: "12345678@Lm",
    },
  });
  const [login, { isLoading }] = useLoginMutation();

  // Auto-fill based on role
  const handleAutoFill = (role: "ADMIN" | "SENDER" | "RECEIVER") => {
    if (role === "ADMIN") {
      form.setValue("email", "litonmia2k1@gmail.com");
      form.setValue("password", "12345678@Lm");
    } else if (role === "SENDER") {
      form.setValue("email", "sender@gmail.com");
      form.setValue("password", "12345678@Lm");
    } else if (role === "RECEIVER") {
      form.setValue("email", "receiver@gmail.com");
      form.setValue("password", "12345678@Lm");
    }
  };

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      const res = await login(data).unwrap();

      const role = res?.data?.user?.role?.toUpperCase();
      if (role === "ADMIN" || role === "SUPER_ADMIN") {
        toast.success("Logged in successfully");
        navigate(ADMIN_DEFAULT_ROUTE, { replace: true });
        return;
      } else if (role === "SENDER") {
        toast.success("Logged in successfully");
        navigate(SENDER_DEFAULT_ROUTE, { replace: true });
        return;
      } else if (role === "RECEIVER") {
        toast.success("Logged in successfully");
        navigate(RECEIVER_DEFAULT_ROUTE, { replace: true });
        return;
      } else {
        toast.success("Logged in successfully");
        navigate("/", { replace: true });
        return;
      }
    } catch (err: unknown) {
      const error = err as { data?: { message?: string } };

      if (error?.data?.message === "User does not exist") {
        toast.error("User Not Found");
      }
      if (error?.data?.message === "Password does not match") {
        toast.error("Invalid Credentials");
      }
      if (error?.data?.message === "User is not verified") {
        toast.error("Your account is not verified");
        navigate("/verify", { state: { email: data.email } });
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>

      {/* Role Auto-Fill Buttons */}
      <div className="flex gap-2 justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleAutoFill("ADMIN")}
        >
          Admin
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleAutoFill("SENDER")}
        >
          Sender
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleAutoFill("RECEIVER")}
        >
          Receiver
        </Button>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Login;
