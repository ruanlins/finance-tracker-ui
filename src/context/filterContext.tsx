import { getCurrentMonthRange } from "@/lib/dateFilters";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { DateRange } from "react-day-picker";

export type FilterLabel = "current" | "last" | "year" | "custom";

type Filter = { label: FilterLabel; value: DateRange };

type FilterState = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

type FilterProviderProps = {
  children: ReactNode;
};

const FilterContext = createContext<FilterState | undefined>(undefined);

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<Filter>({
    label: "current",
    value: getCurrentMonthRange(),
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function UseFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("UseFilter must be used within a FilterProvider");
  }
  return context;
}
