import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="mr-8 flex items-center space-x-2">
            <span className="font-bold text-xl text-primary">DeliverEase</span>
          </a>
        </Link>
        
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/">
            <a className={location === "/" ? "text-primary" : "text-foreground/60 hover:text-foreground"}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={location === "/about" ? "text-primary" : "text-foreground/60 hover:text-foreground"}>
              About
            </a>
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
