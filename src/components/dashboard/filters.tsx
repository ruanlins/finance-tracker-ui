import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar1 } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";

interface FilterProps {
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  timeRange: DateRange | undefined;
  setTimeRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export function Filters({
  period,
  setPeriod,
  timeRange,
  setTimeRange,
}: FilterProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <ToggleGroup
          variant="outline"
          type="single"
          value={period}
          onValueChange={(period) => {
            if (period) setPeriod(period);
          }}
        >
          <ToggleGroupItem
            value="month"
            className="data-[state=on]:bg-primary-foreground/25 data-[state=on]:text-primary"
          >
            Esse mês
          </ToggleGroupItem>
          <ToggleGroupItem
            className="data-[state=on]:bg-primary-foreground/25 data-[state=on]:text-primary px-4"
            value="last"
          >
            Mês passado
          </ToggleGroupItem>
          <ToggleGroupItem
            className="data-[state=on]:bg-primary-foreground/25 data-[state=on]:text-primary"
            value="year"
          >
            Esse ano
          </ToggleGroupItem>
        </ToggleGroup>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Calendar1 />
              <p>Selecionar período</p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full rounded-lg" align="end">
            <Calendar
              mode="range"
              showOutsideDays
              numberOfMonths={2}
              defaultMonth={new Date()}
              selected={timeRange}
              onSelect={setTimeRange}
              startMonth={new Date(2023)}
              endMonth={new Date("2027-12-31")}
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
