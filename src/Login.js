import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//import EmailSignatureTemplate from '../components/emailSignatureTemplate/EmailSignatureTemplate';
import App from './App'

const EmailSignature = () => {
    const { isLoading, isAuthenticated, loginWithRedirect} = useAuth0();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        {isAuthenticated ? (
          <App />
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>
    );
  };
  
  export default EmailSignature;
  