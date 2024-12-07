"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";

const SignUpForm = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleVerifyEmail = async (e: React.FormEvent) => {};

  return isVerifying ? (
    <div className="flex flex-col items-start w-full text-start gap-y-6 py-8 px-0.5">
      <h2 className="text-2xl font-semibold">Verify your account</h2>
      <p className="text-sm text-muted-foreground">
        To continue, please enter the 6-digit verification code we just sent to{" "}
        {email}.
      </p>
      <form onSubmit={handleVerifyEmail} className="w-full">
        <div className="space-y-2 w-full pl-0.5">
          <Label htmlFor="code">Verification code</Label>
          <InputOTP
            id="code"
            name="code"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e)}
            className="pt-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="mt-4 w-full">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <LoaderIcon className="w-5 h-5 animate-spin" />
            ) : (
              "Verify code"
            )}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Didn&apos;t receive the code?{" "}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();

              toast.success("Verification code resent to your email.");
            }}
            className="text-primary"
          >
            Resend code
          </Link>
        </p>
      </form>
    </div>
  ) : (
    <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
      <h2 className="text-2xl font-semibold">Create an account</h2>

      <form onSubmit={handleSignUp} className="w-full">
        <div className="space-y-2 w-full">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full focus-visible:border-foreground"
          />
        </div>
        <div className="mt-4 space-y-2 w-full">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full focus-visible:border-foreground"
          />
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative w-full">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full focus-visible:border-foreground"
            />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="absolute top-1 right-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        <div className="mt-4 w-full">
          <Button type="submit" className="w-full">
            {isUpdating ? (
              <LoaderIcon className="w-5 h-5 animate-spin" />
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
