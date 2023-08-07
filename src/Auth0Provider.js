// src/Auth0Provider.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-ntre05c4eby20eu1.us.auth0.com';
  const clientId = 'QSqj94mC1EHX5f7QgUFTvaZOx29TqP8S';
  const audience = 'TF'; // Optional: Set your Auth0 API Audience if applicable
  const redirectUri = window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
