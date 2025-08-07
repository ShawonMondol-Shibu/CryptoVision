import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    // const navLink = 
  return (
  <NavigationMenu>
    
  <NavigationMenuList>
    {
        Array.from({length:5}).map((_,i)=><NavigationMenuItem key={i}>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>)
    }
    
  </NavigationMenuList>
</NavigationMenu>
  )
}