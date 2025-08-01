import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Construído para a conclusão do curso de TI no IFBA Barreiras.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NextIA. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
}
