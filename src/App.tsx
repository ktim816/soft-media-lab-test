import {Suspense} from 'react';
import {Switch, Route} from 'react-router';
import {HomePage} from '@/routes';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default App;
