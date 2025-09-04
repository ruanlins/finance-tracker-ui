import { DashboardCard } from "@/components/dashboard/card";
import { Filters } from "@/components/dashboard/filters";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import type { DateRange } from "react-day-picker";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const data = [{ title: 'Carteira', value: 1500, comparison: 5 }, { title: 'Gastos', value: 2300, comparison: -13 }]

function RouteComponent() {
  const [period, setPeriod] = React.useState<string>("month");
  const [timeRange, setTimeRange] = React.useState<DateRange | undefined>();
  return (
    <div className="m-auto w-4/6">
      <div className="flex justify-between my-12">
        <h1 className="text-3xl font-semibold">Olá, Usuário!</h1>
        <Filters
          period={period}
          setPeriod={setPeriod}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
      </div>
      <div className="grid grid-cols-3 gap-20 my-12">
        <DashboardCard title={data[0].title} value={data[0].value} comparison={data[0].comparison} />
        <DashboardCard title={data[0].title} value={data[0].value} comparison={data[0].comparison} />
        <DashboardCard title={data[1].title} value={data[1].value} comparison={data[1].comparison} />
      </div>
    </div>
  );
}
