import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Users, Target, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Nosotros() {
  const valores = [
    {
      icono: Target,
      titulo: "Misión",
      descripcion: "Democratizar la educación musical mediante tecnología accesible y contenido de calidad profesional.",
    },
    {
      icono: Award,
      titulo: "Excelencia",
      descripcion: "Cursos creados por músicos profesionales con años de experiencia en la industria musical.",
    },
    {
      icono: Users,
      titulo: "Comunidad",
      descripcion: "Una red global de estudiantes y profesores apasionados por la música.",
    },
    {
      icono: Heart,
      titulo: "Pasión",
      descripcion: "Creemos que la música tiene el poder de transformar vidas y conectar personas.",
    },
  ];

  const stats = [
    { numero: "5,000+", label: "Estudiantes Activos" },
    { numero: "50+", label: "Cursos Disponibles" },
    { numero: "20+", label: "Instructores Expertos" },
    { numero: "15+", label: "Países" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#13131a] to-background py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20 px-4 py-1.5">
              Sobre SteroMusic
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Transformamos vidas a través de la{" "}
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent">
                música
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Somos una plataforma educativa dedicada a enseñar música moderna con las mejores herramientas y metodologías.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent mb-2">
                    {stat.numero}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-2xl blur-3xl opacity-20" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769097542113-49f995910fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGVkdWNhdGlvbiUyMHRlYWNoZXIlMjBzdHVkZW50fGVufDF8fHx8MTc3MTAzODIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nuestra Historia"
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Nuestra Historia
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  SteroMusic nació de la visión de hacer la educación musical de calidad accesible para todos. Fundada en 2020 por un grupo de músicos profesionales y educadores, hemos crecido hasta convertirnos en una de las plataformas educativas musicales más respetadas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Combinamos la tradición de la enseñanza musical clásica con las tecnologías más avanzadas, ofreciendo cursos que van desde instrumentos tradicionales hasta producción musical digital con VSTs y software profesional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro equipo está compuesto por músicos profesionales, productores de renombre y educadores experimentados que han trabajado con artistas de talla mundial y en proyectos internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían nuestra misión de transformar la educación musical
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor, index) => (
                <Card key={index} className="border-border hover:border-primary transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0080ff] group-hover:scale-110 transition-transform">
                      <valor.icono className="w-7 h-7 text-[#0a0a0f]" />
                    </div>
                    <h3 className="font-semibold text-lg">{valor.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {valor.descripcion}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Nuestra Metodología
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En SteroMusic, utilizamos un enfoque de aprendizaje progresivo y práctico. Cada curso está estructurado para que puedas avanzar a tu propio ritmo, con ejercicios prácticos y proyectos reales.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0080ff] flex items-center justify-center text-xs font-bold text-[#0a0a0f]">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Aprende los Fundamentos</h4>
                      <p className="text-sm text-muted-foreground">
                        Comienza con las bases sólidas de la teoría y técnica musical.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0080ff] flex items-center justify-center text-xs font-bold text-[#0a0a0f]">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Práctica Guiada</h4>
                      <p className="text-sm text-muted-foreground">
                        Ejercicios prácticos con retroalimentación inmediata.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0080ff] flex items-center justify-center text-xs font-bold text-[#0a0a0f]">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Proyectos Reales</h4>
                      <p className="text-sm text-muted-foreground">
                        Aplica lo aprendido en proyectos musicales reales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff] to-[#00d4ff] rounded-2xl blur-3xl opacity-20" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646049492315-834855634819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBtaXhlcnxlbnwxfHx8fDE3NzEwMzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Metodología"
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#13131a] to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Únete a la Familia SteroMusic
            </h2>
            <p className="text-xl text-muted-foreground">
              Miles de estudiantes ya están aprendiendo con nosotros
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
