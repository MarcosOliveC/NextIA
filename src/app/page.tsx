import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container px-4 md:px-6">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              <span>Next</span><span className="text-primary">IA</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Navegando pelas complexidades da Inteligência Artificial. Seu guia para entender seu impacto na sociedade e no ambiente de trabalho.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/what-is-ai">
                  Comece a Explorar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://static.poder360.com.br/2023/05/ilustracao-inteligencia-artificial-pixabay-848x477.jpg"
            width={550}
            height={310}
            alt="Cérebro com circuitos, simbolizando a inteligência artificial."
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary rounded-lg">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">O Que Oferecemos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mergulhe fundo no mundo da IA com nosso conteúdo selecionado, projetado para esclarecer e informar.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-bold font-headline">O que é IA?</h3>
              <p className="text-sm text-muted-foreground">
                Entenda os fundamentos, do contexto histórico às aplicações modernas.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-bold font-headline">IA no Trabalho</h3>
              <p className="text-sm text-muted-foreground">
                Explore os impactos da IA nos empregos e aprenda sobre estratégias de mitigação.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-bold font-headline">Sobre Nossa Missão</h3>
              <p className="text-sm text-muted-foreground">
                Saiba mais sobre o propósito por trás do NextIA e nosso compromisso com a educação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 md:my-24 lg:my-32 py-12 md:py-20 bg-[#2c2c2c] text-white rounded-lg">
        <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="flex justify-center">
            <Image
              alt="Alan Turing"
              className="rounded-lg object-cover"
              height="450"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Alan_Turing_%281951%29.jpg/640px-Alan_Turing_%281951%29.jpg"
              width="350"
            />
          </div>
          <div className="space-y-4">
            <blockquote className="text-2xl font-medium italic md:text-3xl">
              "Nós só podemos ver um pouco do futuro, mas o suficiente para perceber que há muito a fazer."
            </blockquote>
            <p className="text-lg font-semibold text-primary">Alan Turing, o pai da computação</p>
          </div>
        </div>
      </section>
    </div>
  );
}
