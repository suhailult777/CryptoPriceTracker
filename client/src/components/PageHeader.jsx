const PageHeader = () => {
  return (
    <header className="mb-4 sm:mb-6 md:mb-8">
      <h1 className="text-xl sm:text-2xl font-bold text-neutral-800">Cryptocurrency Prices by Market Cap</h1>
      <p className="text-sm sm:text-base text-neutral-600 mt-1 sm:mt-2">
        <span className="inline md:hidden">Global crypto market: $4.32T (↑ 2.1%)</span>
        <span className="hidden md:inline">The global cryptocurrency market cap is $4.32T, a 2.1% increase over the last day. 
        Total crypto market volume in the last 24 hours is $142.19B, which makes a 3.7% increase.</span>
      </p>
    </header>
  );
};

export default PageHeader;
