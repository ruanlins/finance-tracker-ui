import { DateFilters } from "@/components/date-filters";
import { columns } from "@/components/transactions/table-colums";
import { DataTable } from "@/components/transactions/transactions-table";
import { despesas } from "@/utils/despesas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/transacoes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-12 pb-10">
      <div className="mt-12 flex justify-between">
        <h1 className="text-3xl font-semibold">Olá, Usuário!</h1>
        <DateFilters />
      </div>
      <DataTable columns={columns} data={despesas} />
    </div>
  );
}
