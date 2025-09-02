import { Landmark, UserCog } from "lucide-react";
import { ModeToggle } from "./toggle-mode";
import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-muted w-screen border-b-[1px] border-ring">
      <div className="m-auto flex h-16 w-4/6 items-center justify-between">
        <Landmark size={40} />
        <div>
          <nav className="flex items-center gap-8 font-semibold">
            <Link
              to="/"
              className="p-2"
              activeOptions={{ exact: true }}
              activeProps={{
                className: "rounded-md bg-primary-foreground/15 text-primary",
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/transacoes"
              className="p-2"
              activeOptions={{ exact: true }}
              activeProps={{
                className: "rounded-md bg-primary-foreground/25 text-primary",
              }}
            >
              Transações
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <UserCog />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-md">
                Seu Usuário
              </DropdownMenuLabel>
              <DropdownMenuItem className="hover:bg-muted rounded-sm px-2 py-1.5 text-sm">
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted rounded-sm px-2 py-1.5 text-sm">
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
