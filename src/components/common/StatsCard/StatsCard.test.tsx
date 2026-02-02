import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatsCard from './StatsCard';

describe('StatsCard', () => {
  it('renders card with correct label and value', () => {
    render(<StatsCard icon="users" label="Total Users" value="500" />);
    
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('renders card with active users icon and styling', () => {
    const { container } = render(
      <StatsCard icon="active" label="Active Users" value="312" />
    );
    
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('312')).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/icons/np_users_1248631_000000 1.svg');
  });

  it('renders card with loans icon', () => {
    const { container } = render(
      <StatsCard icon="loans" label="Users with Loans" value="225" />
    );
    
    expect(screen.getByText('Users with Loans')).toBeInTheDocument();
    expect(screen.getByText('225')).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/icons/np_loan_1243991_000000 1.svg');
  });

  it('renders card with savings icon', () => {
    const { container } = render(
      <StatsCard icon="savings" label="Users with Savings" value="390" />
    );
    
    expect(screen.getByText('Users with Savings')).toBeInTheDocument();
    expect(screen.getByText('390')).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/icons/np_money_549109_000000 1.svg');
  });

  it('displays loading state correctly', () => {
    render(<StatsCard icon="users" label="Total Users" value="..." />);
    
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  it('formats large numbers correctly', () => {
    render(<StatsCard icon="users" label="Total Users" value="1,000,000" />);
    
    expect(screen.getByText('1,000,000')).toBeInTheDocument();
  });
});
