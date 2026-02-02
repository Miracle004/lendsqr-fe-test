import React, { useState } from 'react';
import type { User } from '../../../types/user.types';
import StatusBadge from '../../common/StatusBadge';
import TableFilter, { FilterValues } from '../TableFilter';
import styles from './UsersTable.module.scss';

interface UsersTableProps {
  users: User[];
  isLoading?: boolean;
  onFilterChange?: (filters: FilterValues) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, isLoading, onFilterChange }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  const organizations = Array.from(new Set(users.map((u) => u.organization)));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const toggleMenu = (userId: string) => {
    setActiveMenu(activeMenu === userId ? null : userId);
  };

  const handleFilter = (filters: FilterValues) => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}> onClick={() => setShowFilter(true)}
        <thead>
          <tr>
            <th>
              <div className={styles.headerCell}>
                <span>Organization</span>
                <button className={styles.filterBtn} type="button">
                  <img src="/icons/filter-results-button.svg" alt="Filter" />
                </button>
              </div>
            </th>
            <th>
              <div className={styles.headerCell}>
                <span>Username</span>
                <button className={styles.filterBtn} type="button">
                  <img src="/icons/filter-results-button.svg" alt="Filter" />
                </button>
              </div>
            </th>
            <th>
              <div className={styles.headerCell}>
                <span>Email</span>
                <button className={styles.filterBtn} type="button">
                  <img src="/icons/filter-results-button.svg" alt="Filter" />
                </button>
              </div>
            </th>
            <th>
              <div className={styles.headerCell}>
                <span>Phone Number</span>
                <button className={styles.filterBtn} type="button">
                  <img src="/icons/filter-results-button.svg" alt="Filter" />
                </button>
              </div>
            </th>
            <th>
              <div className={styles.headerCell}>
                <span>Date Joined</span>
                <button className={styles.filterBtn} type="button">
                  <img src="/icons/filter-results-button.svg" alt="Filter" />
                </button>
              </div>
            </th>
            <th>
              <div className={styles.headerCell}>
                <span>Status</span>
                <button className={styles.filterBtn} type="button">
                  <img src="/icons/filter-results-button.svg" alt="Filter" />
                </button>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{formatDate(user.dateJoined)}</td>
              <td>
                <StatusBadge status={user.status as any} />
              </td>
              <td>
                <div className={styles.actionCell}>
                  <button
                    className={styles.menuBtn}
                    onClick={() => toggleMenu(user.id)}
                    type="button"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9.99999 6.1111C10.9205 6.1111 11.6667 5.36496 11.6667 4.44444C11.6667 3.52392 10.9205 2.77777 9.99999 2.77777C9.07946 2.77777 8.33332 3.52392 8.33332 4.44444C8.33332 5.36496 9.07946 6.1111 9.99999 6.1111Z" fill="#545F7D"/>
                      <path d="M9.99999 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07952 10.9205 8.33337 9.99999 8.33337C9.07946 8.33337 8.33332 9.07952 8.33332 10C8.33332 10.9205 9.07946 11.6667 9.99999 11.6667Z" fill="#545F7D"/>
                      <path d="M9.99999 17.2222C10.9205 17.2222 11.6667 16.4761 11.6667 15.5555C11.6667 14.635 10.9205 13.8889 9.99999 13.8889C9.07946 13.8889 8.33332 14.635 8.33332 15.5555C8.33332 16.4761 9.07946 17.2222 9.99999 17.2222Z" fill="#545F7D"/>
                    </svg>
                  </button>
                  
                  {activeMenu === user.id && (
                    <div className={styles.actionsMenu}>
                      <button type="button">
                        <img src="/icons/eye(visual).svg" alt="" />
                        View Details
                      </button>
                      <button type="button">
                        <img src="/icons/blacklist_user.svg" alt="" />
                        Blacklist User
                      </button>
                      <button type="button">
                        <img src="/icons/activate_user.svg" alt="" />
                        Activate User
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showFilter && (
        <TableFilter
          onFilter={handleFilter}
          onClose={() => setShowFilter(false)}
          organizations={organizations}
        />
      )}
    </div>
  );
};

export default UsersTable;
