export interface TimeDifference {
  value: number;
  unit: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' | string;
}

export function getTimeDifference(
  createdAt: string | Date | number,
  now?: Date
): TimeDifference {
  const currentDate = now || new Date();
  const createdAtDate = new Date(createdAt);

  if (createdAtDate > currentDate) {
    return { value: 0, unit: '' };
  }

  const timeDifferenceInMilliseconds = Math.abs(
    currentDate.valueOf() - createdAtDate.valueOf()
  );

  const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
  const minutes = Math.floor((seconds % 3600) / 60);
  const hours = Math.floor((seconds % 86400) / 3600);
  const days = Math.floor(seconds / 86400);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years >= 1) {
    return { value: years, unit: years === 1 ? 'year' : 'years' };
  } else if (months >= 1) {
    return { value: months, unit: months === 1 ? 'month' : 'months' };
  } else if (weeks >= 1) {
    return { value: weeks, unit: weeks === 1 ? 'week' : 'weeks' };
  } else if (days >= 1) {
    return { value: days, unit: days === 1 ? 'day' : 'days' };
  } else if (hours >= 1) {
    return { value: hours, unit: hours === 1 ? 'hour' : 'hours' };
  } else {
    return { value: minutes, unit: minutes === 1 ? 'minute' : 'minutes' };
  }
}
