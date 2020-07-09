import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    console.log(this.props.match.path);
    switch (this.props.match.path) {
      case routes.article:
        this.setState({ pageType: 'articles' });
        console.log('articles loaded');
        break;
      case routes.twitter:
        console.log('twitters');
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      default:
    }
  }
  render() {
    const { match } = this.props;
    return (
      <DetailsTemplate pageType={this.state.pageType}>
        <p>{`is twitter: ${match.path === routes.twitter}`}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
