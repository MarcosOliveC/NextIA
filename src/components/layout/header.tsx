'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/what-is-ai', label: 'O que é IA?' },
  { href: '/ai-in-the-workplace', label: 'IA no Trabalho' },
  { href: '/about', label: 'Sobre Nós' },
];

function NavLink({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void; }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'transition-colors hover:text-white pb-1 border-b-2',
        isActive
          ? 'text-white font-semibold border-primary'
          : 'text-neutral-300 border-transparent',
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    
    const SiteTitle = () => (
      <span className="font-bold font-headline text-lg text-white">
        Next<span className="text-primary">IA</span>
      </span>
    );
    
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-[#171810]">
            <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
                
                <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-10 w-auto text-white" />
                    <SiteTitle />
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="md:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-neutral-800">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Alternar Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#171810] border-r border-neutral-800 text-white">
                             <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                             <SheetDescription className="sr-only">
                               Navegue pelas diferentes seções do site NextIA.
                             </SheetDescription>
                            <Link href="/" className="flex items-center space-x-2 mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                                <Logo className="h-10 w-auto text-white" />
                                <SiteTitle />
                            </Link>
                            <nav className="grid gap-4">
                                {navLinks.map((link) => (
                                    <NavLink 
                                        key={link.href} 
                                        href={link.href} 
                                        className="text-lg"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}
