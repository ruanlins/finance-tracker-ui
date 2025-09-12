import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface DashboardCardProps {
  title: string;
  value: number;
  comparison: number;
}

export function DashboardCard({
  title,
  value,
  comparison,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-end justify-between">
        <p className="text-primary text-3xl font-bold">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <span className="flex items-center gap-2 rounded-lg border-[1px] px-2 py-1">
          {comparison > 0 ? (
            <TrendingUp size={22} className="text-primary" />
          ) : (
            <TrendingDown size={22} className="text-destructive" />
          )}
          {comparison}%
        </span>
      </CardContent>
    </Card>
  );
}
