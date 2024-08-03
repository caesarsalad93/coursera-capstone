import { describe, it, expect, vi, beforeEach } from 'vitest';
import { updateTimes, initializeTimes } from './App';
import { fetchAPI } from './api';

// Mock the fetchAPI function
vi.mock('./api', () => ({
  fetchAPI: vi.fn()
}));

describe('Reducer functions', () => {
    beforeEach(() => {
      // Clear all mocks before each test
      vi.clearAllMocks();
    });
  
    it('updateTimes returns the correct times', () => {
      const mockTimes = ['18:00', '19:00', '20:00'];
      vi.mocked(fetchAPI).mockReturnValue(mockTimes);
  
      const initialState = ['17:00', '18:00'];
      const newDate = '2024-08-02';
      const action = { type: 'UPDATE_TIMES', payload: newDate };
  
      const newState = updateTimes(initialState, action);
  
      expect(fetchAPI).toHaveBeenCalledWith(new Date(newDate));
      expect(newState).toEqual(mockTimes);
    });
  
    it('initializeTimes returns the correct initial times', () => {
      const mockInitialTimes = ['17:00', '18:00', '19:00'];
      vi.mocked(fetchAPI).mockReturnValue(mockInitialTimes);
  
      const initialTimes = initializeTimes();
  
      expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
      expect(initialTimes).toEqual(mockInitialTimes);
    });
  });