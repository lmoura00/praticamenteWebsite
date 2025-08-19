import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Pricing() {
    // TODO: Replace with actual Google Play Store link when available
    const googlePlayLink = '#';

  return (
    <section id="pricing" className="w-full bg-secondary/50 min-h-screen flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Nossos Planos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Acessível para Todos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Comece gratuitamente e explore os recursos básicos. Em breve, ofereceremos uma versão premium com ainda mais funcionalidades.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-12">
          {/* Free Plan Card - Centered Content */}
          <Card className="flex flex-col justify-between shadow-lg border-primary border-2 text-center items-center p-6">
            <CardHeader className="pb-4 items-center">
              <CardTitle className="text-2xl font-bold text-primary">Versão Gratuita (Teste)</CardTitle>
              <CardDescription className="text-muted-foreground">
                Ideal para conhecer o aplicativo e experimentar os recursos essenciais. Disponível para teste no Google Play.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 items-center">
               <h3 className="text-4xl font-bold">Grátis</h3>
              <ul className="grid gap-2 text-muted-foreground text-left mx-auto w-fit">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  Acesso a simulações básicas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  Recursos introdutórios de ABA
                </li>
                 <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  Perfeito para avaliação inicial
                </li>
              </ul>
            </CardContent>
            <CardFooter className="w-full">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                    Baixar Versão de Teste
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan Card - Centered Content */}
          <Card className="flex flex-col justify-between border-dashed border-muted-foreground/50 text-center items-center p-6">
            <CardHeader className="pb-4 items-center">
              <CardTitle className="text-2xl font-bold">Versão Premium</CardTitle>
              <CardDescription className="text-muted-foreground">
                 Em breve! Desbloqueie todo o potencial do Praticamente com recursos avançados e conteúdo exclusivo.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 items-center">
                 <h3 className="text-4xl font-bold text-muted-foreground">Em Breve</h3>
               <ul className="grid gap-2 text-muted-foreground text-left mx-auto w-fit">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                  Todas as simulações interativas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                  Relatórios de progresso detalhados
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                  Personalização avançada
                </li>
                 <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                  Suporte prioritário
                </li>
              </ul>
            </CardContent>
            <CardFooter className="w-full">
              <Button className="w-full" variant="outline" disabled>
                Disponível em Breve
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
