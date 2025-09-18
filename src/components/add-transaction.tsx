import { DollarSignIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function AddTransactionButton() {
  return (
    <Card className="cursor-pointer font-semibold">
      <div className="my-auto flex items-center justify-around">
        <CardContent>Adicionar Transação</CardContent>
        <div className="bg-primary-foreground/15 rounded-md p-5">
          <DollarSignIcon className="text-ring" />
        </div>
      </div>
    </Card>
  );
}
