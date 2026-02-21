'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type DiagnosisReadyModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DiagnosisReadyModal({ open, onOpenChange }: DiagnosisReadyModalProps) {
  const handleButtonClick = () => {
    // NOTE: Firebase event 'diagnosis_cta_click' would be triggered here.
    onOpenChange(false);
  };
  
  const onOpenChangeInternal = (isOpen: boolean) => {
    if(isOpen) {
      // NOTE: Firebase event 'diagnosis_ready_shown' would be triggered here.
    }
    onOpenChange(isOpen);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChangeInternal}>
      <DialogContent className="sm:max-w-md text-center bg-background/90 backdrop-blur-lg border-primary/10 shadow-2xl shadow-primary/10">
        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl font-bold">Diagnóstico pronto.</DialogTitle>
          <DialogDescription className="mt-2 text-base text-muted-foreground">
            Você já tem as informações.
            <br />
            Agora pode agir com consciência.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 mt-4">
          <Button onClick={handleButtonClick} size="lg" className="w-full font-bold">
            Acessar meu Radar
          </Button>
          <p className="text-xs text-muted-foreground">Aplicativo digital • Acesso imediato</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
