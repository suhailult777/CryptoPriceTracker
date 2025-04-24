import { useSelector } from "react-redux";
import CryptoTableRow from "./CryptoTableRow";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CryptoTable = () => {
  const { assets } = useSelector((state) => state.crypto);
  const isMobile = useIsMobile();

  return (
    <div className="overflow-x-auto pb-4 crypto-table-container rounded-md shadow-sm border border-gray-100">
      <table className="min-w-full bg-white" id="crypto-table">
        <thead>
          <tr>
            <th className="hidden sm:table-cell">
              <span className="sr-only">Favorite</span>
            </th>
            <th className="hidden sm:table-cell">
              #
            </th>
            <th>
              Name
            </th>
            <th>
              Price
            </th>
            <th className="hidden md:table-cell">
              1h %
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price change in the last hour</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th>
              24h %
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price change in the last 24 hours</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="hidden lg:table-cell">
              7d %
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price change in the last 7 days</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="hidden md:table-cell">
              Market Cap
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total market value of circulating supply</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="hidden lg:table-cell">
              Volume(24h)
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Trading volume in the last 24 hours</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="hidden xl:table-cell">
              Circulating Supply
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Amount of coins currently in circulation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="hidden xl:table-cell">
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((crypto) => (
            <CryptoTableRow key={crypto.id} crypto={crypto} isMobile={isMobile} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
