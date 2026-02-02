import React from 'react';
import styles from './StatsCard.module.scss';

export interface StatsCardProps {
  icon: string;
  label: string;
  value: string | number;
  variant?: 'users' | 'active' | 'loans' | 'savings';
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value, variant = 'users' }) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={label} />
      </div>
      <p className={styles.label}>{label}</p>
      <h3 className={styles.value}>{value.toLocaleString()}</h3>
    </div>
  );
};

export default StatsCard;
