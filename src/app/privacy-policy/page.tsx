import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-4xl">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-center text-primary">Política de Privacidade – Praticamente App</CardTitle>
           <p className="text-sm text-center text-muted-foreground pt-2">Última atualização: 03/05/2025</p>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-muted-foreground space-y-6 mx-auto text-center">
          <p className="text-center">
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações dos usuários do aplicativo Praticamente App, disponível na Google Play Store.
          </p>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">1. Informações Coletadas</h2>
            <p>
              Coletamos as seguintes informações fornecidas pelo usuário no momento do cadastro:
            </p>
            <ul className="list-disc list-inside text-center">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>CPF</li>
              <li>Foto de perfil</li>
            </ul>
            <p>
              Essas informações são utilizadas exclusivamente para:
            </p>
             <ul className="list-disc list-inside text-center">
              <li>Criar e personalizar a conta do responsável e dos dependentes;</li>
              <li>Registrar a pontuação e o tempo de jogo de cada dependente;</li>
              <li>Enviar notificações relacionadas ao uso do app;</li>
              <li>Disponibilizar os dados para análise por um profissional autorizado pela família.</li>
            </ul>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">2. Dados de Dependentes</h2>
            <p>
              O responsável pode cadastrar dependentes no app. As informações de desempenho nos jogos (pontuação e tempo de execução) são registradas apenas para fins de acompanhamento e suporte.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">3. Compartilhamento de Dados</h2>
            <p>
              Os dados não são compartilhados com terceiros, exceto:
            </p>
             <ul className="list-disc list-inside text-center">
               <li>Com profissionais autorizados pelo próprio responsável, para análise dos dados do dependente;</li>
               <li>Quando exigido por lei ou autoridade competente.</li>
             </ul>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">4. Serviços de Terceiros</h2>
            <p>
              Utilizamos serviços da plataforma Firebase (do Google) para autenticação, banco de dados e armazenamento. O Firebase pode coletar dados técnicos e analíticos, conforme sua própria política de privacidade: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://firebase.google.com/support/privacy</a>
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">5. Segurança</h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perdas, destruição ou alteração.
            </p>
          </section>

           <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">6. Direitos do Usuário</h2>
            <p>
              Nos termos da LGPD, o usuário pode:
            </p>
             <ul className="list-disc list-inside text-center">
               <li>Acessar e corrigir seus dados;</li>
               <li>Solicitar a exclusão de seus dados e da conta;</li>
               <li>Revogar o consentimento para o uso de dados.</li>
             </ul>
             <p>
                Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:praticamenteapp@gmail.com" className="text-primary hover:underline">praticamenteapp@gmail.com</a>
             </p>
          </section>

           <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">7. Alterações nesta Política</h2>
            <p>
               Esta política pode ser atualizada periodicamente. Recomendamos que o usuário revise este documento regularmente. Caso ocorram mudanças significativas, notificaremos através do app ou por e-mail.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground">8. Contato</h2>
            <p>
              Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato:
            </p>
             <p>
                E-mail: <a href="mailto:praticamenteapp@gmail.com" className="text-primary hover:underline">praticamenteapp@gmail.com</a>
             </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
