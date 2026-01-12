import { mockUsers } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import UserDetailsClient from './UserDetailsClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const user = mockUsers.find(u => u.id === id);
  
  if (!user) {
    notFound();
  }

  return <UserDetailsClient user={user} />;
}
