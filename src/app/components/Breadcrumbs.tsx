import { Link, useMatches } from "react-router";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function Breadcrumbs() {
  const matches = useMatches();
  
  // Filtrar rutas y obtener información de breadcrumb
  const crumbs = matches
    .filter((match: any) => match.handle?.breadcrumb)
    .map((match: any) => ({
      label: match.handle.breadcrumb,
      path: match.pathname,
    }));

  if (crumbs.length === 0) {
    return null;
  }

  return (
    <div className="border-b border-border bg-card/50">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Inicio</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {crumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center gap-2">
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {index === crumbs.length - 1 ? (
                    <BreadcrumbPage className="text-primary">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={crumb.path} className="hover:text-primary transition-colors">
                        {crumb.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
