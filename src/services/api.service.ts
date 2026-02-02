// Mock API Service - Fetches data from external mock API
import type { User } from '../types/user.types';

// Mock API endpoint with 500 user records
const USERS_ENDPOINT = 'https://api.mocki.io/v2/36ogb2w9/userz';

/**
 * Fetch all users from mock API
 */
export const fetchUsersFromAPI = async (): Promise<User[]> => {
  try {
    const response = await fetch(USERS_ENDPOINT);
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
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
  const activeUsers = users.filter(u => u.status.toLowerCase() === 'active').length;
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
