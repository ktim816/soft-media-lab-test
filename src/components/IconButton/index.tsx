import {createCn, cx} from '@/helpers';
import {ButtonHTMLAttributes} from 'react';
import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  innerRef?: React.RefObject<HTMLButtonElement>;
}

const cn = createCn('icon-button');
export const IconButton: React.FC<Props> = ({
  innerRef,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      ref={innerRef}
      type="button"
      className={cx(cn(), className)}
    >
      {children}
    </button>
  );
};
