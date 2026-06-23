# NavigationMenu

An accessible top navigation menu (Radix) with dropdown content panels.

## Import
```tsx
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from "@togo-framework/ui";
```

## Usage
```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/a">Alpha</NavigationMenuLink>
        <NavigationMenuLink href="/b">Beta</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Parts
| Component | Role |
|---|---|
| `NavigationMenu` | Root. |
| `NavigationMenuList` / `NavigationMenuItem` | Items container + item. |
| `NavigationMenuTrigger` | Opens a content panel. |
| `NavigationMenuContent` | Dropdown panel. |
| `NavigationMenuLink` | Navigable link. |

## Accessibility, RTL & theming
- Full keyboard nav + focus management (Radix); active indicator animates.
- Panels use `bg-popover` tokens; positioning flips under `dir="rtl"`.

## Do / Don't
- ✅ Use for site/top navigation.
- ❌ For action menus use `DropdownMenu`; for app shell use `Sidebar`/`AppSidebar`.
