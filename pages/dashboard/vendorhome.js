import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../authentication/auth-page-wrappers/SecurePage';

const Vendorhome = dynamic(() => import('../../modules/Dashboards/Crypto'), {
  loading: () => <PageLoader />,
});

const CryptoDashboard = () => (
  <SecurePage>
    <Vendorhome />
  </SecurePage>
);

export default CryptoDashboard;
