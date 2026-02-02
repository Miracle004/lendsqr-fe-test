// Mock API Service - Fetches data from external mock API
import type { User } from '../types/user.types';

// Mock API endpoint with 500 user records
const USERS_ENDPOINT = 'https://api.mocki.io/v2/36ogb2w9/userz';

/**
 * Fetch all users from mock API
 */
export const fetchUsersFromAPI = async (): Promise<User[]> => {
  try {
    console.log('Fetching users from:', USERS_ENDPOINT);
    const response = await fetch(USERS_ENDPOINT);
    console.log('Response status:', response.status, response.statusText);
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    console.log('Fetched users count:', data.length);
    return data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
    throw error;
  }
};

/**
 * Enrich basic user data with extended fields needed for user details page
 * Note: mocky.io API only provides basic user fields (id, username, email, etc.)
 * This function generates the additional fields required by the UserDetailsPage component
 */
const generateExtendedUserData = (user: any): User => {
  const names = ['Grace', 'Debby', 'Michael', 'Sarah', 'John', 'Emma', 'David', 'Lisa'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  
  return {
    ...user,
    personalInfo: {
      fullName: user.username || randomName,
      phoneNumber: user.phoneNumber || '08012345678',
      email: user.email,
      bvn: '22345678901',
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
      maritalStatus: ['Single', 'Married', 'Divorced'][Math.floor(Math.random() * 3)],
      children: Math.random() > 0.5 ? 'None' : String(Math.floor(Math.random() * 3) + 1),
      typeOfResidence: ['Parent\'s Apartment', 'Rented Apartment', 'Own House'][Math.floor(Math.random() * 3)],
    },
    educationAndEmployment: {
      levelOfEducation: ['B.Sc', 'M.Sc', 'Ph.D', 'HND', 'OND'][Math.floor(Math.random() * 5)],
      employmentStatus: ['Employed', 'Self-employed', 'Unemployed'][Math.floor(Math.random() * 3)],
      sectorOfEmployment: ['FinTech', 'Healthcare', 'Education', 'Technology', 'Agriculture'][Math.floor(Math.random() * 5)],
      durationOfEmployment: ['1 year', '2 years', '3 years', '5 years'][Math.floor(Math.random() * 4)],
      officeEmail: `${user.username}@company.com`.toLowerCase(),
      monthlyIncome: `₦${(Math.floor(Math.random() * 400) + 100) * 1000} - ₦${(Math.floor(Math.random() * 400) + 300) * 1000}`,
      loanRepayment: `₦${Math.floor(Math.random() * 50000) + 10000}`,
    },
    socials: {
      twitter: `@${user.username}`.toLowerCase(),
      facebook: user.username,
      instagram: `@${user.username}_`.toLowerCase(),
    },
    guarantor: {
      fullName: randomName + ' ' + ['Doe', 'Smith', 'Johnson', 'Williams'][Math.floor(Math.random() * 4)],
      phoneNumber: '080' + Math.floor(Math.random() * 100000000),
      email: `guarantor${Math.floor(Math.random() * 1000)}@mail.com`,
      relationship: ['Sister', 'Brother', 'Friend', 'Colleague'][Math.floor(Math.random() * 4)],
    },
    bankDetails: {
      accountNumber: String(Math.floor(Math.random() * 9000000000) + 1000000000),
      accountName: user.username || randomName,
      bankName: ['GTBank', 'First Bank', 'Access Bank', 'Zenith Bank', 'UBA'][Math.floor(Math.random() * 5)],
    },
  } as User;
};

/**
 * Fetch single user by ID
 */
export const fetchUserById = async (id: string): Promise<User | null> => {
  try {
    const users = await fetchUsersFromAPI();
    const user = users.find(u => u.id === id);
    if (!user) return null;
    
    // Enrich with extended data if not present
    return generateExtendedUserData(user);
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
