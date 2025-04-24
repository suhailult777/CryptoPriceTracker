import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CryptoTableRow from "./CryptoTableRow";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const CryptoTable = () => {
  const { assets } = useSelector((state: RootState) => state.crypto);

  return (
    <div className="overflow-x-auto pb-4 crypto-table-container">
      <table className="min-w-full bg-white rounded-lg shadow" id="crypto-table">
        <thead className="bg-neutral-100 sticky top-0">
          <tr>
            <th className="py-3 pl-4 pr-3 text-left text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap sticky left-0 bg-neutral-100 z-10">
              <span className="sr-only">Favorite</span>
            </th>
            <th className="py-3 px-3 text-left text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              #
            </th>
            <th className="py-3 px-3 text-left text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              Name
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              Price
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              1h %
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1 text-neutral-200" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price change in the last hour</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              24h %
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1 text-neutral-200" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price change in the last 24 hours</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              7d %
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1 text-neutral-200" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price change in the last 7 days</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              Market Cap
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1 text-neutral-200" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total market value of circulating supply</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              Volume(24h)
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1 text-neutral-200" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Trading volume in the last 24 hours</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              Circulating Supply
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center ml-1 text-neutral-200" type="button">
                      <Info className="h-3 w-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Amount of coins currently in circulation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="py-3 px-3 text-right text-xs font-medium text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {assets.map((crypto) => (
            <CryptoTableRow key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
