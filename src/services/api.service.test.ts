import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchUsersFromAPI, fetchUserById, calculateStats } from './api.service';
import type { User } from '../types/user.types';

describe('api.service', () => {
  describe('calculateStats', () => {
    it('should calculate correct statistics', () => {
      const users: User[] = [
        { id: '1', status: 'active' } as User,
        { id: '2', status: 'active' } as User,
        { id: '3', status: 'inactive' } as User,
        { id: '4', status: 'pending' } as User,
      ];

      const stats = calculateStats(users);

      expect(stats.totalUsers).toBe(4);
      expect(stats.activeUsers).toBe(2);
      expect(stats.usersWithLoans).toBe(1); // 45% of 4 = 1.8 => 1
      expect(stats.usersWithSavings).toBe(3); // 78% of 4 = 3.12 => 3
    });

    it('should handle case-insensitive status comparison', () => {
      const users: User[] = [
        { id: '1', status: 'Active' } as User,
        { id: '2', status: 'ACTIVE' } as User,
        { id: '3', status: 'active' } as User,
      ];

      const stats = calculateStats(users);

      expect(stats.activeUsers).toBe(3);
    });

    it('should handle empty array', () => {
      const stats = calculateStats([]);

      expect(stats.totalUsers).toBe(0);
      expect(stats.activeUsers).toBe(0);
      expect(stats.usersWithLoans).toBe(0);
      expect(stats.usersWithSavings).toBe(0);
    });

    it('should round down for loans and savings calculations', () => {
      const users: User[] = Array(10).fill({ id: '1', status: 'active' } as User);

      const stats = calculateStats(users);

      expect(stats.usersWithLoans).toBe(4); // 45% of 10 = 4.5 => 4
      expect(stats.usersWithSavings).toBe(7); // 78% of 10 = 7.8 => 7
    });
  });

  describe('fetchUsersFromAPI', () => {
    beforeEach(() => {
      vi.clearAllMocks();
      global.fetch = vi.fn();
    });

    it('should fetch users successfully', async () => {
      const mockUsers = [
        { id: '1', username: 'user1', status: 'active' },
        { id: '2', username: 'user2', status: 'inactive' },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: async () => mockUsers,
      });

      const users = await fetchUsersFromAPI();

      expect(users).toEqual(mockUsers);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.mocki.io/v2/36ogb2w9/userz'
      );
    });

    it('should throw error when fetch fails', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      await expect(fetchUsersFromAPI()).rejects.toThrow('Failed to fetch users');
    });

    it('should throw error when network error occurs', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      await expect(fetchUsersFromAPI()).rejects.toThrow('Network error');
    });
  });

  describe('fetchUserById', () => {
    beforeEach(() => {
      vi.clearAllMocks();
      global.fetch = vi.fn();
    });

    it('should fetch user by id successfully', async () => {
      const mockUsers = [
        { id: 'USR-00001', username: 'user1', status: 'active' },
        { id: 'USR-00002', username: 'user2', status: 'inactive' },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUsers,
      });

      const user = await fetchUserById('USR-00001');

      expect(user).toBeDefined();
      expect(user?.id).toBe('USR-00001');
    });

    it('should return null for non-existent user', async () => {
      const mockUsers = [
        { id: 'USR-00001', username: 'user1', status: 'active' },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUsers,
      });

      const user = await fetchUserById('USR-99999');

      expect(user).toBeNull();
    });

    it('should enrich user data with extended fields', async () => {
      const mockUsers = [
        { 
          id: 'USR-00001', 
          username: 'testuser',
          email: 'test@example.com',
          status: 'active' 
        },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUsers,
      });

      const user = await fetchUserById('USR-00001');

      expect(user).toBeDefined();
      expect(user?.personalInfo).toBeDefined();
      expect(user?.educationAndEmployment).toBeDefined();
      expect(user?.socials).toBeDefined();
      expect(user?.guarantor).toBeDefined();
      expect(user?.bankDetails).toBeDefined();
    });
  });
});
