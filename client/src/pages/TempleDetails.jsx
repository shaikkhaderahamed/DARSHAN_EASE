import { useParams } from 'react-router-dom';
import { useTemple } from '@/features/temple';
import { useTempleSlots } from '@/hooks/useSlots';
import { Page } from '@/components/layout/Page';
import { ContentLayout } from '@/components/layout/ContentLayout';
import { MainContent } from '@/components/layout/MainContent';
import { Sidebar } from '@/components/layout/Sidebar';
import { TempleHero } from '@/components/temple/TempleHero';
import { TempleInfo } from '@/components/temple/TempleInfo';
import { TempleReviews } from '@/components/temple/TempleReviews';
import { BookingWizard } from '@/features/booking';
import { DataState } from '@/components/ui/DataState';

const TempleDetails = () => {
  const { id } = useParams();
  
  const { data: temple, isLoading: isTempleLoading, error } = useTemple(id);
  const { data: slots, isLoading: isSlotsLoading } = useTempleSlots(id);

  return (
    <Page>
      <DataState 
        loading={isTempleLoading} 
        error={error} 
        empty={!temple}
        emptyTitle="Temple not found"
      >
        <TempleHero temple={temple} />

        <ContentLayout>
          <MainContent>
            <TempleInfo temple={temple} />
            <TempleReviews templeId={id} />
          </MainContent>

          <Sidebar>
            <BookingWizard 
              templeId={id} 
              slots={slots} 
              isSlotsLoading={isSlotsLoading} 
            />
          </Sidebar>
        </ContentLayout>
      </DataState>
    </Page>
  );
};

export default TempleDetails;
