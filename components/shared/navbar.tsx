import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../toggle-theme";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

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
    <nav className="p-2 flex items-center justify-between sticky top-0 left-0 z-10 backdrop-blur-xs">
<Image src={'/next.svg'} width={100} height={100} alt="navigation logo" className="dark:invert"/>
      <NavigationMenu >
        <NavigationMenuList>
          {navLink.map((nav: navType) => (
            <NavigationMenuLink key={nav.name} href={nav.url}>
              {nav.name}
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
        <div>
          <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        <ModeToggle />

        </div>
    </nav>
  );
}
