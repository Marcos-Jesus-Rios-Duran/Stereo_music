import { Link } from "react-router";
import { Home, Search, Compass, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-[#13131a]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Icono 404 */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-full blur-[100px] opacity-20" />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent leading-none">
                404
              </div>
            </div>
          </div>

          {/* Icono de alerta */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20">
              <AlertCircle className="w-10 h-10 text-[#00d4ff]" />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              ¡Ups! Página no encontrada
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Parece que esta página no existe o ha sido movida. No te preocupes, te ayudamos a encontrar lo que buscas.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#00d4ff] to-[#0080ff] hover:opacity-90 gap-2"
              asChild
            >
              <Link to="/">
                <Home className="w-5 h-5" />
                Volver al Inicio
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-input hover:border-primary hover:bg-muted gap-2"
              asChild
            >
              <Link to="/cursos">
                <Compass className="w-5 h-5" />
                Explorar Cursos
              </Link>
            </Button>
          </div>

          {/* Sugerencias */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              También podrías estar buscando:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
                <Link to="/">Inicio</Link>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
                <Link to="/cursos">Cursos</Link>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
                <Link to="/nosotros">Nosotros</Link>
              </Button>
            </div>
          </div>

          {/* Búsqueda */}
          <div className="pt-8">
            <div className="max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-3">
                ¿Buscas algo específico?
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Buscar cursos..."
                  className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
