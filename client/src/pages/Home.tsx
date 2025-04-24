import CryptoTable from "@/components/CryptoTable";
import PageHeader from "@/components/PageHeader";
import useSimulation from "@/hooks/useSimulation";

const Home = () => {
  // Start the simulation as soon as the component mounts
  useSimulation();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader />
      <CryptoTable />
    </div>
  );
};

export default Home;
