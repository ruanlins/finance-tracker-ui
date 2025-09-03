import { DashboardCard } from "@/components/dashboard/card";
import { Filters } from "@/components/dashboard/filters";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import type { DateRange } from "react-day-picker";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [period, setPeriod] = React.useState<string>("month");
  const [timeRange, setTimeRange] = React.useState<DateRange | undefined>();
  return (
    <div className="m-auto w-4/6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Olá, Usuário!</h1>
        <Filters
          period={period}
          setPeriod={setPeriod}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
      </div>
      <div>
        <DashboardCard />
      </div>
    </div>
  );
}
