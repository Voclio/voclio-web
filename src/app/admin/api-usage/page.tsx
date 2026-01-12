import { mockApiUsage } from '@/lib/mock-data';
import ApiUsageClient from './ApiUsageClient';

interface PageProps {
  searchParams: Promise<{
    start_date?: string;
    end_date?: string;
    api_type?: string;
  }>;
}

export default async function ApiUsagePage({ searchParams }: PageProps) {
  const params = await searchParams;

  // Filter breakdown if api_type is specified
  let usageData = { ...mockApiUsage };
  
  if (params.api_type) {
    usageData = {
      ...usageData,
      breakdown: usageData.breakdown.filter(b => b.api_type === params.api_type)
    };
  }

  return (
    <ApiUsageClient
      initialData={usageData}
      initialError={null}
      initialFilters={{
        start_date: params.start_date || '',
        end_date: params.end_date || '',
        api_type: params.api_type || '',
      }}
    />
  );
}
