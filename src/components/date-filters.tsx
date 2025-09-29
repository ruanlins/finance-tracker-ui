import { Calendar1 } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Calendar } from "./ui/calendar";
import { ptBR } from "react-day-picker/locale";
import { UseFilter, type FilterLabel } from "@/context/filterContext";
import {
  getCurrentMonthRange,
  getCurrentYearRange,
  getPastMonthRange,
} from "@/lib/dateFilters";
import type { DateRange } from "react-day-picker";

const filterLabels = [
  { label: "Esse mês", value: "current" },
  { label: "Mês passado", value: "last" },
  { label: "Esse ano", value: "year" },
];

export function DateFilters() {
  const { filter, setFilter } = UseFilter();

  function handleFilterChange(value: FilterLabel) {
    if (value === "current")
      setFilter({ label: value, value: getCurrentMonthRange() });
    else if (value === "last")
      setFilter({ label: value, value: getPastMonthRange() });
    else if (value === "year")
      setFilter({
        label: value,
        value: getCurrentYearRange(),
      });
  }

  return (
    <div className="flex items-center gap-4">
      <ToggleGroup
        variant="outline"
        type="single"
        value={filter.label}
        onValueChange={(value) => handleFilterChange(value as FilterLabel)}
      >
        {filterLabels.map((toggle) => {
          return (
            <ToggleGroupItem
              key={toggle.value}
              value={toggle.value}
              className="data-[state=on]:bg-primary-foreground/25 data-[state=on]:text-primary nth-2:px-4"
            >
              {toggle.label}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={filter.label === "custom" ? "text-primary" : ""}
          >
            <Calendar1 />
            {filter.label === "custom"
              ? `${filter.value?.from?.toLocaleDateString("pt-BR")} - ${filter.value?.to?.toLocaleDateString("pt-BR")}`
              : "Escolha o período"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full rounded-lg" align="end">
          <Calendar
            mode="range"
            selected={filter.label === "custom" ? filter.value : undefined}
            onSelect={(value) =>
              setFilter({ label: "custom", value: value as DateRange })
            }
            showOutsideDays
            numberOfMonths={2}
            defaultMonth={new Date()}
            startMonth={new Date(2023)}
            endMonth={new Date("2027-12-31")}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
