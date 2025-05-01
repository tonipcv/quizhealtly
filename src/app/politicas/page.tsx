"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyPT() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-24 sm:w-32">
            <Image 
              src="/logo.png" 
              alt="VUOM Logo" 
              width={120} 
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-900 font-medium">Português</span>
            <span className="text-gray-300">|</span>
            <Link href="/politicas-us" className="text-sm text-gray-500 hover:text-gray-900">
              English
            </Link>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
          <p className="text-gray-500">Última atualização: 19 de junho de 2024</p>
        </div>

        {/* Content */}
        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Introdução</h2>
            <p>
              VUOM™ ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso site, aplicativo móvel e serviços relacionados (coletivamente, o "Serviço").
            </p>
            <p>
              Por favor, leia esta Política de Privacidade cuidadosamente. Ao acessar ou usar nosso Serviço, você reconhece que leu, entendeu e concorda em estar vinculado a todos os termos desta Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Informações que Coletamos</h2>
            <p>Podemos coletar vários tipos de informações de e sobre os usuários de nosso Serviço, incluindo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Informações Pessoais:</strong> Isso inclui endereço de e-mail, nome, número de telefone, endereço e outras informações que você fornece ao se registrar em nosso Serviço.</li>
              <li><strong>Dados de Uso:</strong> Informações sobre como você acessa e usa nosso Serviço, incluindo tipo de navegador, horários de acesso, páginas visualizadas e o tempo gasto nessas páginas.</li>
              <li><strong>Informações do Dispositivo:</strong> Informações sobre seu dispositivo, incluindo endereço IP, tipo de dispositivo, sistema operacional e tipo de navegador.</li>
              <li><strong>Respostas a Questionários:</strong> Respostas que você fornece para personalizar sua experiência com o protocolo VUOM™.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Como Usamos Suas Informações</h2>
            <p>Usamos as informações que coletamos para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer, manter e melhorar nosso Serviço</li>
              <li>Processar transações e enviar informações relacionadas</li>
              <li>Personalizar sua experiência com o protocolo VUOM™</li>
              <li>Responder a seus comentários, perguntas e solicitações</li>
              <li>Enviar avisos técnicos, atualizações, alertas de segurança e mensagens de suporte</li>
              <li>Comunicar-se com você sobre produtos, serviços, ofertas e eventos</li>
              <li>Monitorar e analisar tendências, uso e atividades relacionadas ao nosso Serviço</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Divulgação de Suas Informações</h2>
            <p>Podemos divulgar informações que coletamos nas seguintes circunstâncias:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Para Provedores de Serviços:</strong> Podemos compartilhar suas informações com fornecedores terceirizados, provedores de serviços e outros terceiros que realizam serviços em nosso nome.</li>
              <li><strong>Para Transferências de Negócios:</strong> Podemos compartilhar suas informações em conexão com qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de todo ou parte de nosso negócio para outra empresa.</li>
              <li><strong>Por Razões Legais:</strong> Podemos divulgar suas informações se exigido por lei ou em resposta a solicitações válidas de autoridades públicas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Segurança de Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para proteger a segurança de suas informações pessoais. No entanto, esteja ciente de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro e não podemos garantir a segurança absoluta de suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Suas Escolhas</h2>
            <p>Você tem várias escolhas em relação às informações que nos fornece:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Informações da Conta:</strong> Você pode atualizar, corrigir ou excluir suas informações de conta a qualquer momento, fazendo login em sua conta ou entrando em contato conosco.</li>
              <li><strong>Comunicações de Marketing:</strong> Você pode optar por não receber comunicações de marketing de nós, seguindo as instruções de cancelamento de inscrição incluídas em nossos e-mails.</li>
              <li><strong>Cookies:</strong> A maioria dos navegadores da web está configurada para aceitar cookies por padrão. Você pode optar por configurar seu navegador para recusar todos os cookies ou para alertá-lo quando os cookies estão sendo enviados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Sites de Terceiros</h2>
            <p>
              Nosso Serviço pode conter links para sites de terceiros. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites ou serviços de terceiros. Recomendamos que você revise a política de privacidade de cada site que visitar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Privacidade das Crianças</h2>
            <p>
              Nosso Serviço não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você é pai ou responsável e está ciente de que seu filho nos forneceu informações pessoais, entre em contato conosco.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Alterações nesta Política de Privacidade</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações, publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização" no topo desta página. É aconselhável revisar esta Política de Privacidade periodicamente para verificar quaisquer alterações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Dados do Facebook</h2>
            <p>
              Nossos questionários e avaliações não são patrocinados, endossados ou administrados pelo Facebook/Meta. Quando você fornece informações através de nossos questionários, você entende que está fornecendo informações diretamente para VUOM™ e não para o Facebook/Meta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Entre em Contato Conosco</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em:
            </p>
            <p>
              <strong>Email:</strong> support@vuom.life
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} VUOM™. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
} 