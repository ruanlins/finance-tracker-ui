import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";

interface PieChartDashboardProps {
  chartData: {
    categoria: string;
    gastos: number;
    fill: string;
  }[];
  chartConfig: ChartConfig;
}

export function PieChartDashboard({
  chartData,
  chartConfig,
}: PieChartDashboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gastos por categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="m-auto h-[300px] min-h-[100px] w-[300px]"
          config={chartConfig}
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="categoria" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
            <Pie
              data={chartData}
              dataKey="gastos"
              nameKey="categoria"
              innerRadius={75}
              label
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
