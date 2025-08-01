import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MitigationStrategies } from './mitigation-strategies';

export default function AiInWorkplacePage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">IA no Ambiente de Trabalho</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explorando o impacto transformador da Inteligência Artificial nas carreiras, indústrias e no futuro do trabalho.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">O Duplo Impacto da IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-muted-foreground">
                  A Inteligência Artificial apresenta uma dualidade no ambiente profissional. Por um lado, impulsiona a eficiência e a inovação ao automatizar tarefas, analisar dados e auxiliar na tomada de decisões, o que pode levar a um aumento da produtividade e à criação de novas funções.
                </p>
                <br/>
                <p className="text-muted-foreground">
                  Por outro, gera desafios como a substituição de empregos, vieses algorítmicos e a necessidade de requalificação profissional. Navegar por essa transformação exige uma abordagem cuidadosa tanto de empregadores quanto de funcionários para maximizar os benefícios e mitigar os riscos.
                </p>
              </div>
              <Image
                src="https://i0.wp.com/s2treinamentos.com.br/wp-content/uploads/2023/08/seguranca-do-trabalho-e-inteligencia-artificial.png?resize=640%2C385&ssl=1"
                data-ai-hint="AI safety work"
                width={600}
                height={400}
                alt="Inteligência Artificial e segurança no trabalho"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="font-headline">Mitigando Consequências Negativas</CardTitle>
            <p className="text-muted-foreground pt-2">
              Enquanto a IA oferece um potencial imenso, é crucial abordar proativamente seus desafios. Aqui estão algumas estratégias e táticas que empresas e indivíduos podem adotar para mitigar os impactos negativos da automação no ambiente de trabalho.
            </p>
          </CardHeader>
          <CardContent>
            <MitigationStrategies />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
