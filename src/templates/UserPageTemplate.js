import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  cardType: 'notes',
};

export default UserPageTemplate;
