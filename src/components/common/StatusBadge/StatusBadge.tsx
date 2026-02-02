import React from 'react';
import styles from './StatusBadge.module.scss';

export type UserStatus = 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';

interface StatusBadgeProps {
  status: UserStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
