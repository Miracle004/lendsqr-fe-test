import React, { useState } from 'react';
import styles from './TableFilter.module.scss';

interface FilterOption {
  label: string;
  value: string;
}

interface TableFilterProps {
  onFilter: (filters: FilterValues) => void;
  onClose: () => void;
  organizations?: string[];
}

export interface FilterValues {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const TableFilter: React.FC<TableFilterProps> = ({ onFilter, onClose, organizations = [] }) => {
  const [filters, setFilters] = useState<FilterValues>({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  });

  const handleChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
    onFilter({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
    onClose();
  };

  return (
    <div className={styles.filterOverlay} onClick={onClose}>
      <div className={styles.filterPanel} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Organization</label>
            <select
              value={filters.organization}
              onChange={(e) => handleChange('organization', e.target.value)}
            >
              <option value="">Select</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Username</label>
            <input
              type="text"
              placeholder="User"
              value={filters.username}
              onChange={(e) => handleChange('username', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={filters.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Date</label>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => handleChange('date', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={filters.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleChange('status', e.target.value)}
            >
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Blacklisted">Blacklisted</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={handleReset} className={styles.resetBtn}>
              Reset
            </button>
            <button type="submit" className={styles.filterBtn}>
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableFilter;
