import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter } from '@/icons';
import useDebounce from '@/hooks/useDebounce';
import { useTemples } from '@/features/temple';
import { Page } from '@/components/layout/Page';
import { TempleResults } from '@/features/temple/components/TempleResults';
import { Button } from '@/components/ui/Button';
import { templeImages } from '@/assets/temples';

const TempleList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  
  const [localSearch, setLocalSearch] = useState(search);
  const debouncedSearchTerm = useDebounce(localSearch, 500);

  useEffect(() => {
    if (debouncedSearchTerm !== search) {
      setSearchParams({ search: debouncedSearchTerm, page: 1 });
    }
  }, [debouncedSearchTerm, search, setSearchParams]);

  const queryStr = new URLSearchParams();
  if (debouncedSearchTerm) queryStr.append('search', debouncedSearchTerm);
  queryStr.append('page', page);
  queryStr.append('limit', 9);

  const { data, isLoading, error } = useTemples(queryStr.toString());

  const handlePageChange = (newPage) => {
    const params = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...params, page: newPage });
  };

  return (
    <Page>
      {/* Hero Banner */}
      <div className="relative bg-darkbrown-900 text-white py-24 px-4 text-center overflow-hidden -mt-0">
        <div className="absolute inset-0">
          <img
            src={templeImages['Lingaraja Temple']}
            alt="Temples"
            className="w-full h-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkbrown-900/70 via-darkbrown-900/50 to-darkbrown-900/90" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-saffron-500" />
            <span className="text-saffron-400 text-sm font-medium tracking-widest uppercase">Sacred Destinations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white leading-tight">
            Discover <span className="text-saffron-500">Temples</span>
          </h1>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Book your darshan slots at India's most sacred temples. Guaranteed entry, zero wait time.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search by temple name, city, or state..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white text-darkbrown-900 placeholder-gray-400 shadow-2xl focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base"
            />
            {localSearch && (
              <button
                onClick={() => setLocalSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex items-center justify-between py-6 border-b border-gray-200 mb-2">
          <p className="text-gray-600 text-sm">
            {isLoading ? 'Loading temples...' : `Showing ${data?.count ?? 0} of ${data?.total ?? 0} temples`}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>All Temples</span>
          </div>
        </div>

        <TempleResults 
          data={data}
          isLoading={isLoading}
          error={error}
          page={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </Page>
  );
};

export default TempleList;
