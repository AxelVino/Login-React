"use client";
import { Button } from "@/components/ui/button/button.tsx";
import { Input } from "@/components/ui/input/input.tsx";
import { CardTitle } from "../card/card.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "../checkbox/checkbox.tsx";
import { useEffect, useState } from "react";
import { postLoggin } from "../../api/logginService.tsx";
import { tokenAuth } from "@/components/api/authService.tsx";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Incorrect password" }),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [_error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkAuth = async () => {
      const user = await tokenAuth();
      if (user) {
        navigate("/home", { replace: true });
      }
    };
    checkAuth();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError("");
    try {
      const { username } = await postLoggin(values.email, values.password);

      if (username) {
        navigate("/home", { replace: true });
      } else {
        setError("¡Invalid server response!");
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        setError("¡Incorrect email or password!");
      } else {
        setError("¡Login failed!");
      }
    }
  };
  return (
    <Form {...form}>
      <CardTitle className="text-5xl font-bold m-3 px-10">WELCOME </CardTitle>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-center "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="m-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  autoComplete="username"
                  required={true}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="m-1">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="********"
                  required={true}
                  {...field}
                />
              </FormControl>
              <div className="flex flex-row items-center gap-1 mb-4">
                <Checkbox
                  className="cursor-pointer"
                  id="checkbox"
                  name="checkbox"
                  onClick={() => setShowPassword(!showPassword)}
                ></Checkbox>
                <span>Show password</span>
              </div>
              <FormMessage
                className="mt-0 mb-7 justify-center"
                style={{
                  color: "var(--error-color)",
                }}
              >
                {_error}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className="flex flex-col justify-center items-center">
          <Button className="m-0 px-20 cursor-pointer" type="submit">
            Log in
          </Button>
          <span className="m-2">
            <a href="">Create account</a>
          </span>
        </div>
      </form>
    </Form>
  );
}
