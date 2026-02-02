import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserDetails } from '../../hooks/useUsers';
import styles from './UserDetailsPage.module.scss';

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isLoading, error } = useUserDetails(id || '');

  console.log('UserDetailsPage mounted - ID:', id);
  console.log('User data:', user);
  console.log('Loading:', isLoading, 'Error:', error);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Loading user details...</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className={styles.error}>
        <p>Error: {error || 'User not found'}</p>
        <button onClick={() => navigate('/dashboard/users')}>Back to Users</button>
      </div>
    );
  }

  return (
    <div className={styles.userDetailsPage}>
      <button className={styles.backButton} onClick={() => navigate('/dashboard/users')}>
        <img src="/icons/back_arrow.svg" alt="Back" />
        <span>Back to Users</span>
      </button>

      <div className={styles.header}>
        <h1>User Details</h1>
        <div className={styles.actions}>
          <button className={styles.blacklistBtn}>
            Blacklist User
          </button>
          <button className={styles.activateBtn}>
            Activate User
          </button>
        </div>
      </div>

      <div className={styles.userCard}>
        <div className={styles.userProfile}>
          <div className={styles.profileSection}>
            <div className={styles.avatar}>
              <img src="/icons/avatar.svg" alt={user.personalInfo.fullName} />
            </div>
            <div className={styles.userInfo}>
              <h2>{user.personalInfo.fullName}</h2>
              <p>{user.id}</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.tierSection}>
            <p>User's Tier</p>
            <div className={styles.stars}>
              <span>★</span>
              <span className={styles.inactive}>★</span>
              <span className={styles.inactive}>★</span>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.bankSection}>
            <h3>{user.bankDetails.accountName}</h3>
            <p>{user.bankDetails.accountNumber}</p>
          </div>
        </div>

        <div className={styles.tabs}>
          <button className={styles.tabActive}>General Details</button>
          <button>Documents</button>
          <button>Bank Details</button>
          <button>Loans</button>
          <button>Savings</button>
          <button>App and System</button>
        </div>

        <div className={styles.detailsContent}>
          <div className={styles.section}>
            <h3>Personal Information</h3>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label>Full Name</label>
                <p>{user.personalInfo.fullName}</p>
              </div>
              <div className={styles.field}>
                <label>Phone Number</label>
                <p>{user.personalInfo.phoneNumber}</p>
              </div>
              <div className={styles.field}>
                <label>Email Address</label>
                <p>{user.personalInfo.email}</p>
              </div>
              <div className={styles.field}>
                <label>BVN</label>
                <p>{user.personalInfo.bvn}</p>
              </div>
              <div className={styles.field}>
                <label>Gender</label>
                <p>{user.personalInfo.gender}</p>
              </div>
              <div className={styles.field}>
                <label>Marital Status</label>
                <p>{user.personalInfo.maritalStatus}</p>
              </div>
              <div className={styles.field}>
                <label>Children</label>
                <p>{user.personalInfo.children}</p>
              </div>
              <div className={styles.field}>
                <label>Type of Residence</label>
                <p>{user.personalInfo.typeOfResidence}</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Education and Employment</h3>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label>Level of Education</label>
                <p>{user.educationAndEmployment.levelOfEducation}</p>
              </div>
              <div className={styles.field}>
                <label>Employment Status</label>
                <p>{user.educationAndEmployment.employmentStatus}</p>
              </div>
              <div className={styles.field}>
                <label>Sector of Employment</label>
                <p>{user.educationAndEmployment.sectorOfEmployment}</p>
              </div>
              <div className={styles.field}>
                <label>Duration of Employment</label>
                <p>{user.educationAndEmployment.durationOfEmployment}</p>
              </div>
              <div className={styles.field}>
                <label>Office Email</label>
                <p>{user.educationAndEmployment.officeEmail}</p>
              </div>
              <div className={styles.field}>
                <label>Monthly Income</label>
                <p>{user.educationAndEmployment.monthlyIncome}</p>
              </div>
              <div className={styles.field}>
                <label>Loan Repayment</label>
                <p>{user.educationAndEmployment.loanRepayment}</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Socials</h3>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label>Twitter</label>
                <p>{user.socials.twitter}</p>
              </div>
              <div className={styles.field}>
                <label>Facebook</label>
                <p>{user.socials.facebook}</p>
              </div>
              <div className={styles.field}>
                <label>Instagram</label>
                <p>{user.socials.instagram}</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Guarantor</h3>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label>Full Name</label>
                <p>{user.guarantor.fullName}</p>
              </div>
              <div className={styles.field}>
                <label>Phone Number</label>
                <p>{user.guarantor.phoneNumber}</p>
              </div>
              <div className={styles.field}>
                <label>Email Address</label>
                <p>{user.guarantor.email}</p>
              </div>
              <div className={styles.field}>
                <label>Relationship</label>
                <p>{user.guarantor.relationship}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
