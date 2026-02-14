import { Link } from "react-router";
import { Guitar, Mic2, Music2, Headphones, ArrowRight, Star, Users, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const instrumentos = [
    {
      titulo: "Guitarra Eléctrica Avanzada",
      nivel: "Avanzado",
      duracion: "12 semanas",
      imagen: "https://images.unsplash.com/photo-1758920168985-304cd4ae7cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzeW50aGVzaXplciUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "Teclado para Principiantes",
      nivel: "Principiante",
      duracion: "8 semanas",
      imagen: "https://images.unsplash.com/photo-1758920168985-304cd4ae7cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzeW50aGVzaXplciUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "Batería Moderna",
      nivel: "Intermedio",
      duracion: "10 semanas",
      imagen: "https://images.unsplash.com/photo-1758920168985-304cd4ae7cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzeW50aGVzaXplciUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const produccion = [
    {
      titulo: "Producción con Ableton Live",
      nivel: "Intermedio",
      duracion: "16 semanas",
      imagen: "https://images.unsplash.com/photo-1646049492315-834855634819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBtaXhlcnxlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "Mezcla y Masterización",
      nivel: "Avanzado",
      duracion: "12 semanas",
      imagen: "https://images.unsplash.com/photo-1646049492315-834855634819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBtaXhlcnxlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      titulo: "VSTs y Sintetizadores",
      nivel: "Principiante",
      duracion: "6 semanas",
      imagen: "https://images.unsplash.com/photo-1646049492315-834855634819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBtaXhlcnxlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#13131a] to-background py-24 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#00d4ff] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#0080ff] rounded-full blur-[150px] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20 px-4 py-1.5">
              Plataforma Educativa de Música
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              Bienvenidos a{" "}
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent">
                SteroMusic
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprende a dominar instrumentos modernos y técnicas de producción musical con cursos profesionales diseñados para todos los niveles.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-[#00d4ff] to-[#0080ff] hover:opacity-90 gap-2">
                Explorar Cursos
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-input hover:border-primary hover:bg-muted">
                Ver Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center pt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00d4ff]/10">
                  <Users className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">5,000+</p>
                  <p className="text-muted-foreground">Estudiantes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0080ff]/10">
                  <BookOpen className="w-5 h-5 text-[#0080ff]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">50+</p>
                  <p className="text-muted-foreground">Cursos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00d4ff]/10">
                  <Star className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">4.9/5</p>
                  <p className="text-muted-foreground">Valoración</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instrumentos Modernos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Instrumentos Modernos
                </h2>
                <p className="text-muted-foreground">
                  Domina los instrumentos más populares de la música contemporánea
                </p>
              </div>
              <Button variant="outline" className="border-input hover:border-primary hover:bg-muted gap-2">
                Ver Todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {instrumentos.map((curso, index) => (
                <Card key={index} className="overflow-hidden border-border hover:border-primary transition-all duration-300 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={curso.imagen}
                      alt={curso.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className={`absolute top-4 right-4 ${nivelColor(curso.nivel)}`}>
                      {curso.nivel}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {curso.titulo}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Music2 className="w-4 h-4" />
                        {curso.duracion}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Producción Musical (VSTs) */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Producción Musical (VSTs)
                </h2>
                <p className="text-muted-foreground">
                  Aprende a producir música profesional con herramientas digitales
                </p>
              </div>
              <Button variant="outline" className="border-input hover:border-primary hover:bg-muted gap-2">
                Ver Todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {produccion.map((curso, index) => (
                <Card key={index} className="overflow-hidden border-border hover:border-primary transition-all duration-300 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={curso.imagen}
                      alt={curso.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className={`absolute top-4 right-4 ${nivelColor(curso.nivel)}`}>
                      {curso.nivel}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {curso.titulo}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Headphones className="w-4 h-4" />
                        {curso.duracion}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#0080ff]/10 text-[#0080ff] border-[#0080ff]/20 mb-4">
                  Acerca de Nosotros
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tu camino hacia la{" "}
                  <span className="bg-gradient-to-r from-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent">
                    maestría musical
                  </span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  En SteroMusic, creemos que la música es para todos. Nuestra plataforma combina tecnología de vanguardia con métodos de enseñanza probados para ofrecerte la mejor experiencia de aprendizaje musical.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Desde instrumentos clásicos hasta producción digital moderna, nuestros cursos están diseñados por profesionales de la industria para ayudarte a alcanzar tus objetivos musicales.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0080ff]">
                      <Guitar className="w-6 h-6 text-[#0a0a0f]" />
                    </div>
                    <div>
                      <p className="font-semibold">Instrumentos</p>
                      <p className="text-sm text-muted-foreground">Tradicionales y modernos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0080ff]">
                      <Mic2 className="w-6 h-6 text-[#0a0a0f]" />
                    </div>
                    <div>
                      <p className="font-semibold">Producción</p>
                      <p className="text-sm text-muted-foreground">Digital y profesional</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-2xl blur-3xl opacity-20" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769097542113-49f995910fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGVkdWNhdGlvbiUyMHRlYWNoZXIlMjBzdHVkZW50fGVufDF8fHx8MTc3MTAzODIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Educación Musical"
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#13131a] to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              ¿Listo para comenzar tu viaje musical?
            </h2>
            <p className="text-xl text-muted-foreground">
              Únete a miles de estudiantes que ya están aprendiendo con SteroMusic
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-[#00d4ff] to-[#0080ff] hover:opacity-90">
                Comenzar Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-input hover:border-primary hover:bg-muted" asChild>
                <Link to="/nosotros">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
