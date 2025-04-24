import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CryptoTableRow from "./CryptoTableRow";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const CryptoTable = () => {
  const { assets } = useSelector((state: RootState) => state.crypto);

  return (
    <div className="overflow-x-auto pb-4 crypto-table-container">
      <table className="min-w-full bg-white" id="crypto-table">
        <thead>
          <tr>
            <th>
              <span className="sr-only">Favorite</span>
            </th>
            <th>
              #
            </th>
            <th>
              Name
            </th>
            <th>
              Price
            </th>
            <th>
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
            <th>
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
            <th>
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
            <th>
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
            <th>
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
            <th>
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((crypto) => (
            <CryptoTableRow key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
