import { Card, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

interface TableProps {
  despesas: {
    data: string;
    descricao: string;
    categoria: string;
    valor: number;
  }[];
}

export function DashboardTable({ despesas }: TableProps) {
  return (
    <Card className="w-ful col-span-2 px-10">
      <CardHeader>
        <CardTitle className="m-auto">Últimas transações</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader className="font-bold">
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-muted-foreground font-semibold">
          {despesas.map((despesa) => (
            <TableRow>
              <TableCell>{despesa.data}</TableCell>
              <TableCell>{despesa.descricao}</TableCell>
              <TableCell>{despesa.categoria}</TableCell>
              <TableCell className="text-right">
                {despesa.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
