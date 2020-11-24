import {createCn, cx} from '@/helpers';
import './styles.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const cn = createCn('info-block');
export const InfoBlock: React.FC<Props> = ({children, className}) => {
  return <div className={cx(cn(), className)}>{children}</div>;
};
