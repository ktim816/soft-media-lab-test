import {DEFAULT_SEPARATOR} from '@/constants';

export const formatNumber = (
  value: string | number | readonly string[] | undefined,
  separator?: string
) =>
  Number(value)
    .toLocaleString()
    .replace(/,/g, separator || DEFAULT_SEPARATOR);
