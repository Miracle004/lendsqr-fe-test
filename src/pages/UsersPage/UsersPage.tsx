import React, { useState, useEffect } from 'react';
import { useUsers, useUserStats } from '../../hooks/useUsers';
import StatsCard from '../../components/common/StatsCard';
import UsersTable from '../../components/features/UsersTable';
import Pagination from '../../components/common/Pagination';
import styles from './UsersPage.module.scss';

const UsersPage: React.FC = () => {
  const { users, isLoading, error } = useUsers();
  const { stats, isLoading: statsLoading } = useUserStats();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    console.log('UsersPage - users:', users.length, 'isLoading:', isLoading, 'error:', error);
    setFilteredUsers(users);
  }, [users, isLoading, error]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const handleFilterChange = (filters: any) => {
    const filtered = users.filter(user => {
      if (filters.organization && user.organization !== filters.organization) return false;
      if (filters.username && !user.username.toLowerCase().includes(filters.username.toLowerCase())) return false;
      if (filters.email && !user.email.toLowerCase().includes(filters.email.toLowerCase())) return false;
      if (filters.date && !user.dateJoined.startsWith(filters.date)) return false;
      if (filters.phoneNumber && !user.phoneNumber.includes(filters.phoneNumber)) return false;
      if (filters.status && user.status.toLowerCase() !== filters.status.toLowerCase()) return false;
      return true;
    });
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error loading users: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.usersPage}>
      <h1 className={styles.title}>Users</h1>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <StatsCard
          icon="users"
          label="Users"
          value={statsLoading ? '...' : stats.totalUsers.toLocaleString()}
        />
        <StatsCard
          icon="active"
          label="Active Users"
          value={statsLoading ? '...' : stats.activeUsers.toLocaleString()}
        />
        <StatsCard
          icon="loans"
          label="Users with Loans"
          value={statsLoading ? '...' : stats.usersWithLoans.toLocaleString()}
        />
        <StatsCard
          icon="savings"
          label="Users with Savings"
          value={statsLoading ? '...' : stats.usersWithSavings.toLocaleString()}
        />
      </div>

      {/* Users Table */}
      <div className={styles.tableContainer}>
        <UsersTable users={currentUsers} isLoading={isLoading} onFilterChange={handleFilterChange} />
        {!isLoading && filteredUsers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalItems={filteredUsers.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
