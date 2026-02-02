// IndexedDB service for storing and retrieving user data
import { openDB, type IDBPDatabase } from 'idb';
import type { User } from '../types/user.types';

const DB_NAME = 'lendsqr-db';
const STORE_NAME = 'users';
const DB_VERSION = 1;

let dbInstance: IDBPDatabase | null = null;

// Initialize the database
export const initDB = async (): Promise<IDBPDatabase> => {
  if (dbInstance) {
    return dbInstance;
  }

  dbInstance = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Create object store if it doesn't exist
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        
        // Create indexes for efficient querying
        store.createIndex('organization', 'organization', { unique: false });
        store.createIndex('username', 'username', { unique: false });
        store.createIndex('email', 'email', { unique: false });
        store.createIndex('status', 'status', { unique: false });
        store.createIndex('dateJoined', 'dateJoined', { unique: false });
      }
    },
  });

  return dbInstance;
};

// Store all users in IndexedDB
export const storeUsers = async (users: User[]): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  // Clear existing data
  await store.clear();

  // Add all users
  for (const user of users) {
    await store.add(user);
  }

  await tx.done;
};

// Get all users
export const getAllUsers = async (): Promise<User[]> => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

// Get user by ID
export const getUserById = async (id: string): Promise<User | undefined> => {
  const db = await initDB();
  return await db.get(STORE_NAME, id);
};

// Get users with pagination
export const getUsersPaginated = async (
  page: number = 1,
  pageSize: number = 10
): Promise<{ users: User[]; total: number }> => {
  const db = await initDB();
  const allUsers = await db.getAll(STORE_NAME);
  
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const users = allUsers.slice(start, end);

  return {
    users,
    total: allUsers.length,
  };
};

// Search users by field
export const searchUsers = async (
  field: keyof User,
  value: string
): Promise<User[]> => {
  const db = await initDB();
  const allUsers = await db.getAll(STORE_NAME);
  
  return allUsers.filter(user => {
    const fieldValue = user[field];
    if (typeof fieldValue === 'string') {
      return fieldValue.toLowerCase().includes(value.toLowerCase());
    }
    return false;
  });
};

// Filter users by status
export const filterUsersByStatus = async (status: string): Promise<User[]> => {
  const db = await initDB();
  const index = db.transaction(STORE_NAME).store.index('status');
  return await index.getAll(status);
};

// Filter users by organization
export const filterUsersByOrganization = async (
  organization: string
): Promise<User[]> => {
  const db = await initDB();
  const index = db.transaction(STORE_NAME).store.index('organization');
  return await index.getAll(organization);
};

// Get users with filters and pagination
export const getFilteredUsers = async (
  filters: {
    organization?: string;
    username?: string;
    email?: string;
    phoneNumber?: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
  },
  page: number = 1,
  pageSize: number = 10
): Promise<{ users: User[]; total: number }> => {
  const db = await initDB();
  let users = await db.getAll(STORE_NAME);

  // Apply filters
  if (filters.organization) {
    users = users.filter(u =>
      u.organization.toLowerCase().includes(filters.organization!.toLowerCase())
    );
  }

  if (filters.username) {
    users = users.filter(u =>
      u.username.toLowerCase().includes(filters.username!.toLowerCase())
    );
  }

  if (filters.email) {
    users = users.filter(u =>
      u.email.toLowerCase().includes(filters.email!.toLowerCase())
    );
  }

  if (filters.phoneNumber) {
    users = users.filter(u => u.phoneNumber.includes(filters.phoneNumber!));
  }

  if (filters.status) {
    users = users.filter(u => u.status === filters.status);
  }

  if (filters.dateFrom) {
    users = users.filter(u => u.dateJoined >= filters.dateFrom!);
  }

  if (filters.dateTo) {
    users = users.filter(u => u.dateJoined <= filters.dateTo!);
  }

  // Apply pagination
  const total = users.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = users.slice(start, end);

  return {
    users: paginatedUsers,
    total,
  };
};

// Update user
export const updateUser = async (user: User): Promise<void> => {
  const db = await initDB();
  await db.put(STORE_NAME, user);
};

// Delete user
export const deleteUser = async (id: string): Promise<void> => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};

// Check if data exists
export const hasData = async (): Promise<boolean> => {
  const db = await initDB();
  const count = await db.count(STORE_NAME);
  return count > 0;
};

// Get database stats
export const getDBStats = async () => {
  const db = await initDB();
  const allUsers = await db.getAll(STORE_NAME);

  const stats = {
    totalUsers: allUsers.length,
    activeUsers: allUsers.filter(u => u.status === 'active').length,
    inactiveUsers: allUsers.filter(u => u.status === 'inactive').length,
    pendingUsers: allUsers.filter(u => u.status === 'pending').length,
    blacklistedUsers: allUsers.filter(u => u.status === 'blacklisted').length,
    organizations: [...new Set(allUsers.map(u => u.organization))],
  };

  return stats;
};
