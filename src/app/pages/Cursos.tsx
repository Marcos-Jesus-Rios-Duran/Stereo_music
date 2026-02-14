import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Music2, Headphones, Filter } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Cursos() {
  const [nivelFiltro, setNivelFiltro] = useState<string>("Todos");

  const cursos = [
    {
      titulo: "Guitarra Eléctrica Avanzada",
      nivel: "Avanzado",
      categoria: "Instrumentos",
      duracion: "12 semanas",
      imagen: "https://images.unsplash.com/photo-1758920168985-304cd4ae7cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzeW50aGVzaXplciUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "Teclado para Principiantes",
      nivel: "Principiante",
      categoria: "Instrumentos",
      duracion: "8 semanas",
      imagen: "https://images.unsplash.com/photo-1758920168985-304cd4ae7cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzeW50aGVzaXplciUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "Batería Moderna",
      nivel: "Intermedio",
      categoria: "Instrumentos",
      duracion: "10 semanas",
      imagen: "https://images.unsplash.com/photo-1758920168985-304cd4ae7cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzeW50aGVzaXplciUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "Producción con Ableton Live",
      nivel: "Intermedio",
      categoria: "Producción",
      duracion: "16 semanas",
      imagen: "https://images.unsplash.com/photo-1646049492315-834855634819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBtaXhlcnxlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "Mezcla y Masterización",
      nivel: "Avanzado",
      categoria: "Producción",
      duracion: "12 semanas",
      imagen: "https://images.unsplash.com/photo-1646049492315-834855634819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBtaXhlcnxlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "VSTs y Sintetizadores",
      nivel: "Principiante",
      categoria: "Producción",
      duracion: "6 semanas",
      imagen: "https://images.unsplash.com/photo-1646049492315-834855634819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBtaXhlcnxlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const niveles = ["Todos", "Principiante", "Intermedio", "Avanzado"];

  const cursosFiltrados =
    nivelFiltro === "Todos"
      ? cursos
      : cursos.filter((curso) => curso.nivel === nivelFiltro);

  const nivelColor = (nivel: string) => {
    switch (nivel) {
      case "Principiante":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermedio":
        return "bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20";
      case "Avanzado":
        return "bg-[#0080ff]/10 text-[#0080ff] border-[#0080ff]/20";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Todos los{" "}
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent">
                Cursos
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explora nuestra colección completa de cursos de música
            </p>
          </div>

          {/* Filtros por Nivel */}
          <Card className="mb-8 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary" />
                Filtrar por Nivel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {niveles.map((nivel) => (
                  <Button
                    key={nivel}
                    variant={nivelFiltro === nivel ? "default" : "outline"}
                    onClick={() => setNivelFiltro(nivel)}
                    className={
                      nivelFiltro === nivel
                        ? "bg-gradient-to-r from-[#00d4ff] to-[#0080ff] hover:opacity-90"
                        : "border-input hover:border-primary hover:bg-muted"
                    }
                  >
                    {nivel}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Mostrando {cursosFiltrados.length} curso
                {cursosFiltrados.length !== 1 ? "s" : ""}
              </p>
            </CardContent>
          </Card>

          {/* Grid de Cursos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosFiltrados.map((curso, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={curso.imagen}
                    alt={curso.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className={`absolute top-4 right-4 ${nivelColor(
                      curso.nivel
                    )}`}
                  >
                    {curso.nivel}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <Badge
                    variant="outline"
                    className="mb-3 border-primary/20 text-primary"
                  >
                    {curso.categoria}
                  </Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {curso.titulo}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      {curso.categoria === "Instrumentos" ? (
                        <Music2 className="w-4 h-4" />
                      ) : (
                        <Headphones className="w-4 h-4" />
                      )}
                      {curso.duracion}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
