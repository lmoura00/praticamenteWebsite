import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Cta() {
  // TODO: Replace with actual Google Play Store link when available
  const googlePlayLink = '#';

  return (
    <section id="download" className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-center px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center w-full">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pronto para começar a praticar?</h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Baixe agora a versão gratuita de teste do Praticamente no Google Play e dê o primeiro passo para o desenvolvimento de habilidades sociais do seu filho!
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
             <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
               <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Baixar no Google Play
              </a>
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
