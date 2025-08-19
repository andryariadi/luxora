import Nabvar from "@/components/Nabvar";
import ASidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="b-amber-500 w-full flex">
        <ASidebar />

        <main className="b-lime-600">
          <Nabvar />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
