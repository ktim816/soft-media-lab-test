import {useState, useRef, InputHTMLAttributes} from 'react';
import {Field} from 'redux-form';
import {createCn} from '@/helpers';
import {Text} from '@/components/Typography';
import {Tooltip} from '@/components/Tooltip';
import {IconButton} from '@/components/IconButton';
import './styles.scss';

export interface RadioItem {
  id: number;
  text: string;
  value: string;
  info?: string;
}

interface GroupProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  items: RadioItem[];
}

const cn = createCn('radio-group');
export const RadioGroup: React.FC<GroupProps> = ({items, name, onChange}) => {
  return (
    <div className={cn()}>
      {items.map((item) => (
        <Radio
          key={item.id}
          name={name}
          tooltip={item.info}
          value={item.value}
          text={item.text}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  tooltip?: string;
}

const rcn = createCn('radio');
export const Radio: React.FC<RadioProps> = ({text, tooltip, ...props}) => {
  const [isFreeze, setIsFreeze] = useState(false);

  const handleFreeze = () => {
    setIsFreeze((prevFreeze) => !prevFreeze);
  };

  return (
    <label className={rcn()}>
      <div className={rcn('outer')}>
        <Field
          {...props}
          component="input"
          type="radio"
          className={rcn('hidden')}
        />
        <div className={rcn('inner')} />
      </div>
      <Text bold className={rcn('text')}>
        {tooltip && (
          <Tooltip
            content={tooltip}
            direction="bottom"
            className={rcn('info')}
            isFreeze={isFreeze}
          >
            <IconButton onClick={handleFreeze}>
              {isFreeze ? 'x' : 'i'}
            </IconButton>
          </Tooltip>
        )}
        {text}
      </Text>
    </label>
  );
};
