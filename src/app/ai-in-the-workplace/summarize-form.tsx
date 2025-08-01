'use client';

import { useState } from 'react';
import { summarizeAiMitigations } from '@/ai/flows/summarize-ai-mitigations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, LoaderCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function SummarizeForm() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');

    try {
      const result = await summarizeAiMitigations({
        query: 'estratégias para mitigar os impactos negativos da IA no ambiente de trabalho',
      });
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setError('A IA retornou um resumo vazio. Por favor, tente novamente.');
      }
    } catch (e) {
      console.error(e);
      setError('Ocorreu um erro ao gerar o resumo. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Button onClick={handleSubmit} disabled={isLoading} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          {isLoading ? (
            <>
              <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
              Gerando...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Gerar Resumo de Mitigação
            </>
          )}
        </Button>
      </div>
      
      {error && (
         <Alert variant="destructive">
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
         </Alert>
      )}

      {summary && (
        <Card className="bg-background">
          <CardContent className="p-6">
            <p className="whitespace-pre-wrap text-foreground/90">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
