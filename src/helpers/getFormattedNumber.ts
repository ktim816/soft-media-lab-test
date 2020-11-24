import {DEFAULT_SEPARATOR} from '@/constants';

export const getFormattedNumber = (value: string, separator?: string) =>
  Number(
    value
      .toString()
      .split(separator || DEFAULT_SEPARATOR)
      .join('')
  );
