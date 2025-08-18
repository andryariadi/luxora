import Nabvar from "@/components/Nabvar";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="b-amber-500 flex">
      <Sidebar />
      <main className="b-lime-600">
        <Nabvar />
        {children}
      </main>
    </div>
  );
}
