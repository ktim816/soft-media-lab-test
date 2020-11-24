import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {reduxForm} from 'redux-form';
import {Text} from '@/components/Typography';
import {RadioGroup, RadioItem} from '@/components/RadioGroup';
import {Form} from '@/components/Form';
import {Switch} from '@/components/Switch';
import {Input} from '@/components/Input';
import {InfoBlock} from '@/components/InfoBlock';
import {createCn, formatNumber} from '@/helpers';
import {DEFAULT_CURRENCY, DEFAULT_SALARY, TAX_PERCENTAGE} from '@/constants';
import {Selectors} from '@/store';
import './styles.scss';

const radioItems: RadioItem[] = [
  {
    id: 1,
    text: 'Оклад за месяц',
    value: 'month',
  },
  {
    id: 2,
    text: 'МРОТ',
    value: 'mrot',
    info:
      'МРОТ - минимальный размер\n оплаты труда. Разный для\n разных регионов',
  },
  {
    id: 3,
    text: 'Оклад за день',
    value: 'day',
  },
  {
    id: 4,
    text: 'Оклад за час',
    value: 'hour',
  },
];

const initialFormState = {
  salaryGroup: radioItems[0].value,
  withoutTax: true,
  salary: DEFAULT_SALARY,
};

const reduxFormOptions = {
  form: 'salary',
  initialValues: initialFormState,
};

const cn = createCn('salary-form');
const SalaryForm = reduxForm(reduxFormOptions)(
  ({handleSubmit, change, initialValues}) => {
    const formState = useSelector(Selectors.getFormState);
    const salary = formState?.salary.values?.salary;
    const salaryGroup = formState?.salary.values?.salaryGroup;
    const withoutTax = formState?.salary.values?.withoutTax;

    useEffect(() => {
      switch (salaryGroup) {
        case 'month':
          change('salary', DEFAULT_SALARY);
          break;
        case 'day':
          change('salary', DEFAULT_SALARY / 30);
          break;
        case 'hour':
          change('salary', DEFAULT_SALARY / 60);
          break;
      }
    }, [salaryGroup]);

    const getSalary = () => {
      return withoutTax ? salary : salary - calculateSalaryTax();
    };

    const calculateSalaryTax = () => {
      return (Number(salary) * TAX_PERCENTAGE) / 100;
    };

    const calculateTotalSalary = () => {
      return Number(getSalary()) + calculateSalaryTax();
    };

    const getTextAfterCurrency = () => {
      switch (salaryGroup) {
        case 'day':
          return 'в день';
        case 'hour':
          return 'в час';
      }
    };

    return (
      <div className={cn()}>
        <Form onSubmit={handleSubmit}>
          <Form.Group label="Сумма">
            <RadioGroup name="salaryGroup" items={radioItems} />
            <Switch
              name="withoutTax"
              labels={['Указать с НДФЛ', 'Без НДФЛ']}
              defaultChecked={initialValues.withoutTax}
            />
            <Input
              numeric
              name="salary"
              withCurrency
              value={salary}
              textAfterCurrency={getTextAfterCurrency()}
            />
          </Form.Group>
          {salaryGroup === 'month' && (
            <InfoBlock className={cn('info')}>
              <Text bold>
                {formatNumber(getSalary())} {DEFAULT_CURRENCY}
                <Text component="span"> сотрудник будет получать на руки</Text>
              </Text>
              <Text bold>
                {formatNumber(calculateSalaryTax())} {DEFAULT_CURRENCY}
                <Text component="span"> НДФЛ, 13% от оклада</Text>
              </Text>
              <Text bold>
                {formatNumber(calculateTotalSalary())} {DEFAULT_CURRENCY}
                <Text component="span"> за сотрудника в месяц</Text>
              </Text>
            </InfoBlock>
          )}
        </Form>
      </div>
    );
  }
);

export default SalaryForm;
