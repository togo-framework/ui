"use client";

import * as React from "react";
import { ShieldCheck, Monitor, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { StatusBadge } from "../status/StatusBadge";

export interface ProfileSession {
  id: string;
  device: string;
  location?: string;
  lastActive: string;
  current?: boolean;
}

export interface ProfileViewProps {
  user: { name?: string; email: string; avatarUrl?: string; roles?: string[] };
  language?: "en" | "ar";
  sessions?: ProfileSession[];
  twoFactorEnabled?: boolean;
  onSave?: (data: { name: string; email: string }) => void;
  onChangePassword?: () => void;
  onToggle2FA?: (enabled: boolean) => void;
  onRevokeSession?: (id: string) => void;
}

const T = {
  en: {
    account: "Account", security: "Security", sessions: "Sessions",
    name: "Name", email: "Email", save: "Save changes",
    password: "Password", changePassword: "Change password", twoFA: "Two-factor authentication",
    twoFADesc: "Add an extra layer of security to your account.",
    current: "This device", revoke: "Revoke", active: "Active sessions",
  },
  ar: {
    account: "الحساب", security: "الأمان", sessions: "الجلسات",
    name: "الاسم", email: "البريد الإلكتروني", save: "حفظ التغييرات",
    password: "كلمة المرور", changePassword: "تغيير كلمة المرور", twoFA: "المصادقة الثنائية",
    twoFADesc: "أضف طبقة حماية إضافية لحسابك.",
    current: "هذا الجهاز", revoke: "إنهاء", active: "الجلسات النشطة",
  },
};

/** ProfileView — a presentational account/security/sessions profile screen built from the
 * kit primitives. Product-agnostic: pass user data + callbacks. RTL + bilingual via
 * `language`; themed via tokens (dark/light). */
export function ProfileView({
  user, language = "en", sessions = [], twoFactorEnabled = false,
  onSave, onChangePassword, onToggle2FA, onRevokeSession,
}: ProfileViewProps) {
  const t = T[language];
  const [name, setName] = React.useState(user.name ?? "");
  const [email, setEmail] = React.useState(user.email);
  const initial = (user.name || user.email || "?").charAt(0).toUpperCase();

  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <Avatar className="h-16 w-16">
          {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={user.name ?? user.email} />}
          <AvatarFallback className="text-lg">{initial}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold">{user.name || user.email}</h1>
          <p className="truncate text-sm text-muted-foreground">{user.email}</p>
          {user.roles && user.roles.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {user.roles.map((r) => <StatusBadge key={r} tone="info">{r}</StatusBadge>)}
            </div>
          )}
        </div>
      </div>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">{t.account}</TabsTrigger>
          <TabsTrigger value="security">{t.security}</TabsTrigger>
          <TabsTrigger value="sessions">{t.sessions}</TabsTrigger>
        </TabsList>

        {/* Account */}
        <TabsContent value="account">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-1.5">
                <Label htmlFor="pv-name">{t.name}</Label>
                <Input id="pv-name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pv-email">{t.email}</Label>
                <Input id="pv-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <Button onClick={() => onSave?.({ name, email })}>{t.save}</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security">
          <Card>
            <CardContent className="space-y-5 pt-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">{t.password}</p>
                </div>
                <Button variant="outline" onClick={onChangePassword}>{t.changePassword}</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{t.twoFA}</p>
                    <p className="text-sm text-muted-foreground">{t.twoFADesc}</p>
                  </div>
                </div>
                <Switch checked={twoFactorEnabled} onCheckedChange={(v) => onToggle2FA?.(v)} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sessions */}
        <TabsContent value="sessions">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.active}</CardTitle>
              <CardDescription>{sessions.length}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {sessions.map((s) => (
                <div key={s.id} className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
                  <div className="flex items-center gap-3">
                    <Monitor className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{s.device}{s.current && <StatusBadge tone="success" className="ms-2">{t.current}</StatusBadge>}</p>
                      <p className="text-xs text-muted-foreground">{[s.location, s.lastActive].filter(Boolean).join(" · ")}</p>
                    </div>
                  </div>
                  {!s.current && (
                    <Button variant="ghost" size="sm" onClick={() => onRevokeSession?.(s.id)}>
                      <LogOut className="h-4 w-4" /> {t.revoke}
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
