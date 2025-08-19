import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Hero() {
  // TODO: Replace with actual Google Play Store link when available
  const googlePlayLink = '#';

  return (
    <section className="w-full flex items-center justify-center min-h-[70vh] text-center py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container flex flex-col items-center justify-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center space-y-4 w-full">
            <div className="space-y-2 w-full">
              <h1 className="text-3xl font-bold text-center tracking-tighter sm:text-5xl xl:text-6xl/none text-primary w-full">
                Desenvolva Habilidades Sociais com Praticamente
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto w-full">
                Um aplicativo inovador baseado em ABA para ajudar crianças e adolescentes com TEA a praticar interações sociais de forma personalizada e interativa.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center w-full">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar no Google Play (Grátis para Teste)
                </a>
              </Button>
              {/* Optional secondary button */}
              {/* <Button variant="outline" size="lg">
                Saiba Mais
              </Button> */}
            </div>
          </div>
          <Image
            src="https://picsum.photos/seed/heroimage/600/400"
            width={600}
            height={400}
            alt="Hero Image representing social interaction or ABA therapy"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-lg"
            data-ai-hint="children interacting social skills autism therapy"
            priority
          />
        </div>
      </div>
    </section>
  );
}
