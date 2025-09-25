import { DashboardCard } from "@/components/dashboard/card";
import { PieChartDashboard } from "@/components/dashboard/pie-chart";
import { DashboardTable } from "@/components/dashboard/table";
import { type ChartConfig } from "@/components/ui/chart";
import { createFileRoute } from "@tanstack/react-router";
import { despesas } from "@/utils/despesas";
import { AddTransactionButton } from "@/components/add-transaction";
import { DateFilters } from "@/components/date-filters";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const data = [
  { title: "Carteira", value: 1500, comparison: 5 },
  { title: "Gastos", value: 2300, comparison: -13 },
];

const chartData = [
  { categoria: "comida", gastos: 275, fill: "var(--color-comida)" },
  { categoria: "jogos", gastos: 200, fill: "var(--color-jogos)" },
  { categoria: "estudos", gastos: 187, fill: "var(--color-estudos)" },
  { categoria: "pet", gastos: 173, fill: "var(--color-pet)" },
  { categoria: "outros", gastos: 90, fill: "var(--color-outros)" },
  { categoria: "fixas", gastos: 180, fill: "var(--color-fixas" },
];

const chartConfig = {
  gastos: {
    label: "Gastos",
  },
  comida: {
    label: "Comida",
    color: "var(--chart-1)",
  },
  jogos: {
    label: "Jogos",
    color: "var(--chart-2)",
  },
  estudos: {
    label: "Estudos",
    color: "var(--chart-3)",
  },
  pet: {
    label: "Pet",
    color: "var(--chart-4)",
  },
  outros: {
    label: "Outros",
    color: "var(--chart-5)",
  },
  fixas: {
    label: "Fixas",
    color: "var(--ring)",
  },
} satisfies ChartConfig;

function RouteComponent() {
  return (
    <div className="flex flex-col gap-12">
      <div className="mt-12 flex justify-between">
        <h1 className="text-3xl font-semibold">Olá, Usuário!</h1>
        <DateFilters />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <DashboardCard
          title={data[0].title}
          value={data[0].value}
          comparison={data[0].comparison}
        />
        <DashboardCard
          title={data[0].title}
          value={data[0].value}
          comparison={data[0].comparison}
        />
        <AddTransactionButton />
        <PieChartDashboard chartData={chartData} chartConfig={chartConfig} />
        <DashboardTable despesas={despesas} />
      </div>
    </div>
  );
}
