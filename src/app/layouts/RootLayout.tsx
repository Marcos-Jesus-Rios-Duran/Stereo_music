import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
