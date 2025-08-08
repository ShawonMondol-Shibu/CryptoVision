import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../toggle-theme";

interface navType {
  name: string;
  url: string;
}

export function Navbar() {
  const navLink = [
    { name: "Home", url: "#" },
    { name: "Coins", url: "#" },
    { name: "About", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <NavigationMenu className="p-2 flex items-center justify-between">
      <NavigationMenuList>
        {navLink.map((nav: navType) => (
          <NavigationMenuLink key={nav.name} href={nav.url}>{nav.name}</NavigationMenuLink>
        ))}
      </NavigationMenuList>
      <ModeToggle/>
    </NavigationMenu>
  );
}
