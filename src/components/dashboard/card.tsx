import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface DashboardCardProps {
  title: string
  value: number
  comparison: number
}

export function DashboardCard({ title, value, comparison }: DashboardCardProps) {
  return (
    <Card className="gap-0.5">
      <CardHeader>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-end justify-between">
        <p className="text-primary text-3xl font-bold">{value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        <span className="flex gap-2 items-center border-[1px] py-1 px-2 rounded-lg">{comparison > 0 ? <TrendingUp size={22} className="text-primary" /> : <TrendingDown size={22} className="text-destructive" />}{comparison}%</span>
      </CardContent>
    </Card>
  );
}
