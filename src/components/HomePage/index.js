import React from 'react';
import { FormattedMessage } from 'react-intl';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <FormattedMessage
            id={'homepage.title'}
            defaultMessage={'[HomePage]'}
          />
        </h3>
        <p>
          <FormattedMessage
            id={'homepage.paragraph'}
            defaultMessage={'[Hello, World!]'}
          />
        </p>
      </div>
    );
  }
}

export default HomePage;
