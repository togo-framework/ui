import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FeedbackWidget, type FeedbackItem } from "../components/feedback";
import { Card, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const meta: Meta<typeof FeedbackWidget> = {
  title: "Components/Feedback Widget",
  component: FeedbackWidget,
  parameters: {
    layout: "fullscreen",
    fullBleed: true,
    docs: {
      story: { inline: false, height: "600px" },
      description: {
        component:
          "FeedbackWidget — a self-contained feedback tool (no external SDK). The floating " +
          "button opens a panel; **Pick an element** lets you click any element on the page to " +
          "attach it to the report; submissions go to a List tab. Bilingual EN/AR, token-themed.",
      },
    },
  },
};
export default meta;

function Demo({ language }: { language: "en" | "ar" }) {
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const ar = language === "ar";
  return (
    <div dir={ar ? "rtl" : "ltr"} className="min-h-screen bg-background p-8 text-foreground">
      <h1 className="mb-1 text-2xl font-semibold">{ar ? "صفحة تجريبية" : "Sample page"}</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        {ar
          ? "افتح زر الملاحظات (في الزاوية) ← «اختر عنصرًا» ← انقر أي عنصر هنا لإرفاقه."
          : 'Open the feedback button (corner) → "Pick an element" → click any element here to attach it.'}
      </p>
      <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
        <Card padded><CardTitle>{ar ? "الإيرادات" : "Revenue"}</CardTitle><p className="mt-2 text-3xl font-bold">$24,500</p></Card>
        <Card padded><CardTitle>{ar ? "المستخدمون" : "Users"}</CardTitle><p className="mt-2 text-3xl font-bold">1,284</p></Card>
      </div>
      <div className="mt-4 flex gap-2">
        <Button>{ar ? "إجراء رئيسي" : "Primary action"}</Button>
        <Button variant="outline">{ar ? "ثانوي" : "Secondary"}</Button>
      </div>

      <FeedbackWidget
        language={language}
        items={items}
        onSubmit={(i) => setItems((p) => [{ ...i, id: String(p.length + 1) + Date.now(), createdAt: "now" }, ...p])}
        onDelete={(id) => setItems((p) => p.filter((x) => x.id !== id))}
      />
    </div>
  );
}

export const Default: StoryObj = { render: () => <Demo language="en" /> };
export const ArabicRTL: StoryObj = { name: "Arabic / RTL", render: () => <Demo language="ar" /> };
