import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cacheUserDetails, getCachedUserDetails, clearCachedUser, clearAllCachedUsers } from './localStorage.service';
import type { User } from '../types/user.types';

describe('localStorage.service', () => {
  const mockUser: User = {
    id: 'USR-00001',
    organization: 'Test Org',
    username: 'testuser',
    email: 'test@example.com',
    phoneNumber: '08012345678',
    dateJoined: '2022-01-01T00:00:00Z',
    status: 'active',
    personalInfo: {
      fullName: 'Test User',
      phoneNumber: '08012345678',
      email: 'test@example.com',
      bvn: '12345678901',
      gender: 'Male',
      maritalStatus: 'Single',
      children: 'None',
      typeOfResidence: 'Rented Apartment',
    },
    educationAndEmployment: {
      levelOfEducation: 'B.Sc',
      employmentStatus: 'Employed',
      sectorOfEmployment: 'FinTech',
      durationOfEmployment: '2 years',
      officeEmail: 'testuser@company.com',
      monthlyIncome: '₦200,000 - ₦400,000',
      loanRepayment: '₦40,000',
    },
    socials: {
      twitter: '@testuser',
      facebook: 'testuser',
      instagram: '@testuser_',
    },
    guarantor: {
      fullName: 'Guarantor Name',
      phoneNumber: '08098765432',
      email: 'guarantor@example.com',
      relationship: 'Friend',
    },
    bankDetails: {
      accountNumber: '1234567890',
      accountName: 'Test User',
      bankName: 'Test Bank',
    },
  };

  beforeEach(() => {
    localStorage.clear();
  });

  describe('cacheUserDetails', () => {
    it('should cache user details to localStorage', () => {
      cacheUserDetails(mockUser);

      const cached = localStorage.getItem(`lendsqr_user_details_${mockUser.id}`);
      expect(cached).toBeTruthy();

      const parsed = JSON.parse(cached!);
      expect(parsed.user.id).toBe(mockUser.id);
      expect(parsed.timestamp).toBeDefined();
    });

    it('should include timestamp when caching', () => {
      const beforeCache = Date.now();
      cacheUserDetails(mockUser);
      const afterCache = Date.now();

      const cached = localStorage.getItem(`lendsqr_user_details_${mockUser.id}`);
      const parsed = JSON.parse(cached!);

      expect(parsed.timestamp).toBeGreaterThanOrEqual(beforeCache);
      expect(parsed.timestamp).toBeLessThanOrEqual(afterCache);
    });
  });

  describe('getCachedUserDetails', () => {
    it('should return cached user if valid', () => {
      cacheUserDetails(mockUser);

      const retrieved = getCachedUserDetails(mockUser.id);

      expect(retrieved).not.toBeNull();
      expect(retrieved?.id).toBe(mockUser.id);
      expect(retrieved?.username).toBe(mockUser.username);
    });

    it('should return null if cache does not exist', () => {
      const retrieved = getCachedUserDetails('non-existent-id');
      expect(retrieved).toBeNull();
    });

    it('should return null if cache is expired', () => {
      // Cache with expired timestamp (31 minutes ago)
      const expiredTimestamp = Date.now() - (31 * 60 * 1000);
      const cachedData = {
        user: mockUser,
        timestamp: expiredTimestamp,
      };

      localStorage.setItem(
        `lendsqr_user_details_${mockUser.id}`,
        JSON.stringify(cachedData)
      );

      const retrieved = getCachedUserDetails(mockUser.id);
      expect(retrieved).toBeNull();
    });

    it('should clear expired cache when accessed', () => {
      const expiredTimestamp = Date.now() - (31 * 60 * 1000);
      const cachedData = {
        user: mockUser,
        timestamp: expiredTimestamp,
      };

      localStorage.setItem(
        `lendsqr_user_details_${mockUser.id}`,
        JSON.stringify(cachedData)
      );

      getCachedUserDetails(mockUser.id);

      const cached = localStorage.getItem(`lendsqr_user_details_${mockUser.id}`);
      expect(cached).toBeNull();
    });

    it('should return user if cache is not expired', () => {
      // Cache with recent timestamp (5 minutes ago)
      const recentTimestamp = Date.now() - (5 * 60 * 1000);
      const cachedData = {
        user: mockUser,
        timestamp: recentTimestamp,
      };

      localStorage.setItem(
        `lendsqr_user_details_${mockUser.id}`,
        JSON.stringify(cachedData)
      );

      const retrieved = getCachedUserDetails(mockUser.id);
      expect(retrieved).not.toBeNull();
      expect(retrieved?.id).toBe(mockUser.id);
    });
  });

  describe('clearCachedUser', () => {
    it('should clear specific user from cache', () => {
      cacheUserDetails(mockUser);

      let cached = localStorage.getItem(`lendsqr_user_details_${mockUser.id}`);
      expect(cached).toBeTruthy();

      clearCachedUser(mockUser.id);

      cached = localStorage.getItem(`lendsqr_user_details_${mockUser.id}`);
      expect(cached).toBeNull();
    });

    it('should not throw error when clearing non-existent user', () => {
      expect(() => clearCachedUser('non-existent-id')).not.toThrow();
    });
  });

  describe('clearAllUserCache', () => {
    it('should clear all cached users', () => {
      const user2 = { ...mockUser, id: 'USR-00002' };
      const user3 = { ...mockUser, id: 'USR-00003' };

      cacheUserDetails(mockUser);
      cacheUserDetails(user2);
      cacheUserDetails(user3);

      clearAllCachedUsers();

      expect(getCachedUserDetails(mockUser.id)).toBeNull();
      expect(getCachedUserDetails(user2.id)).toBeNull();
      expect(getCachedUserDetails(user3.id)).toBeNull();
    });

    it('should only clear user cache, not other localStorage items', () => {
      cacheUserDetails(mockUser);
      localStorage.setItem('other_key', 'other_value');

      clearAllCachedUsers();

      expect(getCachedUserDetails(mockUser.id)).toBeNull();
      expect(localStorage.getItem('other_key')).toBe('other_value');
    });
  });
});
