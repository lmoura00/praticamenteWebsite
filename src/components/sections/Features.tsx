import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Users, Brain, Smile } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Baseado em ABA',
      description: 'Utiliza princípios comprovados da Análise do Comportamento Aplicada para um aprendizado eficaz.',
    },
    {
      icon: Zap,
      title: 'Simulações Interativas',
      description: 'Cenários da vida real para praticar habilidades sociais em um ambiente seguro e controlado.',
    },
    {
      icon: Users,
      title: 'Aprendizado Personalizado',
      description: 'Adapta-se às necessidades individuais de cada usuário, focando em áreas específicas de desenvolvimento.',
    },
    {
      icon: Smile,
      title: 'Engajador e Divertido',
      description: 'Torna o aprendizado de habilidades sociais uma experiência positiva e motivadora.',
    },
  ];

  return (
    <section id="features" className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-background">
      <div className="container flex flex-col items-center justify-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Principais Recursos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que escolher o Praticamente?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Oferecemos uma abordagem única e eficaz para o desenvolvimento de habilidades sociais, focada nas necessidades de crianças e adolescentes com TEA.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 mb-4 flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary inline-flex mb-3">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
