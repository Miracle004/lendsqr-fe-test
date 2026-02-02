import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      section: 'CUSTOMERS',
      items: [
        { icon: 'user-friends 1.svg', label: 'Users', path: '/dashboard/users' },
        { icon: 'np_users_1977590_000000 1.svg', label: 'Guarantors', path: '/dashboard/guarantors' },
        { icon: 'sack 1.svg', label: 'Loans', path: '/dashboard/loans' },
        { icon: 'handshake-regular 1.svg', label: 'Decision Models', path: '/dashboard/decision-models' },
        { icon: 'piggy-bank 1.svg', label: 'Savings', path: '/dashboard/savings' },
        { icon: 'loan_request.svg', label: 'Loan Requests', path: '/dashboard/loan-requests' },
        { icon: 'user-friends 1.svg', label: 'Whitelist', path: '/dashboard/whitelist' },
        { icon: 'karma.svg', label: 'Karma', path: '/dashboard/karma' },
      ],
    },
    {
      section: 'BUSINESSES',
      items: [
        { icon: 'briefcase 1.svg', label: 'Organization', path: '/dashboard/organization' },
        { icon: 'loan_request.svg', label: 'Loan Products', path: '/dashboard/loan-products' },
        { icon: 'savings_product.svg', label: 'Savings Products', path: '/dashboard/savings-products' },
        { icon: 'fees_n_charges.svg', label: 'Fees and Charges', path: '/dashboard/fees' },
        { icon: 'transactions.svg', label: 'Transactions', path: '/dashboard/transactions' },
        { icon: 'services.svg', label: 'Services', path: '/dashboard/services' },
        { icon: 'service_account.svg', label: 'Service Account', path: '/dashboard/service-account' },
        { icon: 'settlements.svg', label: 'Settlements', path: '/dashboard/settlements' },
        { icon: 'reports.svg', label: 'Reports', path: '/dashboard/reports' },
      ],
    },
    {
      section: 'SETTINGS',
      items: [
        { icon: 'preferences.svg', label: 'Preferences', path: '/dashboard/preferences' },
        { icon: 'fees_n_pricing.svg', label: 'Fees and Pricing', path: '/dashboard/pricing' },
        { icon: 'audit_logs.svg', label: 'Audit Logs', path: '/dashboard/audit-logs' },
        { icon: 'system_msgs.svg', label: 'Systems Messages', path: '/dashboard/system-messages' },
      ],
    },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className={styles.overlay} onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* Switch Organization */}
        <div className={styles.switchOrg}>
          <img src="/icons/briefcase 1.svg" alt="" />
          <span>Switch Organization</span>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="#213F7D"/>
          </svg>
        </div>

        {/* Dashboard Link */}
        <NavLink to="/dashboard" className={styles.dashboardLink} end>
          <img src="/icons/home 1.svg" alt="" />
          <span>Dashboard</span>
        </NavLink>

        {/* Menu Sections */}
        <nav className={styles.nav}>
          {menuItems.map((section) => (
            <div key={section.section} className={styles.section}>
              <h3 className={styles.sectionTitle}>{section.section}</h3>
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                >
                  <img src={`/icons/${item.icon}`} alt="" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* Logout */}
        <div className={styles.logout}>
          <img src="/icons/logout.svg" alt="" />
          <span>Logout</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
