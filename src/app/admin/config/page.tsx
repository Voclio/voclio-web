import { mockConfigs } from '@/lib/mock-data';
import ConfigClient from './ConfigClient';

export default function ConfigPage() {
  return <ConfigClient initialData={mockConfigs} initialError={null} />;
}
