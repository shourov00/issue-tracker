import { Card, Flex } from '@radix-ui/themes';
import { Skeleton } from '@/app/components';

const LoadingIssueDetailPage = () => {
  return (
    <div className={'max-w-xl'}>
      <Skeleton />
      <Flex align={'center'} gap={'3'} my={'2'}>
        <Skeleton width={'5rem'} />
        <Skeleton width={'8rem'} />
      </Flex>

      <Card className='prose' mt={'4'}>
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
