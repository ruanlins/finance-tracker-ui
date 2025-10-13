import { DollarSignIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { AddTransactionForm } from "./add-transaction-form";
export function AddTransactionButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:ring-ring/80 cursor-pointer font-semibold transition-all hover:ring-1">
          <div className="my-auto flex items-center justify-around">
            <CardContent>Adicionar Transação</CardContent>
            <div className="bg-primary-foreground/15 rounded-md p-5">
              <DollarSignIcon className="text-ring" />
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Transação</DialogTitle>
          <DialogDescription>
            Adicione um gasto ou um ganho à sua carteira.
          </DialogDescription>
        </DialogHeader>
        <AddTransactionForm />
      </DialogContent>
    </Dialog>
  );
}
