'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, Shield, Bot, Users } from "lucide-react";

const strategies = [
    {
        icon: GraduationCap,
        title: "Requalificação Profissional e Inclusão Digital",
        content: "Um dos principais caminhos para minimizar os impactos da substituição de funções humanas pela IA é a requalificação profissional, que deve ser entendida como um investimento social prioritário. Programas educacionais focados no desenvolvimento de habilidades não automatizáveis, como criatividade, pensamento crítico, comunicação, inteligência emocional e capacidade de resolver problemas complexos, são fundamentais para preparar os trabalhadores para as demandas de um mercado em constante evolução. Além disso, a inclusão digital deve ser uma prioridade, garantindo que pessoas em diferentes contextos socioeconômicos, regiões e faixas etárias tenham acesso ao ensino de competências digitais avançadas. No Brasil, por exemplo, iniciativas públicas e privadas voltadas para a capacitação tecnológica precisam ampliar seu alcance, especialmente nas áreas mais vulneráveis."
    },
    {
        icon: Shield,
        title: "Fortalecimento da Proteção Social",
        content: "É crucial fortalecer sistemas de proteção social que ofereçam segurança econômica durante os períodos de transição profissional. Propostas como a renda básica universal ganham relevância ao assegurar uma renda mínima para indivíduos afetados pela automação, oferecendo-lhes maior tranquilidade para buscar novas qualificações ou empreender. Políticas que incentivem a participação das empresas em programas de requalificação também são essenciais para garantir uma transição mais suave."
    },
    {
        icon: Bot,
        title: "Regulação Ética e Transparente",
        content: "Outro aspecto central na mitigação dos impactos da IA é a regulação ética e transparente das tecnologias. O risco de perpetuação ou agravamento de desigualdades por meio de algoritmos enviesados exige mecanismos rigorosos de auditoria e controle."
    },
    {
        icon: Users,
        title: "Governança Participativa",
        content: "A transparência nos processos automatizados, aliada à governança participativa que envolva sindicatos, organizações da sociedade civil e especialistas, é fundamental para garantir que a IA seja usada de maneira justa e responsável."
    }
]

export function MitigationStrategies() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {strategies.map((strategy, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>
                        <div className="flex items-center gap-4">
                            <strategy.icon className="h-6 w-6 text-accent" />
                            <span className="text-left font-semibold">{strategy.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-14 text-muted-foreground">
                        {strategy.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
