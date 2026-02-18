import { getTimeDifference, TimeDifference } from './dateAndTime';

const units = [
  'minute',
  'minutes',
  'hour',
  'hours',
  'day',
  'days',
  'week',
  'weeks', // Added 'week' and 'weeks'
  'month',
  'months',
  'year',
  'years'
];

describe('getTimeDifference', () => {
  test('should return correct time difference for recent dates without now argument', () => {
    const created_at = '2024-01-15T12:30:00Z';
    const result: TimeDifference = getTimeDifference(created_at);
    expect(result.value).toBeGreaterThanOrEqual(0);
    expect(units).toContain(result.unit);
  });

  test('should handle negative time difference gracefully without now argument', () => {
    const created_at = '2050-01-01T00:00:00Z'; // A future date
    const result: TimeDifference = getTimeDifference(created_at);
    expect(result.value).toBe(0);
    expect(result.unit).toEqual('');
  });

  test('should handle extremely large positive time difference without now argument', () => {
    const created_at = '1900-01-01T00:00:00Z'; // A distant past date
    const result: TimeDifference = getTimeDifference(created_at);
    expect(result.value).toBeGreaterThanOrEqual(0);
    expect(units).toContain(result.unit);
  });

  test('should return correct time difference in minutes', () => {
    const created_at = '2024-01-15T12:25:00Z';
    const now = new Date('2024-01-15T12:30:00Z');
    const result: TimeDifference = getTimeDifference(created_at, now);
    expect(result.value).toBe(5);
    expect(result.unit).toEqual('minutes');
  });

  test('should return correct time difference in hours', () => {
    const created_at = '2024-01-15T10:30:00Z';
    const now = new Date('2024-01-15T12:30:00Z');
    const result: TimeDifference = getTimeDifference(created_at, now);
    expect(result.value).toBe(2);
    expect(result.unit).toEqual('hours');
  });

  test('should return correct time difference in days', () => {
    const created_at = '2024-01-10T12:30:00Z';
    const now = new Date('2024-01-15T12:30:00Z');
    const result: TimeDifference = getTimeDifference(created_at, now);
    expect(result.value).toBe(5);
    expect(result.unit).toEqual('days');
  });

  test('should return correct time difference in weeks', () => {
    const created_at = '2024-01-01T12:30:00Z';
    const now = new Date('2024-01-15T12:30:00Z');
    const result: TimeDifference = getTimeDifference(created_at, now);
    expect(result.value).toBe(2);
    expect(result.unit).toEqual('weeks');
  });

  test('should return correct time difference in months', () => {
    const created_at = '2023-08-15T12:30:00Z';
    const now = new Date('2024-01-15T12:30:00Z');
    const result: TimeDifference = getTimeDifference(created_at, now);
    expect(result.value).toBe(5);
    expect(result.unit).toEqual('months');
  });

  test('should return correct time difference in years', () => {
    const created_at = '2019-01-15T12:30:00Z';
    const now = new Date('2024-01-15T12:30:00Z');
    const result: TimeDifference = getTimeDifference(created_at, now);
    expect(result.value).toBe(5);
    expect(result.unit).toEqual('years');
  });
});
