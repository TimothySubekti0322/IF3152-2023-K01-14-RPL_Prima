import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:h-screen w-screen bg-[#EEEEEE] text-black">
      <div className="flex flex-col md:h-screen md:flex-row md:overflow-hidden">
        <div className="absolute flex items-center justify-between md:relative md:flex-none md:w-64">
          <Sidebar />
        </div>
        <div className="md:flex-grow md:overflow-y-auto">
          <Header />
          <div className="p-6 md:p-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
