import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WordCloud from 'react-d3-cloud';
import { getWordCountFromTweets } from '../../utils/wordCounter';

export class WordCloudComponent extends React.Component {
  static propTypes = {
    tweets: PropTypes.array
  };

  static defaultProps = {
    tweets: null
  };

  fontSizeMapper = word => Math.log2(word.value) * 10;

  rotate = word => word.value % 360;

  render() {
    const { tweets } = this.props;
    if (tweets) {
      const wordCounts = getWordCountFromTweets(tweets.slice(0, 50));
      return (
        <div>
          <h1>Word Cloud</h1>
          <div style={{ marginTop: '-100px' }}>
            <WordCloud
              data={wordCounts}
              fontSizeMapper={this.fontSizeMapper}
              rotate={this.rotate}
            />
          </div>
        </div>
      );
    }

    return null;
  }
}

export const mapStateToProps = state => ({
  tweets: state.getIn(['tweets', 'tweets']).toJS()
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(WordCloudComponent);
