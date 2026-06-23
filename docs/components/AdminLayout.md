# AdminLayout

`AppLayout` plus a secondary sub-navigation tab bar under the header — for admin areas (Members / Roles / API Keys / Audit). Token-themed, RTL.

## Import
```tsx
import { AdminLayout } from "@togo-framework/ui";
```

## Usage
```tsx
<AdminLayout
  brand={{ name: "Admin", icon: <Cog/> }}
  nav={adminNav}
  headerTitle="Administration"
  subNav={[{ key: "members", label: "Members" }, { key: "roles", label: "Roles" }]}
  activeSubNav={tab}
  onSubNavChange={setTab}
>
  <Section />
</AdminLayout>
```

## Props
Extends `AppLayout` props (minus `children`) plus:
| Prop | Type | Description |
|---|---|---|
| subNav | `AdminSubNavItem[]` | Section tabs (`{ key, label, icon? }`). |
| activeSubNav | `string` | Active tab key. |
| onSubNavChange | `(key) => void` | Tab change handler. |
