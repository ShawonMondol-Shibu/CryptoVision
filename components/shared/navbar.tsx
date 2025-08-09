import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../toggle-theme";
import Image from "next/image";
import Link from "next/link";

interface navType {
  name: string;
  url: string;
}

export function Navbar() {
  const navLink = [
    { name: "Home", url: "/" },
    { name: "Coins", url: "/coins" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <nav className="px-4 py-2 flex gap-2 items-center justify-between sticky top-0 left-0 z-10 backdrop-blur-xs">
      <Image
        src={"/logo/logo.png"}
        width={100}
        height={100}
        alt="navigation logo"
        className="dark:invert"
      />
      <NavigationMenu>
        <NavigationMenuList>
          {navLink.map((nav: navType) => (
            <NavigationMenuLink key={nav.name} asChild>
              <Link href={nav.url}>
              
              {nav.name}
              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-5">
        <ModeToggle />
      </div>
    </nav>
  );
}
