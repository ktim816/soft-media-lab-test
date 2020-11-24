import SalaryForm from '@/components/forms/SalaryForm';
import {createCn} from '@/helpers';
import './styles.scss';

const cn = createCn('home');
const Home = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className={cn()}>
      <SalaryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
