import { Link } from "react-router";
import { Search, SlidersHorizontal, Music } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0080ff]">
              <Music className="w-6 h-6 text-[#0a0a0f]" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent">
              SteroMusic
            </span>
          </Link>

          {/* Buscador Central */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar cursos, instrumentos, VSTs..."
                  className="pl-10 pr-4 bg-input-background border-input"
                />
              </div>
              
              {/* Botón de Filtros */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="gap-2 border-input hover:border-primary hover:bg-muted"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filtros
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Filtrar por</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="mb-2 text-sm text-muted-foreground">Categoría</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cat-instrumentos" />
                            <Label htmlFor="cat-instrumentos" className="cursor-pointer">
                              Instrumentos Modernos
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cat-produccion" />
                            <Label htmlFor="cat-produccion" className="cursor-pointer">
                              Producción Musical
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-2 text-sm text-muted-foreground">Nivel</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="nivel-principiante" />
                            <Label htmlFor="nivel-principiante" className="cursor-pointer">
                              Principiante
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="nivel-intermedio" />
                            <Label htmlFor="nivel-intermedio" className="cursor-pointer">
                              Intermedio
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="nivel-avanzado" />
                            <Label htmlFor="nivel-avanzado" className="cursor-pointer">
                              Avanzado
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-2 text-sm text-muted-foreground">Tipo</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="tipo-curso" />
                            <Label htmlFor="tipo-curso" className="cursor-pointer">
                              Curso Completo
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="tipo-taller" />
                            <Label htmlFor="tipo-taller" className="cursor-pointer">
                              Taller
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="tipo-tutorial" />
                            <Label htmlFor="tipo-tutorial" className="cursor-pointer">
                              Tutorial
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" className="flex-1" size="sm">
                        Limpiar
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] hover:opacity-90" size="sm">
                        Aplicar
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Navegación */}
          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link 
              to="/cursos" 
              className="text-sm hover:text-primary transition-colors"
            >
              Cursos
            </Link>
            <Link 
              to="/nosotros" 
              className="text-sm hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
