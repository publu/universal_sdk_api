import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Web3Card from './components/Web3Card';
import { 
  fetchUniversalProfile, 
  fetchENSProfile,
  fetchLensProfile,
  fetchFarcasterProfile,
  fetchDotBitProfile 
} from './apiFunctions';

// Export the Web3Card component for use in other applications
export default Web3Card;

// Export the endpt functions for use in other applications
export {
  fetchUniversalProfile, 
  fetchENSProfile,
  fetchLensProfile,
  fetchFarcasterProfile,
  fetchDotBitProfile
};

// Render the example application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
