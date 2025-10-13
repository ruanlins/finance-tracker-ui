import type { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { CircleMinus, CirclePlus } from "lucide-react";

type ToggleComponentProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
};

export function ToggleInputComponent<TFieldValues extends FieldValues>({
  control,
  name,
}: ToggleComponentProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <ToggleGroup
              className="flex w-[100px]"
              type="single"
              value={field.value}
              onValueChange={field.onChange}
            >
              <ToggleGroupItem
                value="plus"
                aria-label="Entrada"
                className="data-[state=on]:bg-primary-foreground/25 data-[state=on]:text-primary"
              >
                <CirclePlus className="size-6" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="minus"
                aria-label="Saída"
                className="data-[state=on]:bg-destructive/25 data-[state=on]:text-destructive"
              >
                <CircleMinus className="size-6" />
              </ToggleGroupItem>
            </ToggleGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
