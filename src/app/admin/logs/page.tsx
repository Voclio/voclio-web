import { mockLogs, paginateMockData } from '@/lib/mock-data';
import LogsClient from './LogsClient';

interface PageProps {
  searchParams: Promise<{
    page?: string;
    activity_type?: string;
    severity?: string;
    start_date?: string;
    end_date?: string;
  }>;
}

export default async function LogsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const page = parseInt(params.page || '1', 10);

  // Filter mock data
  let filteredLogs = [...mockLogs];
  
  if (params.activity_type) {
    filteredLogs = filteredLogs.filter(l => l.activity_type === params.activity_type);
  }
  
  if (params.severity) {
    filteredLogs = filteredLogs.filter(l => l.severity === params.severity);
  }

  const logsData = paginateMockData(filteredLogs, page, 20);

  return (
    <LogsClient
      initialData={logsData}
      initialError={null}
      initialFilters={{
        page,
        activity_type: params.activity_type || '',
        severity: params.severity || '',
        start_date: params.start_date || '',
        end_date: params.end_date || '',
      }}
    />
  );
}
