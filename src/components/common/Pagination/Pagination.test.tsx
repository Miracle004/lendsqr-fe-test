import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  const mockOnPageChange = vi.fn();
  const mockOnItemsPerPageChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders pagination info correctly', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    expect(screen.getByText(/Showing/)).toBeInTheDocument();
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });

  it('calculates total pages correctly', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    // Should show page button for page 10 (last page)
    const pageButtons = screen.getAllByRole('button');
    const lastPageButton = pageButtons.find(btn => btn.textContent === '10' && btn.type === 'button');
    expect(lastPageButton).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const prevButton = screen.getAllByRole('button')[0];
    expect(prevButton).toBeDisabled();
  });

  it('enables previous button when not on first page', () => {
    render(
      <Pagination
        currentPage={2}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const prevButton = screen.getAllByRole('button')[0];
    expect(prevButton).not.toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(
      <Pagination
        currentPage={10}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[buttons.length - 1];
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange when page button is clicked', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when next button is clicked', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[buttons.length - 1];
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when previous button is clicked', () => {
    render(
      <Pagination
        currentPage={2}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const prevButton = screen.getAllByRole('button')[0];
    fireEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onItemsPerPageChange when items per page is changed', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const select = screen.getByDisplayValue('10');
    fireEvent.change(select, { target: { value: '20' } });

    expect(mockOnItemsPerPageChange).toHaveBeenCalledWith(20);
  });

  it('highlights current page button', () => {
    render(
      <Pagination
        currentPage={3}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const page3Button = screen.getByText('3');
    // Check that the class attribute includes 'active' (CSS modules add hash)
    expect(page3Button.className).toMatch(/active/);
  });

  it('handles single page correctly', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={5}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        onItemsPerPageChange={mockOnItemsPerPageChange}
      />
    );

    const prevButton = screen.getAllByRole('button')[0];
    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[buttons.length - 1];

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });
});
