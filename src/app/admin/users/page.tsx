import { mockUsers, paginateMockData } from '@/lib/mock-data';
import UsersClient from './UsersClient';

interface PageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    subscription_tier?: string;
    is_active?: string;
  }>;
}

export default async function UsersPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const page = parseInt(params.page || '1', 10);
  const search = params.search || '';
  const subscription_tier = params.subscription_tier || '';
  const is_active = params.is_active;

  // Filter mock data
  let filteredUsers = [...mockUsers];
  
  if (search) {
    filteredUsers = filteredUsers.filter(u => 
      u.name.toLowerCase().includes(search.toLowerCase()) || 
      u.email.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (subscription_tier) {
    filteredUsers = filteredUsers.filter(u => u.subscription_tier === subscription_tier);
  }
  
  if (is_active === 'true') {
    filteredUsers = filteredUsers.filter(u => u.is_active === true);
  } else if (is_active === 'false') {
    filteredUsers = filteredUsers.filter(u => u.is_active === false);
  }

  const usersData = paginateMockData(filteredUsers, page, 10);

  return (
    <UsersClient
      initialData={usersData}
      initialError={null}
      initialFilters={{ page, search, subscription_tier, is_active: params.is_active || '' }}
    />
  );
}
