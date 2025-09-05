import { DashboardCard } from "@/components/dashboard/card";
import { Filters } from "@/components/dashboard/filters";
import { PieChartDashboard } from "@/components/dashboard/pie-chart";
import { DashboardTable } from "@/components/dashboard/table";
import { type ChartConfig } from "@/components/ui/chart";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import type { DateRange } from "react-day-picker";

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

const despesas = [
  {
    data: "2025-01-05",
    descricao: "Supermercado",
    categoria: "Alimentação",
    valor: 250.75,
  },
  {
    data: "2025-01-07",
    descricao: "Conta de Luz",
    categoria: "Moradia",
    valor: 180.4,
  },
  {
    data: "2025-01-10",
    descricao: "Gasolina",
    categoria: "Transporte",
    valor: 120.0,
  },
  { data: "2025-01-12", descricao: "Cinema", categoria: "Lazer", valor: 45.0 },
  {
    data: "2025-01-15",
    descricao: "Internet",
    categoria: "Moradia",
    valor: 99.9,
  },
  {
    data: "2025-01-18",
    descricao: "Farmácia",
    categoria: "Saúde",
    valor: 60.3,
  },
  {
    data: "2025-01-20",
    descricao: "Restaurante",
    categoria: "Alimentação",
    valor: 85.5,
  },
  {
    data: "2025-01-22",
    descricao: "Academia",
    categoria: "Saúde",
    valor: 130.0,
  },
  {
    data: "2025-01-25",
    descricao: "Ônibus",
    categoria: "Transporte",
    valor: 8.6,
  },
  {
    data: "2025-01-28",
    descricao: "Streaming",
    categoria: "Lazer",
    valor: 29.9,
  },
];

function RouteComponent() {
  const [period, setPeriod] = React.useState<string>("month");
  const [timeRange, setTimeRange] = React.useState<DateRange | undefined>();
  return (
    <div className="m-auto w-4/6">
      <div className="my-12 flex justify-between">
        <h1 className="text-3xl font-semibold">Olá, Usuário!</h1>
        <Filters
          period={period}
          setPeriod={setPeriod}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
      </div>
      <div className="my-12 grid grid-cols-3 gap-10">
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
        <DashboardCard
          title={data[1].title}
          value={data[1].value}
          comparison={data[1].comparison}
        />
        <PieChartDashboard chartData={chartData} chartConfig={chartConfig} />
        <DashboardTable despesas={despesas} />
      </div>
    </div>
  );
}
