import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/privacy-policy', label: 'Privacidade' },
    { href: '/delete-account', label: 'Apagar Conta' },
    // TODO: Add links to specific app sections or features once defined
    // { href: '/simulations', label: 'Simulações' },
    // { href: '/progress', label: 'Progresso' },
    // { href: '/profile', label: 'Perfil' },
  ];

  // TODO: Replace with actual Google Play Store link when available
  const googlePlayLink = '#';
  const logoUrl = 'https://i.ibb.co/nMcyvqn6/adaptive-icon.png'; // New logo URL

  return (
    <header className="sticky top-0 z-150border-t w-full  flex items-center justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" m-15 container flex h-14 items-center">
        {/* Desktop: Left-aligned Logo */}
        <div className="mr-4 hidden md:flex items-center flex-shrink-0"> {/* Added flex-shrink-0 */}
          <Link href="/" className="flex items-center space-x-2">
             <Image
                src={logoUrl}
                alt="Praticamente Logo"
                width={32}
                height={32}
                className="rounded-md"
             />
            <span className="font-bold">Praticamente</span>
          </Link>
        </div>

        {/* Mobile Menu Button (Left) and Centered Logo */}
        <div className="md:hidden flex items-center flex-1">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image
                    src={logoUrl}
                    alt="Praticamente Logo"
                    width={32}
                    height={32}
                    className="rounded-md"
                />
                <span className="font-bold text-lg">Praticamente</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">Baixar App (Teste)</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          {/* Mobile Logo/Title centered */}
          <div className="flex-1 flex justify-center">
             <Link href="/" className="flex items-center space-x-2">
                 <Image
                    src={logoUrl}
                    alt="Praticamente Logo"
                    width={32}
                    height={32}
                    className="rounded-md"
                 />
                 <span className="font-bold md:hidden">Praticamente</span>
             </Link>
          </div>
          {/* Dummy div to balance the flex layout, ensures logo is centered */}
          <div className="w-10"></div> {/* Width should roughly match the Menu button */}
        </div>


        {/* Desktop Navigation - Centered */}
        {/* Use justify-center on the container and mx-auto on the nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Download Button (Right) */}
        <div className="hidden md:flex items-center justify-end ml-4 flex-shrink-0"> {/* Added flex-shrink-0 */}
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">Baixar App (Teste)</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
