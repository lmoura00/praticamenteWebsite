'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, Terminal } from 'lucide-react';

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletionRequestEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    if (confirmation.toLowerCase() !== 'apagar minha conta') {
      setMessage({ type: 'error', text: 'Por favor, digite "apagar minha conta" para confirmar.' });
      setIsLoading(false);
      return;
    }

    if (!email) {
        setMessage({ type: 'error', text: 'Por favor, insira o e-mail associado à sua conta.' });
        setIsLoading(false);
        return;
    }

    const subject = encodeURIComponent('Solicitação de Exclusão de Conta');
    const body = encodeURIComponent(`Por favor, desejo solicitar a exclusão da minha conta Praticamente associada ao e-mail: ${email}.\n\nConfirmação: "apagar minha conta"`);
    const mailtoLink = `mailto:praticamenteapp@gmail.com?subject=${subject}&body=${body}`;

    try {
        window.location.href = mailtoLink;
        setMessage({ type: 'success', text: 'Seu cliente de e-mail deve abrir. Envie o e-mail para completar sua solicitação.' });
        setEmail('');
        setConfirmation('');
    } catch (error) {
        console.error("Error opening mail client:", error);
        setMessage({ type: 'error', text: 'Não foi possível abrir seu cliente de e-mail. Por favor, envie um e-mail manualmente para praticamenteapp@gmail.com com o assunto "Solicitação de Exclusão de Conta".' });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-lg">
      <Card className="shadow-lg text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-destructive">Apagar Conta</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Para solicitar a exclusão da sua conta e dados associados, por favor preencha o formulário abaixo. Uma solicitação por e-mail será preparada.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleDeletionRequestEmail} className="space-y-4 max-w-sm mx-auto text-center">
             <div className="space-y-2">
              <Label htmlFor="email" className="text-center">Email da Conta a ser Apagada</Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmation" className="text-center">Confirmação</Label>
              <p className="text-sm text-muted-foreground text-center">
                Para confirmar, digite exatamente: <strong className="text-foreground">apagar minha conta</strong>
              </p>
              <Input
                id="confirmation"
                type="text"
                placeholder="apagar minha conta"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                required
                disabled={isLoading}
                className="border-destructive focus:border-destructive focus:ring-destructive"
              />
            </div>
             {message && (
              <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className="text-center">
                <Terminal className="h-4 w-4" />
                <AlertTitle>{message.type === 'error' ? 'Erro' : 'Sucesso'}</AlertTitle>
                <AlertDescription>
                  {message.text}
                </AlertDescription>
              </Alert>
            )}
            <Button type="submit" variant="destructive" className="w-full" disabled={isLoading}>
              {isLoading ? 'Processando...' : (
                <>
                  <Mail className="mr-2 h-4 w-4" /> Solicitar Exclusão por Email
                </>
              )}
            </Button>
          </form>
        </CardContent>
         <CardFooter className="text-center text-sm text-muted-foreground flex-col space-y-2">
            <p>Ao clicar no botão, seu aplicativo de e-mail será aberto para que você possa enviar a solicitação de exclusão.</p>
            <p>Se tiver dificuldades, entre em contato com nosso suporte em <a href="mailto:praticamenteapp@gmail.com" className="text-primary hover:underline">praticamenteapp@gmail.com</a>.</p>
         </CardFooter>
      </Card>
    </div>
  );
}
