# Form

`react-hook-form` field wrappers that wire label/control/description/message ids and error state together. Pure structure — bring your own validation (e.g. zod).

## Import
```tsx
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage,
  Input, Button,
} from "@togo-framework/ui";
```

## Usage
```tsx
import { useForm } from "react-hook-form";

function ProfileForm() {
  const form = useForm({ defaultValues: { email: "" } });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription>We'll never share it.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
```

## Parts
| Part | Role |
|---|---|
| `Form` | Alias of RHF `FormProvider` — wrap with `{...form}`. |
| `FormField` | Wraps RHF `Controller`; takes `control`, `name`, `render`. |
| `FormItem` | Field container; generates the shared `id` context. |
| `FormLabel` | `Label` wired to the control via `htmlFor`; turns `text-destructive` on error. |
| `FormControl` | `Slot` that injects `id` + `aria-describedby` + `aria-invalid` onto your input. |
| `FormDescription` | Helper text (`aria-describedby`). |
| `FormMessage` | Renders the field's validation error (or `children`); hidden when empty. |
| `useFormField` | Hook exposing `{ id, name, error, formItemId, … }` inside a field. |

## Accessibility, RTL & theming
- a11y is automatic: `FormControl` links the input to its label, description, and message and sets `aria-invalid` on error.
- Error text uses `text-destructive`; everything themes via tokens and is RTL-safe.

## Do / Don't
- ✅ Put exactly one control inside each `FormControl` (it's a `Slot`).
- ✅ Spread `{...field}` onto the input so RHF controls it.
- ❌ Don't set your own `id`/`aria-*` on the control — `FormControl` owns them.
