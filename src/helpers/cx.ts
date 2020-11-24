export const cx = (...classNames: (string | undefined)[]) =>
  classNames.join(' ').trim();
