import { describe, it, expect, beforeEach, vi, } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe("BookingForm", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = vi.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );
  });

  it('renders all form fields', () => {
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  it('updates date when selected', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2023-08-01' } });
    expect(dateInput.value).toBe('2023-08-01');
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2023-08-01' });
  });

  it('displays all available times', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    mockAvailableTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  it('updates guests when number is changed', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput.value).toBe('5');
  });

  it('updates occasion when selected', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
    expect(occasionSelect.value).toBe('Anniversary');
  });

  
});
