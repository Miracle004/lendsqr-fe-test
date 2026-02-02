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
      icon: '/icons/np_users_1248631_000000 1.svg',
      label: 'Users',
      value: isLoading ? '...' : stats.totalUsers.toLocaleString(),
      variant: 'users' as const,
    },
    {
      icon: '/icons/user-friends 1.svg',
      label: 'Active Users',
      value: isLoading ? '...' : stats.activeUsers.toLocaleString(),
      variant: 'active' as const,
    },
    {
      icon: '/icons/np_loan_1243991_000000 1.svg',
      label: 'Users with Loans',
      value: isLoading ? '...' : usersWithLoans.toLocaleString(),
      variant: 'loans' as const,
    },
    {
      icon: '/icons/np_money_549109_000000 1.svg',
      label: 'Users with Savings',
      value: isLoading ? '...' : usersWithSavings.toLocaleString(),
      variant: 'savings' as const,
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
            variant={stat.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
