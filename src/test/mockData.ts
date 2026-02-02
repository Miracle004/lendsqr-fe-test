import type { User } from '../types/user.types';

export const mockUsers: User[] = [
  {
    id: 'USR-00001',
    organization: 'Lendsqr',
    username: 'johnDoe',
    email: 'john.doe@example.com',
    phoneNumber: '08012345678',
    dateJoined: '2022-08-11T12:00:00Z',
    status: 'active',
    personalInfo: {
      fullName: 'John Doe',
      phoneNumber: '08012345678',
      email: 'john.doe@example.com',
      bvn: '22345678901',
      gender: 'Male',
      maritalStatus: 'Single',
      children: 'None',
      typeOfResidence: 'Parent\'s Apartment',
    },
    educationAndEmployment: {
      levelOfEducation: 'B.Sc',
      employmentStatus: 'Employed',
      sectorOfEmployment: 'FinTech',
      durationOfEmployment: '2 years',
      officeEmail: 'john@company.com',
      monthlyIncome: '₦200,000 - ₦400,000',
      loanRepayment: '₦40,000',
    },
    socials: {
      twitter: '@johndoe',
      facebook: 'johnDoe',
      instagram: '@johndoe_',
    },
    guarantor: {
      fullName: 'Jane Doe',
      phoneNumber: '08098765432',
      email: 'jane@mail.com',
      relationship: 'Sister',
    },
    bankDetails: {
      accountNumber: '1234567890',
      accountName: 'John Doe',
      bankName: 'GTBank',
    },
  },
  {
    id: 'USR-00002',
    organization: 'Branch',
    username: 'janeDoe',
    email: 'jane.doe@example.com',
    phoneNumber: '08098765432',
    dateJoined: '2022-09-15T10:30:00Z',
    status: 'inactive',
    personalInfo: {
      fullName: 'Jane Doe',
      phoneNumber: '08098765432',
      email: 'jane.doe@example.com',
      bvn: '12345678902',
      gender: 'Female',
      maritalStatus: 'Married',
      children: '2',
      typeOfResidence: 'Own House',
    },
    educationAndEmployment: {
      levelOfEducation: 'M.Sc',
      employmentStatus: 'Self-employed',
      sectorOfEmployment: 'Healthcare',
      durationOfEmployment: '3 years',
      officeEmail: 'jane@company.com',
      monthlyIncome: '₦300,000 - ₦500,000',
      loanRepayment: '₦50,000',
    },
    socials: {
      twitter: '@janedoe',
      facebook: 'janeDoe',
      instagram: '@janedoe_',
    },
    guarantor: {
      fullName: 'John Doe',
      phoneNumber: '08012345678',
      email: 'john@mail.com',
      relationship: 'Brother',
    },
    bankDetails: {
      accountNumber: '0987654321',
      accountName: 'Jane Doe',
      bankName: 'First Bank',
    },
  },
];

export const mockUser = mockUsers[0];
