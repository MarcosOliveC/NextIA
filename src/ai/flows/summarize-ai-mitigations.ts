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
                  A Inteligência Artificial é uma faca de dois gumes no mundo profissional. Por um lado, oferece oportunidades sem precedentes para eficiência e inovação. A IA pode automatizar tarefas repetitivas, analisar vastos conjuntos de dados para descobrir insights e auxiliar profissionais em processos complexos de tomada de decisão, levando ao aumento da produtividade e à criação de novos cargos centrados na gestão e desenvolvimento de IA.
                </p>
                <br/>
                <p className="text-muted-foreground">
                  Por outro lado, o avanço da IA também apresenta desafios significativos. Existem preocupações crescentes sobre a substituição de empregos, pois a automação pode tornar certas funções obsoletas. Questões de viés algorítmico, privacidade de dados e a necessidade de novas habilidades e treinamento são primordiais. Navegar por essa transição requer um planejamento cuidadoso e uma abordagem proativa tanto dos empregadores quanto dos funcionários.
                </p>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                data-ai-hint="office collaboration"
                width={600}
                height={400}
                alt="Escritório moderno com tecnologia"
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