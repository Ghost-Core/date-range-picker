import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import DateRangePicker from './DateRangePicker';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DateRangePicker />
  </StrictMode>
);
