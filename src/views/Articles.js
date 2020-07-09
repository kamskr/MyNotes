import React from 'react';
import Card from 'components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map((item) => (
      <Card
        id={item.id}
        cardType="articles"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
