"use client";

import Link from "next/link";
import { Search, Film, Tv } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-provider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Film className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">StreamVibe</span>
        </Link>
        <nav className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden sm:flex items-center relative">
            <input
              type="text"
              placeholder="Search movies & TV..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-9 w-[200px] rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button type="submit" size="icon" variant="ghost" className="absolute right-0">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <Link href="/search">
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
              }
