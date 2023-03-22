import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// React.Strict mode is on
// StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).


root.render(<App />);