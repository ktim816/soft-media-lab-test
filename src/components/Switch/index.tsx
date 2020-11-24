import {useState, useEffect} from 'react';
import {createCn} from '@/helpers';
import {Field} from 'redux-form';
import {Text} from '@/components/Typography';
import './styles.scss';
import {InputHTMLAttributes} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labels?: [string, string];
}

const switchId = 'react-switch-new';

const cn = createCn('switch');
export const Switch: React.FC<Props> = ({
  defaultChecked,
  checked,
  labels,
  onChange,
  ...props
}) => {
  const [selected, setSelected] = useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((prevSelected) => !prevSelected);
    onChange?.(e);
  };

  return (
    <div className={cn()}>
      {labels && (
        <Text
          color={!selected ? 'black' : 'gray'}
          bold
          size="sm"
          component="label"
          htmlFor={switchId}
        >
          {labels[0]}
        </Text>
      )}
      <div
        className={cn('wrapper')}
        style={{...(labels && {margin: '0 10px'})}}
      >
        <Field
          {...props}
          component="input"
          className={cn('checkbox', {active: selected})}
          id={switchId}
          checked={checked}
          defaultChecked={defaultChecked}
          type="checkbox"
          onChange={handleChange}
        />
        <label className={cn('label', {active: selected})} htmlFor={switchId}>
          <span className={cn('button')} />
        </label>
      </div>
      {labels && (
        <Text
          color={selected ? 'black' : 'gray'}
          bold
          size="sm"
          component="label"
          htmlFor={switchId}
        >
          {labels[1]}
        </Text>
      )}
    </div>
  );
};
