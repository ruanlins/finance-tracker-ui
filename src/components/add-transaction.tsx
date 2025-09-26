import { CircleMinus, CirclePlus, DollarSignIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";
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
        <div>
          <div>
            <Label htmlFor="descricao" className="mt-4 mb-2">
              Descrição
            </Label>
            <Input id="descricao" placeholder="Digite a descrição" />
          </div>
          <div className="flex items-end gap-8">
            <div>
              <Label htmlFor="valor" className="mt-4 mb-2">
                Valor
              </Label>
              <Input id="valor" placeholder="R$" />
            </div>
            <ToggleGroup type="single" className="flex">
              <ToggleGroupItem
                value="plus"
                asChild
                className="data-[state=on]:bg-primary-foreground/25 data-[state=on]:text-primary"
              >
                <CirclePlus size={60} />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="minus"
                asChild
                className="data-[state=on]:bg-destructive/25 data-[state=on]:text-destructive"
              >
                <CircleMinus />
              </ToggleGroupItem>
            </ToggleGroup>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mercado">Mercado</SelectItem>
                <SelectItem value="Lazer">Lazer</SelectItem>
                <SelectItem value="Estudos">Estudos</SelectItem>
                <SelectItem value="Contas">Contas</SelectItem>
                <SelectItem value="Outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>Teste</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
