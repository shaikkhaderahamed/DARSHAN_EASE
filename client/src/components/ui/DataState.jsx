import { EmptyState } from '@/components/ui/EmptyState';
import { PageLoader } from '@/components/ui/Loader';

export const DataState = ({ 
  loading, 
  error, 
  empty, 
  loadingComponent,
  errorTitle = "Failed to load data",
  errorDescription = "Please try again later.",
  emptyTitle = "No data found",
  emptyDescription = "",
  emptyIcon,
  children 
}) => {
  if (loading) {
    return loadingComponent || <PageLoader />;
  }

  if (error) {
    return (
      <EmptyState 
        title={errorTitle} 
        description={errorDescription}
        className="border-red-100 bg-red-50 text-red-600"
      />
    );
  }

  if (empty) {
    return (
      <EmptyState 
        icon={emptyIcon}
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return children;
};
