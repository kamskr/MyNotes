import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p>{`is twitter: ${match.path === routes.twitter}`}</p>
  </DetailsTemplate>
);

export default DetailsPage;
