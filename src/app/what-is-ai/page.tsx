import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BrainCircuit,
  Crown,
  Computer,
  FileText,
  MessageCircleQuestion,
  MessageSquareText,
  Network,
  Trophy,
} from 'lucide-react';

const timelineData = [
  {
    year: '1950',
    title: 'Teste de Turing',
    description: 'Alan Turing propõe um teste para avaliar se uma máquina pode exibir comportamento inteligente.',
    icon: MessageCircleQuestion,
  },
  {
    year: '1956',
    title: 'Início oficial da IA',
    description: 'Conferência da Dartmouth: O termo "Inteligência Artificial" é criado por John McCarthy.',
    icon: BrainCircuit,
  },
  {
    year: '1966',
    title: 'Primeiro chatbot: ELIZA',
    description: 'Desenvolvido por Joseph Weizenbaum, simula uma conversa com um psicoterapeuta.',
    icon: MessageSquareText,
  },
  {
    year: '1980',
    title: 'Sistemas especialistas',
    description: 'IAs são usadas para tomar decisões em áreas como medicina e engenharia.',
    icon: Computer,
  },
  {
    year: '1997',
    title: 'Deep Blue vence Kasparov',
    description: 'Computador da IBM derrota o campeão mundial de xadrez, Garry Kasparov.',
    icon: Crown,
  },
  {
    year: '2011',
    title: 'Watson vence no Jeopardy',
    description: 'IA da IBM derrota campeões humanos no famoso quiz show.',
    icon: Trophy,
  },
  {
    year: '2012',
    title: 'Revolução do deep learning',
    description: 'Redes neurais profundas mostram grandes avanços em reconhecimento de imagem.',
    icon: Network,
  },
  {
    year: '2022 em diante',
    title: 'IAs generativas',
    description: "Avanço de modelos como ChatGPT e DALL'E, que geram textos, imagens e muito mais.",
    icon: FileText,
  },
];


export default function WhatIsAiPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">O que é Inteligência Artificial?</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Uma jornada pelas origens, evolução e diversas aplicações da IA que estão moldando nosso mundo.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">A História da IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <Image
                src="https://upload.wikimedia.org/wikipedia/en/b/b5/Dartmouth-Moscow_2008.jpg"
                data-ai-hint="dartmouth workshop"
                width={600}
                height={400}
                alt="Símbolo do workshop de Dartmouth"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            <p className="text-muted-foreground">
              O conceito de inteligência artificial remonta à antiguidade, com mitos e histórias de seres artificiais dotados de inteligência ou consciência. O campo moderno da IA, no entanto, foi fundado em um workshop no Dartmouth College em 1956. As primeiras pesquisas nas décadas de 1950 e 60 exploraram problemas como raciocínio, representação do conhecimento e aprendizado de máquina.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Desenvolvimento e Marcos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <Image
                src="https://www.jornalintegracao.com/images/noticias/48981/781eddb393150963652b7f3d9ec63d97.jpg"
                data-ai-hint="humanoid robot"
                width={600}
                height={400}
                alt="Robô humanoide avançado"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            <p className="text-muted-foreground">
              O desenvolvimento da IA passou por várias ondas de progresso, muitas vezes seguidas por "invernos da IA", onde o financiamento e o interesse diminuíam. Marcos importantes incluem o desenvolvimento de sistemas especialistas na década de 1980, a vitória do Deep Blue sobre o campeão de xadrez Garry Kasparov em 1997 e a recente explosão de modelos de aprendizado profundo que revolucionaram campos como reconhecimento de imagem e processamento de linguagem natural.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Aplicações Atuais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Hoje, a IA está integrada em inúmeros aspectos de nossas vidas diárias. Ela alimenta motores de busca, sistemas de recomendação em plataformas de streaming, assistentes virtuais como Siri e Alexa, e aplicações complexas na área da saúde para diagnosticar doenças. Nas finanças, é usada para detecção de fraudes e negociação algorítmica. Os campos criativos também estão sendo transformados pela IA generativa que pode produzir texto, imagens e música.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="https://miro.medium.com/v2/resize:fit:764/1*GEiAspERbpwimKmUAiQcRQ@2x.jpeg"
                data-ai-hint="data visualization"
                width={600}
                height={400}
                alt="IA nas finanças"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
               <Image
                src="https://www.drgbrasil.com.br/wp-content/uploads/2021/04/inteligencia-artificial-na-saude-1-1024x683.jpg"
                data-ai-hint="medical technology"
                width={600}
                height={400}
                alt="IA na saúde"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 md:mt-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">
            Linha do tempo da Inteligência Artificial
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto py-4">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
            <div className="space-y-12">
              {timelineData.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-8 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
                  <div className="absolute left-0 top-[-2px]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                      <item.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-headline">{item.year} - {item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
