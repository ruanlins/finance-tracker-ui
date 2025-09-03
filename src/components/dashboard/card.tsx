import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export function DashboardCard() {
  return (
    <Card className="max-w-74 gap-0.5">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Carteira</CardTitle>
      </CardHeader>
      <CardContent className="flex items-end justify-between">
        <p className="text-primary text-3xl font-bold">R$1500,00</p>
        <span className="flex font-medium items-center border-[1px] py-1 px-2 rounded-lg"><ArrowUpRight size={22} className="text-primary" />5%</span>
      </CardContent>
    </Card>
  );
}
