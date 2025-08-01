import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-4 flex flex-col justify-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm self-start">Sobre Nós</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Nossa Missão</h1>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Somos um grupo de estudantes dedicados do Instituto Federal da Bahia (IFBA), campus Barreiras. Este site, NextIA, representa a culminação de nossos estudos para a conclusão do nosso curso de Informática.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Nosso objetivo é desmistificar a Inteligência Artificial e fornecer informações claras e acessíveis sobre seu papel em nosso mundo, especialmente no ambiente de trabalho. Acreditamos que entender a IA é o primeiro passo para aproveitar seu potencial para o bem, ao mesmo tempo em que mitigamos seus riscos. Este projeto é nossa contribuição para esse esforço educacional.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Vis%C3%A3o_a%C3%A9rea_do_IFBA_Campus_Barreiras_-_2024.png/960px-Vis%C3%A3o_a%C3%A9rea_do_IFBA_Campus_Barreiras_-_2024.png"
            data-ai-hint="university campus"
            width={550}
            height={310}
            alt="Visão aérea do IFBA Campus Barreiras"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>

       <div className="mt-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Target className="h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Detalhes do Projeto</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Este projeto foi construído usando tecnologias web modernas para criar uma experiência de usuário rápida, responsiva e envolvente.
            </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-10">
            <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline">Tecnologia</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Next.js, React, Tailwind CSS, Shadcn/UI</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline">Integração com IA</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Firebase Genkit & Google AI</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline">Curso</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Informática, IFBA Barreiras</p>
                </CardContent>
            </Card>
        </div>
       </div>
    </div>
  );
}
