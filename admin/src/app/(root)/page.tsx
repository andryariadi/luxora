import BrowserUsegePieChart from "@/components/BrowserUsegePieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import TotalRevenueBarChart from "@/components/TotalRevenueBarChart";
import TotalVisitorAreaChart from "@/components/TotalVisitorAreaChart";

export default function HomePage() {
  return (
    <div
      className="b-rose-500 px-4 py-3
     grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"
    >
      <div className="bg-primary-foreground shadow-sm dark:shadow-none p-4 rounded-lg border border-sidebar-border lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <TotalRevenueBarChart />
      </div>

      <div className="bg-sky-500 shadow-sm dark:shadow-none p-4 rounded-lg border border-sidebar-border">
        <CardList title="Lates Transactions" />
      </div>

      <div className="bg-green-500 shadow-sm dark:shadow-none p-4 rounded-lg border border-sidebar-border">
        <BrowserUsegePieChart />
      </div>

      <div className="bg-fuchsia-500 shadow-sm dark:shadow-none p-4 rounded-lg border border-sidebar-border">
        <TodoList />
      </div>

      <div className="bg-teal-500 shadow-sm dark:shadow-none p-4 rounded-lg border border-sidebar-border lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <TotalVisitorAreaChart />
      </div>

      <div className="bg-violet-500 shadow-sm dark:shadow-none p-4 rounded-lg border border-sidebar-border">
        <CardList title="Popular Products" />
      </div>
    </div>
  );
}
