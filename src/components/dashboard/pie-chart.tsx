import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { despesas } from "@/utils/despesas";

interface PieChartDashboardProps {
  chartData: {
    categoria: string;
    gastos: number;
    fill: string;
  }[];
  chartConfig: ChartConfig;
}

const despesasPorCategoria = despesas.reduce(
  (acc, despesa) => {
    const categoria = despesa.categoria;
    if (!acc[categoria]) {
      acc[categoria] = 0;
    }
    acc[categoria] += despesa.valor;
    return acc;
  },
  {} as Record<string, number>,
);

export function PieChartDashboard({
  chartData,
  chartConfig,
}: PieChartDashboardProps) {
  return (
    <Card className="h-fit">
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
            <Pie
              data={chartData}
              dataKey={"gastos"}
              nameKey="categoria"
              innerRadius={75}
            />
          </PieChart>
        </ChartContainer>
        <CardFooter>
          <ul className="flex w-full flex-col justify-between gap-3">
            {Object.entries(despesasPorCategoria).map(([chave, valor]) => {
              return (
                <li className="flex justify-between" key={chave}>
                  <p className="before:bg-muted-foreground flex items-center gap-1 before:mr-1 before:block before:h-5 before:w-5 before:rounded-full before:content-['']">
                    {chave}
                  </p>
                  <p>
                    {valor.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </p>
                </li>
              );
            })}
          </ul>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
