// Mock data generator for 500 users
import type { User, UserStatus } from '../types/user.types';

const firstNames = [
  'Grace', 'John', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'James',
  'Mary', 'Robert', 'Patricia', 'William', 'Jennifer', 'Richard', 'Linda',
  'Joseph', 'Elizabeth', 'Thomas', 'Barbara', 'Charles', 'Susan', 'Christopher',
  'Margaret', 'Daniel', 'Dorothy', 'Matthew', 'Lisa', 'Anthony', 'Nancy', 'Mark',
  'Adedeji', 'Chioma', 'Oluwaseun', 'Adebayo', 'Ngozi', 'Emeka', 'Funke', 'Tunde'
];

const lastNames = [
  'Effiom', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
  'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson',
  'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson',
  'Okafor', 'Adeleke', 'Ojo', 'Ibrahim', 'Mohammed', 'Akinwale', 'Olayinka'
];

const organizations = [
  'Lendsqr', 'Irorun', 'Lendstar', 'Paystack', 'Flutterwave', 'Piggyvest',
  'Carbon', 'FairMoney', 'Renmoney', 'Branch', 'Paylater', 'Cowrywise',
  'Alat', 'Kuda', 'Opay', 'Palmpay', 'Moniepoint', 'Quickteller'
];

const phoneNumbers = [
  '08012345678', '08098765432', '07011223344', '09055667788', '08123456789',
  '07098765432', '09012345678', '08087654321', '07034567890', '09023456789'
];

// Generate weighted random status (60% active, 20% inactive, 15% pending, 5% blacklisted)
const getRandomStatus = (): UserStatus => {
  const rand = Math.random();
  if (rand < 0.60) return 'active';      // 60%
  if (rand < 0.80) return 'inactive';     // 20%
  if (rand < 0.95) return 'pending';      // 15%
  return 'blacklisted';                    // 5%
};

const generateRandomDate = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

const generateRandomEmail = (firstName: string, lastName: string): string => {
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'lendsqr.com', 'mail.com'];
  const random = Math.random();
  
  if (random < 0.5) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
  } else {
    return `${firstName.toLowerCase()}${Math.floor(Math.random() * 999)}@${domains[Math.floor(Math.random() * domains.length)]}`;
  }
};

const generateRandomAmount = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateMockUsers = (count: number = 500): User[] => {
  const users: User[] = [];
  const startDate = new Date('2020-01-01');
  const endDate = new Date('2024-12-31');

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = generateRandomEmail(firstName, lastName);
    const phoneNumber = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    const organization = organizations[Math.floor(Math.random() * organizations.length)];
    const status = getRandomStatus(); // Use weighted distribution
    const dateJoined = generateRandomDate(startDate, endDate);

    const user: User = {
      id: `USER-${String(i).padStart(6, '0')}`,
      organization,
      username: `${firstName.toLowerCase()}${lastName.toLowerCase()}${i}`,
      email,
      phoneNumber,
      dateJoined,
      status,
      personalInfo: {
        fullName: `${firstName} ${lastName}`,
        phoneNumber,
        email,
        bvn: String(10000000000 + Math.floor(Math.random() * 90000000000)),
        gender: Math.random() > 0.5 ? 'Male' : 'Female',
        maritalStatus: ['Single', 'Married', 'Divorced'][Math.floor(Math.random() * 3)] as 'Single' | 'Married' | 'Divorced',
        children: Math.random() > 0.5 ? 'None' : String(Math.floor(Math.random() * 4)),
        typeOfResidence: ['Parent\'s Apartment', 'Rented Apartment', 'Owned Apartment'][Math.floor(Math.random() * 3)] as any,
      },
      education: {
        level: ['B.Sc', 'M.Sc', 'Ph.D', 'HND', 'OND'][Math.floor(Math.random() * 5)] as any,
        employmentStatus: ['Employed', 'Unemployed', 'Self-employed'][Math.floor(Math.random() * 3)] as any,
        sector: ['FinTech', 'Technology', 'Healthcare', 'Education', 'Agriculture', 'Entertainment'][Math.floor(Math.random() * 6)],
        duration: `${Math.floor(Math.random() * 10) + 1} years`,
        officeEmail: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${organization.toLowerCase().replace(/\s/g, '')}.com`,
        monthlyIncome: [
          '₦100,000 - ₦200,000',
          '₦200,000 - ₦400,000',
          '₦400,000 - ₦600,000',
          '₦600,000 - ₦1,000,000',
        ][Math.floor(Math.random() * 4)],
        loanRepayment: `₦${generateRandomAmount(10000, 100000).toLocaleString()}`,
      },
      socials: {
        twitter: `@${firstName.toLowerCase()}${lastName.toLowerCase()}`,
        facebook: `${firstName} ${lastName}`,
        instagram: `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
      },
      guarantor: {
        fullName: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        phoneNumber: phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)],
        email: generateRandomEmail(
          firstNames[Math.floor(Math.random() * firstNames.length)],
          lastNames[Math.floor(Math.random() * lastNames.length)]
        ),
        relationship: ['Brother', 'Sister', 'Friend', 'Parent', 'Colleague'][Math.floor(Math.random() * 5)],
      },
    };

    users.push(user);
  }

  return users;
};

// Generate sample statistics based on user data
export const calculateUserStats = (users: User[]) => {
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'active').length;
  const usersWithLoans = Math.floor(totalUsers * 0.45); // Assume 45% have loans
  const usersWithSavings = Math.floor(totalUsers * 0.78); // Assume 78% have savings

  return {
    totalUsers,
    activeUsers,
    usersWithLoans,
    usersWithSavings,
  };
};
