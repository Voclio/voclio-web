import { User, ApiKey, Log, AppConfig, ApiUsage } from './types';

export const mockUsers: User[] = [
  { 
    id: '1', email: 'john@example.com', name: 'John Doe', subscription_tier: 'pro', is_active: true, 
    created_at: '2025-01-01T10:00:00Z', updated_at: '2025-01-01T10:00:00Z', last_login: '2025-01-12T08:30:00Z', api_calls_count: 1250,
    tasks: [
      { id: 't1', title: 'Complete onboarding', description: 'Finish the user onboarding flow', status: 'completed', priority: 'high', created_at: '2025-01-05T10:00:00Z', completed_at: '2025-01-06T14:00:00Z' },
      { id: 't2', title: 'Review API documentation', description: 'Go through the API docs', status: 'in_progress', priority: 'medium', created_at: '2025-01-10T09:00:00Z' },
      { id: 't3', title: 'Set up webhooks', status: 'pending', priority: 'low', created_at: '2025-01-11T11:00:00Z' },
    ],
    notes: [
      { id: 'n1', title: 'VIP Customer', content: 'High-value customer, prioritize support requests. Has been with us since beta.', is_pinned: true, created_at: '2025-01-02T10:00:00Z', updated_at: '2025-01-02T10:00:00Z' },
      { id: 'n2', title: 'Feature Request', content: 'Requested bulk export feature for Q1 2025', is_pinned: false, created_at: '2025-01-08T15:00:00Z', updated_at: '2025-01-08T15:00:00Z' },
    ]
  },
  { 
    id: '2', email: 'jane@example.com', name: 'Jane Smith', subscription_tier: 'enterprise', is_active: true, 
    created_at: '2024-12-15T14:00:00Z', updated_at: '2024-12-15T14:00:00Z', last_login: '2025-01-11T16:45:00Z', api_calls_count: 3420,
    tasks: [
      { id: 't4', title: 'Migrate to new API version', status: 'in_progress', priority: 'urgent', created_at: '2025-01-09T10:00:00Z' },
    ],
    notes: [
      { id: 'n3', title: 'Enterprise Deal', content: 'Signed 2-year enterprise contract. Account manager: Sarah', is_pinned: true, created_at: '2024-12-15T14:00:00Z', updated_at: '2024-12-15T14:00:00Z' },
    ]
  },
  { 
    id: '3', email: 'bob@example.com', name: 'Bob Wilson', subscription_tier: 'basic', is_active: false, 
    created_at: '2024-11-20T09:00:00Z', updated_at: '2024-11-20T09:00:00Z', last_login: '2024-12-01T11:00:00Z', api_calls_count: 89,
    tasks: [],
    notes: [
      { id: 'n4', title: 'Churned User', content: 'Left due to pricing concerns. Might return with discount offer.', is_pinned: false, created_at: '2024-12-05T10:00:00Z', updated_at: '2024-12-05T10:00:00Z' },
    ]
  },
  { 
    id: '4', email: 'alice@example.com', name: 'Alice Brown', subscription_tier: 'free', is_active: true, 
    created_at: '2025-01-05T12:00:00Z', updated_at: '2025-01-05T12:00:00Z', last_login: '2025-01-10T09:15:00Z', api_calls_count: 45,
    tasks: [
      { id: 't5', title: 'Upgrade to Pro', description: 'Considering upgrade', status: 'pending', priority: 'medium', created_at: '2025-01-07T10:00:00Z' },
    ],
    notes: []
  },
  { 
    id: '5', email: 'charlie@example.com', name: 'Charlie Davis', subscription_tier: 'pro', is_active: true, 
    created_at: '2024-10-10T08:00:00Z', updated_at: '2024-10-10T08:00:00Z', last_login: '2025-01-12T07:00:00Z', api_calls_count: 2100,
    tasks: [
      { id: 't6', title: 'Integration testing', status: 'completed', priority: 'high', created_at: '2025-01-01T10:00:00Z', completed_at: '2025-01-03T16:00:00Z' },
      { id: 't7', title: 'Security audit', status: 'in_progress', priority: 'urgent', created_at: '2025-01-10T10:00:00Z' },
    ],
    notes: [
      { id: 'n5', title: 'Technical Contact', content: 'Prefers email communication. Very technical, works with our API team directly.', is_pinned: false, created_at: '2024-10-15T10:00:00Z', updated_at: '2024-10-15T10:00:00Z' },
    ]
  },
  { 
    id: '6', email: 'diana@example.com', name: 'Diana Prince', subscription_tier: 'enterprise', is_active: true, 
    created_at: '2024-09-01T08:00:00Z', updated_at: '2024-09-01T08:00:00Z', last_login: '2025-01-12T10:00:00Z', api_calls_count: 5600,
    tasks: [],
    notes: []
  },
  { 
    id: '7', email: 'evan@example.com', name: 'Evan Rogers', subscription_tier: 'basic', is_active: true, 
    created_at: '2024-12-01T08:00:00Z', updated_at: '2024-12-01T08:00:00Z', last_login: '2025-01-11T14:00:00Z', api_calls_count: 320,
    tasks: [],
    notes: []
  },
  { 
    id: '8', email: 'fiona@example.com', name: 'Fiona Green', subscription_tier: 'pro', is_active: false, 
    created_at: '2024-08-15T08:00:00Z', updated_at: '2024-08-15T08:00:00Z', last_login: '2024-11-20T09:00:00Z', api_calls_count: 890,
    tasks: [],
    notes: []
  },
];

export const mockApiKeys: ApiKey[] = [
  { id: '1', name: 'Production API', key: 'voc_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx', is_active: true, created_at: '2025-01-01T10:00:00Z', last_used: '2025-01-12T09:00:00Z', permissions: ['read', 'write'] },
  { id: '2', name: 'Development API', key: 'voc_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx', is_active: true, created_at: '2024-12-20T14:00:00Z', last_used: '2025-01-11T15:30:00Z', permissions: ['read'] },
  { id: '3', name: 'Legacy Integration', key: 'voc_live_oldxxxxxxxxxxxxxxxxxxxxxxxxx', is_active: false, created_at: '2024-06-15T09:00:00Z', last_used: '2024-11-01T10:00:00Z', permissions: ['read'] },
  { id: '4', name: 'Mobile App', key: 'voc_live_mobxxxxxxxxxxxxxxxxxxxxxxxxx', is_active: true, created_at: '2024-11-01T10:00:00Z', last_used: '2025-01-12T08:00:00Z', permissions: ['read', 'write'] },
];

export const mockLogs: Log[] = [
  { id: '1', activity_type: 'login', severity: 'info', message: 'User john@example.com logged in successfully', user_id: '1', user_email: 'john@example.com', ip_address: '192.168.1.100', created_at: '2025-01-12T08:30:00Z' },
  { id: '2', activity_type: 'api_call', severity: 'info', message: 'API request to /users endpoint', user_id: '2', user_email: 'jane@example.com', ip_address: '10.0.0.50', created_at: '2025-01-12T08:25:00Z' },
  { id: '3', activity_type: 'config_change', severity: 'warning', message: 'Rate limiting configuration updated', user_id: '1', user_email: 'john@example.com', ip_address: '192.168.1.100', created_at: '2025-01-12T08:20:00Z' },
  { id: '4', activity_type: 'api_call', severity: 'error', message: 'API rate limit exceeded for user', user_id: '3', user_email: 'bob@example.com', ip_address: '172.16.0.25', created_at: '2025-01-12T08:15:00Z' },
  { id: '5', activity_type: 'user_update', severity: 'info', message: 'User subscription upgraded to Pro', user_id: '4', user_email: 'alice@example.com', ip_address: '192.168.1.105', created_at: '2025-01-12T08:10:00Z' },
  { id: '6', activity_type: 'login', severity: 'critical', message: 'Multiple failed login attempts detected', user_id: undefined, user_email: 'unknown@attacker.com', ip_address: '203.0.113.50', created_at: '2025-01-12T08:05:00Z' },
  { id: '7', activity_type: 'api_call', severity: 'info', message: 'Bulk export completed successfully', user_id: '2', user_email: 'jane@example.com', ip_address: '10.0.0.50', created_at: '2025-01-12T07:55:00Z' },
  { id: '8', activity_type: 'logout', severity: 'info', message: 'User charlie@example.com logged out', user_id: '5', user_email: 'charlie@example.com', ip_address: '192.168.1.110', created_at: '2025-01-12T07:50:00Z' },
];

export const mockConfigs: AppConfig[] = [
  { id: '1', key: 'rate_limit_enabled', value: true, type: 'boolean', description: 'Enable API rate limiting for all endpoints', updated_at: '2025-01-10T10:00:00Z' },
  { id: '2', key: 'max_requests_per_minute', value: 100, type: 'number', description: 'Maximum API requests allowed per minute per user', updated_at: '2025-01-10T10:00:00Z' },
  { id: '3', key: 'maintenance_mode', value: false, type: 'boolean', description: 'Enable maintenance mode to block all API requests', updated_at: '2025-01-08T14:00:00Z' },
  { id: '4', key: 'support_email', value: 'support@voclio.com', type: 'string', description: 'Support email address shown to users', updated_at: '2025-01-05T09:00:00Z' },
  { id: '5', key: 'session_timeout_minutes', value: 30, type: 'number', description: 'User session timeout in minutes', updated_at: '2025-01-01T12:00:00Z' },
  { id: '6', key: 'allow_signups', value: true, type: 'boolean', description: 'Allow new user registrations', updated_at: '2025-01-01T12:00:00Z' },
  { id: '7', key: 'max_api_keys_per_user', value: 5, type: 'number', description: 'Maximum number of API keys a user can create', updated_at: '2025-01-01T12:00:00Z' },
];

export const mockApiUsage: ApiUsage = {
  total_requests: 45230,
  total_errors: 1250,
  success_rate: 97.24,
  breakdown: [
    { api_type: 'users', date: '2025-01-12', requests: 1200, errors: 25 },
    { api_type: 'auth', date: '2025-01-12', requests: 3500, errors: 150 },
    { api_type: 'data', date: '2025-01-12', requests: 8900, errors: 320 },
    { api_type: 'users', date: '2025-01-11', requests: 1150, errors: 30 },
    { api_type: 'auth', date: '2025-01-11', requests: 3200, errors: 120 },
    { api_type: 'data', date: '2025-01-11', requests: 8500, errors: 280 },
    { api_type: 'webhooks', date: '2025-01-12', requests: 2100, errors: 45 },
    { api_type: 'webhooks', date: '2025-01-11', requests: 1980, errors: 38 },
  ],
};

// Helper to paginate mock data
export function paginateMockData<T>(data: T[], page: number = 1, limit: number = 10) {
  const start = (page - 1) * limit;
  const paginatedData = data.slice(start, start + limit);
  return {
    data: paginatedData,
    total: data.length,
    page,
    limit,
    total_pages: Math.ceil(data.length / limit),
  };
}
