import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from '@/store';
import '@/styles/index.scss';

const app = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
