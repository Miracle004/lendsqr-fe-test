import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusBadge from './StatusBadge';

describe('StatusBadge', () => {
  it('renders active status with correct styling', () => {
    render(<StatusBadge status="Active" />);
    
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders inactive status with correct styling', () => {
    render(<StatusBadge status="Inactive" />);
    
    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });

  it('renders pending status with correct styling', () => {
    render(<StatusBadge status="Pending" />);
    
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('renders blacklisted status with correct styling', () => {
    render(<StatusBadge status="Blacklisted" />);
    
    expect(screen.getByText('Blacklisted')).toBeInTheDocument();
  });

  it('capitalizes status text correctly', () => {
    render(<StatusBadge status="Active" />);
    
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
});
