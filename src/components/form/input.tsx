import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../ui/input";

type InputComponentProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
  type?: string;
};

export function InputComponent<TFieldValues extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  type = "text",
}: InputComponentProps<TFieldValues>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={placeholder} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
