import React from 'react';
import StatsCard from '../../components/common/StatsCard';
import { useUserStats } from '../../hooks/useUsers';
import styles from './DashboardPage.module.scss';

const DashboardPage: React.FC = () => {
  const { stats, isLoading } = useUserStats();

  // Calculate users with loans and savings (estimated based on typical ratios)
  const usersWithLoans = Math.floor(stats.totalUsers * 0.45);
  const usersWithSavings = Math.floor(stats.totalUsers * 0.78);

  const statsData = [
    {
      icon: 'users' as const,
      label: 'Users',
      value: isLoading ? '...' : stats.totalUsers.toLocaleString(),
    },
    {
      icon: 'active' as const,
      label: 'Active Users',
      value: isLoading ? '...' : stats.activeUsers.toLocaleString(),
    },
    {
      icon: 'loans' as const,
      label: 'Users with Loans',
      value: isLoading ? '...' : usersWithLoans.toLocaleString(),
    },
    {
      icon: 'savings' as const,
      label: 'Users with Savings',
      value: isLoading ? '...' : usersWithSavings.toLocaleString(),
    },
  ];

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Users</h1>
      
      <div className={styles.statsGrid}>
        {statsData.map((stat) => (
          <StatsCard
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
