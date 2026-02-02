import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UsersTable from './UsersTable';
import type { User } from '../../../types/user.types';

const mockUsers: User[] = [
  {
    id: 'USR-00001',
    organization: 'Lendsqr',
    username: 'johndoe',
    email: 'john@example.com',
    phoneNumber: '08012345678',
    dateJoined: '2022-01-15T10:30:00Z',
    status: 'Active',
  } as User,
  {
    id: 'USR-00002',
    organization: 'Irorun',
    username: 'janedoe',
    email: 'jane@example.com',
    phoneNumber: '08087654321',
    dateJoined: '2022-02-20T14:20:00Z',
    status: 'Inactive',
  } as User,
  {
    id: 'USR-00003',
    organization: 'Lendstar',
    username: 'bobsmith',
    email: 'bob@example.com',
    phoneNumber: '08011112222',
    dateJoined: '2022-03-10T09:15:00Z',
    status: 'Pending',
  } as User,
];

describe('UsersTable', () => {
  it('renders table with user data', () => {
    render(
      <BrowserRouter>
        <UsersTable users={mockUsers} />
      </BrowserRouter>
    );

    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('janedoe')).toBeInTheDocument();
    expect(screen.getByText('bobsmith')).toBeInTheDocument();
  });

  it('displays all table headers', () => {
    render(
      <BrowserRouter>
        <UsersTable users={mockUsers} />
      </BrowserRouter>
    );

    expect(screen.getByText('Organization')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText('Date Joined')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renders correct number of rows', () => {
    const { container } = render(
      <BrowserRouter>
        <UsersTable users={mockUsers} />
      </BrowserRouter>
    );

    const rows = container.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });

  it('displays user status badges', () => {
    render(
      <BrowserRouter>
        <UsersTable users={mockUsers} />
      </BrowserRouter>
    );

    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('formats date correctly', () => {
    render(
      <BrowserRouter>
        <UsersTable users={mockUsers} />
      </BrowserRouter>
    );

    // Date should be formatted as "Jan 15, 2022 10:30 AM" or similar
    expect(screen.getByText(/Jan 15, 2022/i)).toBeInTheDocument();
  });

  it('renders empty state when no users', () => {
    render(
      <BrowserRouter>
        <UsersTable users={[]} />
      </BrowserRouter>
    );

    // Table headers should still exist
    expect(screen.getByText('Organization')).toBeInTheDocument();
  });

  it('displays user emails correctly', () => {
    render(
      <BrowserRouter>
        <UsersTable users={mockUsers} />
      </BrowserRouter>
    );

    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('bob@example.com')).toBeInTheDocument();
  });
});
