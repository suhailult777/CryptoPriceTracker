import CryptoTable from "@/components/CryptoTable";
import PageHeader from "@/components/PageHeader";
import useSimulation from "@/hooks/useSimulation";

const Home = () => {
  // Start the simulation as soon as the component mounts
  useSimulation();
  
  return (
    <div className="w-full mx-auto px-2 py-4 sm:px-4 md:px-6 lg:px-8 xl:max-w-7xl">
      <PageHeader />
      <CryptoTable />
    </div>
  );
};

export default Home;
