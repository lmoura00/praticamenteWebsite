import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AppPreview() {
  const appScreens = [
    { src: 'https://i.ibb.co/yz00JWC/Whats-App-Image-2025-05-03-at-13-16-41.jpg', alt: 'Tela inicial do aplicativo', hint: 'app home screen' },
    { src: 'https://i.ibb.co/VY5GYkRz/Whats-App-Image-2025-05-03-at-13-16-42-1.jpg', alt: 'Menu de seleção de atividades', hint: 'app activity selection menu' },
    { src: 'https://i.ibb.co/hJVQnhyX/Whats-App-Image-2025-05-03-at-13-16-42.jpg', alt: 'Exemplo de atividade de emparelhamento', hint: 'app matching activity game' },
    { src: 'https://i.ibb.co/mr6bV7dF/Whats-App-Image-2025-05-03-at-19-16-13-4.jpg', alt: 'Tela de feedback de atividade', hint: 'app activity feedback report' },
    { src: 'https://i.ibb.co/4gDZcwq4/Whats-App-Image-2025-05-03-at-19-16-13-3.jpg', alt: 'Configurações ou opções do aplicativo', hint: 'app settings options' },
    { src: 'https://i.ibb.co/3YGKQPz8/Whats-App-Image-2025-05-03-at-19-16-13-2.jpg', alt: 'Atividade de identificação de itens', hint: 'app item identification' },
    { src: 'https://i.ibb.co/j947fqQ5/Whats-App-Image-2025-05-03-at-19-16-13-1.jpg', alt: 'Exemplo de jogo de sequência', hint: 'app sequence game logic' },
    { src: 'https://i.ibb.co/Mk4KzVxt/Whats-App-Image-2025-05-03-at-19-16-13.jpg', alt: 'Tela de conclusão de nível ou recompensa', hint: 'app level completion rewards' },
    { src: 'https://i.ibb.co/ccN3QPWn/Whats-App-Image-2025-05-03-at-19-15-07-1.jpg', alt: 'Atividade de completar padrões', hint: 'app pattern completion puzzle' },
    { src: 'https://i.ibb.co/xt0gLdcK/Whats-App-Image-2025-05-03-at-19-15-07.jpg', alt: 'Outro exemplo de interface de atividade', hint: 'app activity interface example' },
  ];

  return (
    <section id="app-preview" className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-background">
      <div className="container flex flex-col items-center justify-center px-4 md:px-6 min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Veja o App em Ação</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Explore alguns dos jogos e atividades disponíveis no Praticamente, projetados para tornar o aprendizado divertido e eficaz.
            </p>
          </div>
        </div>
        {/* Grid centralizado */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {appScreens.map((screen, index) => (
              <Card key={index} className="shadow-lg overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300 flex flex-col items-center justify-center">
                <CardContent className="p-0 aspect-[9/16] relative w-full">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    data-ai-hint={screen.hint}
                    priority={index < 4}
                    unoptimized={true}
                  />
                </CardContent>
                <p className="text-center text-xs text-muted-foreground p-2">{screen.alt}</p>
              </Card>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          (Imagens ilustrativas da interface do aplicativo)
        </p>
      </div>
    </section>
  );
}
