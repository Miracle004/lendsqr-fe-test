// Mock API Service - Fetches data from external mock API
import type { User } from '../types/user.types';

// Mock API endpoint - using a real mock API service
// In production, this would be replaced with actual API endpoints
// const MOCK_API_BASE_URL = 'https://run.mocky.io/v3';

// For development, we'll use a fallback to locally generated data
// In real implementation, you would create this endpoint on mocky.io with 500 records
// const USERS_ENDPOINT = `${MOCK_API_BASE_URL}/your-mock-endpoint-id`;

/**
 * Fetch all users from mock API
 * In production: This would call the actual mock API endpoint created on mocky.io
 * For now: Returns generated data to simulate API response
 */
export const fetchUsersFromAPI = async (): Promise<User[]> => {
  try {
    // TODO: Replace with actual mocky.io endpoint
    // const response = await fetch(USERS_ENDPOINT);
    // if (!response.ok) throw new Error('Failed to fetch users');
    // return await response.json();
    
    // Temporary: Generate data to simulate API response
    // This should be replaced with actual API call
    const { generateMockUsers } = await import('./mockData.service');
    return generateMockUsers(500);
  } catch (error) {
    console.error('Error fetching users from API:', error);
    throw error;
  }
};

/**
 * Fetch single user by ID
 */
export const fetchUserById = async (id: string): Promise<User | null> => {
  try {
    // TODO: Replace with actual API endpoint
    // const response = await fetch(`${USERS_ENDPOINT}/${id}`);
    // if (!response.ok) throw new Error('User not found');
    // return await response.json();
    
    // Temporary: Fetch from all users
    const users = await fetchUsersFromAPI();
    return users.find(u => u.id === id) || null;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch users with pagination (simulated)
 */
export const fetchUsersPaginated = async (
  page: number = 1,
  pageSize: number = 10
): Promise<{ users: User[]; total: number }> => {
  try {
    const allUsers = await fetchUsersFromAPI();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    
    return {
      users: allUsers.slice(start, end),
      total: allUsers.length,
    };
  } catch (error) {
    console.error('Error fetching paginated users:', error);
    throw error;
  }
};

/**
 * Calculate statistics from users data
 */
export const calculateStats = (users: User[]) => {
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'active').length;
  const usersWithLoans = Math.floor(totalUsers * 0.45);
  const usersWithSavings = Math.floor(totalUsers * 0.78);

  return {
    totalUsers,
    activeUsers,
    usersWithLoans,
    usersWithSavings,
  };
};

/**
 * Setup Instructions for Mock API:
 * 
 * 1. Go to https://www.mocky.io/ or https://json-generator.com/
 * 2. Generate 500 user records using the User type structure
 * 3. Create a mock endpoint with the generated data
 * 4. Replace USERS_ENDPOINT with your generated endpoint URL
 * 5. Remove the temporary generateMockUsers() call
 * 
 * Example mocky.io setup:
 * - Create new mock API
 * - Set status: 200
 * - Content-Type: application/json
 * - Body: Array of 500 User objects
 * - Copy the generated URL and update USERS_ENDPOINT
 */
