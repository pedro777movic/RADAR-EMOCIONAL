import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground md:flex-row">
        <div className="flex gap-4">
          <Link href="#" className="transition-colors hover:text-primary">Termos de Uso</Link>
          <Link href="#" className="transition-colors hover:text-primary">Privacidade</Link>
        </div>
        <p>© 2024 Lunar Attraction. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
