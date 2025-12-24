/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import {
  useGetMeQuery,
  useUpdateUserByIdMutation,
} from "@/redux/features/user/userApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  CheckCircle2,
  XCircle,
  Edit,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { getNameInitials } from "@/utils/getNameInitials";

const Profile = () => {
  const { data: userData, isLoading, isError } = useGetMeQuery(undefined);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserByIdMutation();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      defaultAddress: "",
    },
  });

  const profile = userData?.data;

  useEffect(() => {
    if (profile && isOpen) {
      form.reset({
        name: profile.name || "",
        phone: profile.phone || "",
        defaultAddress: profile.defaultAddress || "",
      });
    }
  }, [isOpen, profile, form]);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await updateUser({
        id: profile._id,
        data,
      }).unwrap();

      if (res.success) {
        toast.success("Profile updated successfully!");
        setIsOpen(false);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update profile");
    }
  };

  const formatDate = (dateString: string | number | Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return <Loading message="Loading user data..." />;
  }

  if (isError || !userData?.success) {
    return <Error />;
  }

  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-gray-500 mt-1">
            Manage your account information and settings
          </p>
        </div>

        {/* Edit Profile Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenDialog} className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Update your profile information. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="defaultAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    disabled={isUpdating}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Profile Header Card */}
      <Card className="shadow-none mb-5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                {getNameInitials(profile?.name)}
              </div>
              <div>
                <CardTitle className="text-2xl">{profile.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-4 w-4" />
                    {profile.email}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <User className="h-4 w-4" />
                    {profile.role}
                  </div>
                </CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge
                className={
                  profile.isActive === "ACTIVE"
                    ? "bg-green-600 rounded-full"
                    : "bg-red-600 rounded-full"
                }
              >
                {profile.isActive}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Profile Details Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information Card */}
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Full Name</div>
              <div className="mt-1 text-base">{profile.name}</div>
            </div>
            <Separator />
            <div>
              <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </div>
              <div className="mt-1 text-base">
                {profile.phone || "Not provided"}
              </div>
            </div>
            <Separator />
            <div>
              <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Default Address
              </div>
              <div className="mt-1 text-base">
                {profile.defaultAddress || "Not provided"}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Status Card */}
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Account Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-500">
                Account Status
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    profile.isActive === "ACTIVE"
                      ? "bg-green-600"
                      : "bg-gray-400"
                  }`}
                ></span>
                <span className="text-base">{profile.isActive}</span>
              </div>
            </div>
            <Separator />
            <div>
              <div className="text-sm font-medium text-gray-500">
                Verification Status
              </div>
              <div className="mt-1 flex items-center gap-2">
                {profile.isVerified ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-base">Verified</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="text-base">Not Verified</span>
                  </>
                )}
              </div>
            </div>
            <Separator />
            <div>
              <div className="text-sm font-medium text-gray-500">Role</div>
              <div className="flex items-center gap-2 mt-1">
                <User className="h-4 w-4" />
                {profile.role}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Timeline Card */}
      <Card className="shadow-none mt-5">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Account Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium text-gray-500">
              Account Created
            </div>
            <div className="mt-1 text-base">
              {formatDate(profile.createdAt)}
            </div>
          </div>
          <Separator />
          <div>
            <div className="text-sm font-medium text-gray-500">
              Last Updated
            </div>
            <div className="mt-1 text-base">
              {formatDate(profile.updatedAt)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
