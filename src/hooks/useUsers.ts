// Custom hooks for user data management
import { useState, useEffect } from 'react';
import { fetchUsersFromAPI, fetchUserById, fetchUsersPaginated, calculateStats } from '../services/api.service';
import { getCachedUserDetails, cacheUserDetails } from '../services/localStorage.service';
import type { User } from '../types/user.types';

// Hook to fetch all users from API
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUsersFromAPI();
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, isLoading, error };
};

// Hook to fetch users with pagination
export const useUsersPaginated = (page: number = 1, pageSize: number = 10) => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const result = await fetchUsersPaginated(page, pageSize);
        setUsers(result.users);
        setTotal(result.total);
      } catch (err) {
        console.error('Error fetching paginated users:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [page, pageSize]);

  return { users, total, isLoading, error, totalPages: Math.ceil(total / pageSize) };
};

// Hook to fetch single user (with localStorage caching for user details page)
export const useUserDetails = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        
        // Check localStorage cache first
        const cachedUser = getCachedUserDetails(userId);
        if (cachedUser) {
          console.log('✅ User details loaded from cache');
          setUser(cachedUser);
          setIsLoading(false);
          return;
        }

        // Fetch from API if not cached
        console.log('📡 Fetching user details from API...');
        const data = await fetchUserById(userId);
        if (data) {
          setUser(data);
          // Cache for future use
          cacheUserDetails(data);
        }
      } catch (err) {
        console.error('Error fetching user details:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch user details');
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return { user, isLoading, error };
};

// Hook to get user statistics
export const useUserStats = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    usersWithLoans: 0,
    usersWithSavings: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshStats = async () => {
    try {
      setIsLoading(true);
      const users = await fetchUsersFromAPI();
      const calculatedStats = calculateStats(users);
      setStats(calculatedStats);
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch stats');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshStats();
  }, []);

  return { stats, isLoading, error, refreshStats };
};
