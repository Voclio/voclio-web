import { mockApiKeys, paginateMockData } from '@/lib/mock-data';
import ApiKeysClient from './ApiKeysClient';

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ApiKeysPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);

  const keysData = paginateMockData(mockApiKeys, page, 10);

  return <ApiKeysClient initialData={keysData} initialError={null} currentPage={page} />;
}
