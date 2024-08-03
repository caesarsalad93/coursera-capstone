import { describe, it, expect, beforeEach, vi, } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe("BookingForm", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = vi.fn();
  const mockSubmit = vi.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
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
  
  it('renders correctly with initial values', () => {

    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('type', 'date');
    expect(screen.getByLabelText(/choose date/i)).toBeRequired();
    
    expect(screen.getByLabelText(/choose time/i)).toHaveValue('17:00');
    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
    
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('type', 'number');
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('min', '1');
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('max', '10');
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('placeholder', '1');
    
    expect(screen.getByLabelText(/occasion/i)).toHaveValue('Birthday');
    
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });

  it('enables submit button when date is selected', () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-01' } });
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeEnabled();
  });

  it('calls dispatch when date is changed', () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-01' } });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2024-08-01' });
  });

  it('calls submitForm with correct data on form submission', () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-01' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Anniversary' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      date: '2024-08-01',
      time: '17:00',
      guests: 4,
      occasion: 'Anniversary',
    });
  });

  it('validates guests number correctly', () => {
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
    expect(screen.getByLabelText(/number of guests/i)).toHaveValue(0);

    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '11' } });
    expect(screen.getByLabelText(/number of guests/i)).toHaveValue(11);

    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '5' } });
    expect(screen.getByLabelText(/number of guests/i)).toHaveValue(5);
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
