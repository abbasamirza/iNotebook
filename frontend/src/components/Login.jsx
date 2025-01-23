import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form";
import ApiHandler from "../classes/ApiHandler";
import apiRoute from "../constants/apiRoutes";
import useAlert from "../hooks/useAlert";
import AlertWrapper, { errorAlert, successAlert } from "./Alert";
import { createSession, unsuccessfulAPIResult } from "../utils/utils";
import { LoaderCircle, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import path from "../constants/paths";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must not exceed 100 characters" }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const result = await ApiHandler.fetch({
      route: apiRoute.login,
      params: data,
    });

    if (unsuccessfulAPIResult(result)) {
      showAlert(errorAlert({ description: result.error }));
    } else {
      showAlert(successAlert({ description: "Logged in successfully" }));
      createSession(result.data.user, result.data.authToken);
      navigate(path.notes);
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="email"
                    {...field}
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
                <FormLabel required>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AlertWrapper />
          <Button className="w-full" size="lg" type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Log In"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Login;
