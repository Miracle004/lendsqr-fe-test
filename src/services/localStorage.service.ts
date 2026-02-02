// LocalStorage service for caching user details on user details page
// As per requirement: "Use local storage or IndexedDB to store and retrieve user details on the user details page"
import type { User } from '../types/user.types';

const USER_DETAILS_KEY = 'lendsqr_user_details';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

interface CachedUser {
  user: User;
  timestamp: number;
}

/**
 * Save user details to localStorage (for user details page)
 */
export const cacheUserDetails = (user: User): void => {
  try {
    const cached: CachedUser = {
      user,
      timestamp: Date.now(),
    };
    localStorage.setItem(`${USER_DETAILS_KEY}_${user.id}`, JSON.stringify(cached));
  } catch (error) {
    console.error('Error caching user details:', error);
  }
};

/**
 * Get cached user details from localStorage
 * Returns null if cache is expired or doesn't exist
 */
export const getCachedUserDetails = (userId: string): User | null => {
  try {
    const cached = localStorage.getItem(`${USER_DETAILS_KEY}_${userId}`);
    if (!cached) return null;

    const { user, timestamp }: CachedUser = JSON.parse(cached);
    
    // Check if cache is still valid
    if (Date.now() - timestamp > CACHE_DURATION) {
      clearCachedUser(userId);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error retrieving cached user:', error);
    return null;
  }
};

/**
 * Clear specific user from cache
 */
export const clearCachedUser = (userId: string): void => {
  try {
    localStorage.removeItem(`${USER_DETAILS_KEY}_${userId}`);
  } catch (error) {
    console.error('Error clearing cached user:', error);
  }
};

/**
 * Clear all cached user details
 */
export const clearAllCachedUsers = (): void => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(USER_DETAILS_KEY)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Error clearing all cached users:', error);
  }
};

/**
 * Check if user details are cached
 */
export const hasValidCache = (userId: string): boolean => {
  return getCachedUserDetails(userId) !== null;
};
