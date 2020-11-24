import {FormHTMLAttributes} from 'react';
import {Text} from '@/components/Typography';
import {createCn, cx} from '@/helpers';
import './styles.scss';

interface GroupProps {
  label?: string;
  children: React.ReactNode;
}

type FormComponent = React.FC<FormHTMLAttributes<HTMLFormElement>> & {
  Group: React.FC<GroupProps>;
};

const cn = createCn('form');
export const Form: FormComponent = ({children, className, ...props}) => {
  return (
    <form {...props} className={cx(cn(), className)}>
      {children}
    </form>
  );
};

const gcn = createCn('form-group');
const Group: React.FC<GroupProps> = ({label, children}) => {
  return (
    <div className={gcn()}>
      {label && (
        <Text color="gray" bold size="sm" className={gcn('label')}>
          {label}
        </Text>
      )}
      {children}
    </div>
  );
};

Form.Group = Group;
