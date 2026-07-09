import { TempleCard } from '@/components/temple/TempleCard';
import { Button } from '@/components/ui/Button';
import { DataState } from '@/components/ui/DataState';
import { Filter } from '@/icons';

export const TempleResults = ({ data, isLoading, error, page, handlePageChange }) => {
  return (
    <DataState 
      loading={isLoading}
      error={error}
      empty={data?.data?.length === 0}
      emptyIcon={Filter}
      emptyTitle="No temples found"
      emptyDescription="Try adjusting your search criteria."
      loadingComponent={
        <div className="temple-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card p-0 overflow-hidden animate-pulse">
              <div className="h-56 bg-gray-200" />
              <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-10 bg-gray-200 rounded w-full mt-4" />
              </div>
            </div>
          ))}
        </div>
      }
    >
      <div className="temple-grid">
        {data?.data?.map((temple, idx) => (
          <TempleCard key={temple._id} temple={temple} idx={idx} />
        ))}
      </div>
      
      {data?.total > 0 && (
        <div className="flex justify-center items-center mt-12 gap-4">
          <Button 
            variant="outline"
            onClick={() => handlePageChange(page - 1)}
            disabled={!data?.pagination?.prev}
          >
            Previous
          </Button>
          <span className="text-gray-600 font-medium text-sm">
            Page {page} of {Math.ceil(data.total / 9)}
          </span>
          <Button 
            variant="outline"
            onClick={() => handlePageChange(page + 1)}
            disabled={!data?.pagination?.next}
          >
            Next
          </Button>
        </div>
      )}
    </DataState>
  );
};
