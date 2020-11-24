import {InputHTMLAttributes} from 'react';
import {Field} from 'redux-form';
import {Text} from '@/components/Typography';
import {DEFAULT_CURRENCY} from '@/constants';
import {createCn, formatNumber, getFormattedNumber} from '@/helpers';
import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  currency?: string;
  numeric?: boolean;
  withCurrency?: boolean;
  textAfterCurrency?: string;
}

const normalizeNumeric = (value: string) => {
  const re = /^[0-9\s\b]+$/;
  if (value === '' || re.test(value)) {
    return getFormattedNumber(value);
  }
};

const formatNumeric = (value: string) => formatNumber(value);

const cn = createCn('input');
export const Input: React.FC<Props> = ({
  currency = DEFAULT_CURRENCY,
  textAfterCurrency,
  withCurrency,
  value,
  numeric,
  ...props
}) => {
  return (
    <div className={cn()}>
      <Field
        {...props}
        component="input"
        value={numeric ? Number(value) : value}
        className={cn('field')}
        {...(numeric && {
          normalize: normalizeNumeric,
          format: formatNumeric,
        })}
      />
      {withCurrency && (
        <Text bold className={cn('text')}>
          {currency} {textAfterCurrency}
        </Text>
      )}
    </div>
  );
};
