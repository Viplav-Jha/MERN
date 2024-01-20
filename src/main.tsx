import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {api} from '@/state/api';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer:{[api.reducerPath]:api.reducer},
  middleware:(getDafult)=>getDafult().concat(api.middleware)
})
setupListeners(store.dispatch)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
