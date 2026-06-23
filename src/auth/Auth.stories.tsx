import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Fingerprint, Terminal } from "lucide-react";
import { AuthLayout, AuthCard, AuthError, AuthMethods } from "./Auth";
import { Field } from "../primitives/Field";
import { Input } from "../primitives/Input";
import { Button } from "../primitives/Button";

const meta: Meta = { title: "Auth/Login", parameters: { layout: "fullscreen" } };
export default meta;

export const Login: StoryObj = {
  render: () => (
    <AuthLayout brand={{ name: "Fort", tagline: "Authentication & identity", icon: <Fingerprint className="h-9 w-9" />, primary: "#7c3aed" }}>
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to your account"
        footer={<span>No account? <a className="text-violet-400">Create one</a></span>}
      >
        <AuthError>Invalid credentials</AuthError>
        <Field label="Email"><Input type="email" placeholder="user@sentra.local" /></Field>
        <Field label="Password"><Input type="password" /></Field>
        <Button className="w-full">Sign in</Button>
        <AuthMethods methods={[{ label: "Login as developer", icon: <Terminal className="h-4 w-4" />, onClick: () => {} }]} />
      </AuthCard>
    </AuthLayout>
  ),
};
