import React from 'react';
import styles from './StatsCard.module.scss';

export interface StatsCardProps {
  icon: 'users' | 'active' | 'loans' | 'savings';
  label: string;
  value: string | number;
}

const iconMap = {
  users: '/icons/np_users_1977590_000000 1.svg',
  active: '/icons/np_users_1248631_000000 1.svg',
  loans: '/icons/np_loan_1243991_000000 1.svg',
  savings: '/icons/np_money_549109_000000 1.svg',
};

const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value }) => {
  return (
    <div className={`${styles.card} ${styles[icon]}`}>
      <div className={styles.iconWrapper}>
        <img src={iconMap[icon]} alt={label} />
      </div>
      <p className={styles.label}>{label}</p>
      <h3 className={styles.value}>{typeof value === 'number' ? value.toLocaleString() : value}</h3>
    </div>
  );
};

export default StatsCard;
