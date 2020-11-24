import {useState, useEffect} from 'react';
import {createCn, cx} from '@/helpers';
import './styles.scss';

interface Props {
  children: React.ReactNode;
  isFreeze?: boolean;
  content: string;
  delay?: number;
  className?: string;
  direction?: 'top' | 'bottom' | 'right' | 'left';
}

const cn = createCn('tooltip');
export const Tooltip: React.FC<Props> = ({
  className,
  children,
  isFreeze,
  direction = 'top',
  content,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isFreeze) {
      setIsActive(true);
    }
  }, [isFreeze]);

  const handleShow = () => {
    setIsActive(true);
  };

  const handleHide = () => {
    setIsActive(false);
  };

  return (
    <div
      className={cx(cn(), className)}
      {...(!isFreeze && {
        onMouseEnter: handleShow,
        onMouseLeave: handleHide,
      })}
    >
      {children}
      {isActive && <div className={cn('tip', {direction})}>{content}</div>}
    </div>
  );
};
