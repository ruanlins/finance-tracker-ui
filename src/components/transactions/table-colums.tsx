import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

export type Transaction = {
  data: Date;
  descricao: string;
  categoria: string;
  valor: number;
  tipo: "plus" | "minus";
};

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "data",
    header: "Data",
    cell: ({ row }) => {
      const rawDate = row.getValue("data") as Date;
      return new Date(rawDate).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    },
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "categoria",
    header: "Categoria",
  },
  {
    accessorKey: "valor",
    header: "Valor",
    cell: ({ row }) => {
      const valor = row.getValue("valor") as number;
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
];
