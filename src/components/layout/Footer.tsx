import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t w-full  flex items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-4 py-1">
				<div className="flex flex-col items-center gap-4 px-8">
					<p className="text-center text-sm leading-loose text-muted-foreground">
						© {currentYear} Praticamente. Todos os direitos reservados.
					</p>
				</div>
				<nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
					<Link
						href="/privacy-policy"
						className="text-sm text-muted-foreground hover:text-foreground"
					>
						Política de Privacidade
					</Link>
					<Link
						href="/delete-account"
						className="text-sm text-muted-foreground hover:text-foreground"
					>
						Apagar Conta
					</Link>
					{/* Add social media links if available */}
					{/*
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Facebook</a>
          */}
				</nav>
			</div>
		</footer>
	);
}
