import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { DialogFooter } from "./ui/dialog";
import { InputComponent } from "./form/input";
import { DateComponent } from "./form/date";
import { SelectInputComponent } from "./form/select";
import { ToggleInputComponent } from "./form/toggle";
import { useEffect } from "react";
import type { Transaction } from "./transactions/table-colums";

// const formSchema = z.object({
//   descricao: z.string({ error: "Descrição é obrigatória." }).min(3, {
//     message: "Descrição precisa ter 3 caracteres ou mais.",
//   }),
//   data: z.date({ error: "Data é obrigatória." }),
//   valor: z.number({ error: "Valor é obrigatório" }),
//   categoria: z.string({ error: "Categoria é obrigatória." }),
//   tipo: z.enum(["plus", "minus"], { error: "Tipo é obrigatório." }),
// });

const formSchema = z.object({
  descricao: z.string(),
  data: z.date(),
  valor: z.number(),
  categoria: z.string(),
  tipo: z.enum(["plus", "minus"]),
});

type AddTransactionFormProps = {
  transaction?: Transaction;
};

const options = [
  "alimentação",
  "transporte",
  "moradia",
  "lazer",
  "saúde",
  "educação",
  "investimentos",
  "outros",
];

export function AddTransactionForm({ transaction }: AddTransactionFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: transaction?.descricao || "",
      data: transaction?.data,
      categoria: transaction?.categoria,
      valor: transaction?.valor || undefined,
      tipo: transaction?.tipo || "minus",
    },
  });

  useEffect(() => {
    console.log(transaction);
  }, [transaction]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <InputComponent
              name="descricao"
              label="Descrição"
              control={form.control}
            />
          </div>

          <DateComponent label="Data" control={form.control} name="data" />
        </div>
        <div className="flex items-end justify-between">
          <InputComponent
            name="valor"
            type="number"
            label="Valor"
            placeholder="R$"
            control={form.control}
          />
          <ToggleInputComponent control={form.control} name="tipo" />
          <SelectInputComponent
            placeholder="Categoria"
            control={form.control}
            label="Categoria"
            name="categoria"
            options={options}
          />
        </div>
        <DialogFooter className="mt-8">
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
