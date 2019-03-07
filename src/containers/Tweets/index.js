import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import * as tweetActions from './actions';
import LoadingIndicator from '../../components/LoadingIndicator/index';
import TextInput from '../../components/TextInput/TextInput';
import '../../utils/griddle.css';

export class TweetsPage extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tweets: PropTypes.array
  };

  state = {
    errors: { searchTerm: null },
    searchTerm: '',
    data: [],
    tweets: [],
    currentPage: 1,
    pageSize: 10,
    recordCount: 0
  };

  static defaultProps = {
    tweets: []
  };

  componentWillMount() {
    this.updateTableState(this.props.tweets, 1);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.tweets !== this.props.tweets) {
      this.updateTableState(nextProps.tweets, 1);
    }
  }

  searchValid = () => {
    let searchIsValid = true;
    const errors = { searchTerm: null };

    if (this.state.searchTerm.length === 0) {
      errors.searchTerm = 'You must enter a valid Search Term';
      searchIsValid = false;
    }

    this.setState({ errors });
    return searchIsValid;
  };

  updateTableState = (data, currentPage) => {
    const { pageSize } = this.state;
    const slicedData = [...data].slice(
      (currentPage - 1) * pageSize,
      pageSize * currentPage
    );
    this.setState({
      data: slicedData,
      currentPage,
      recordCount: data.length,
      tweets: data
    });
  };

  onNext = () => {
    const { currentPage, tweets } = this.state;
    this.updateTableState(tweets, currentPage + 1);
  };

  onPrevious = () => {
    const { currentPage, tweets } = this.state;
    this.updateTableState(tweets, currentPage - 1);
  };

  onGetPage = pageNumber => {
    this.updateTableState(this.state.tweets, pageNumber);
  };

  updateSearchTermState = event =>
    this.setState({ searchTerm: event.target.value });

  onSearchButtonClick = event => {
    event.preventDefault();

    if (!this.searchValid()) {
      return;
    }

    const { actions } = this.props;
    actions.fetchTweets(this.state.searchTerm);
  };

  render() {
    const { loading } = this.props;
    const {
      errors,
      searchTerm,
      data,
      recordCount,
      pageSize,
      currentPage
    } = this.state;
    let loadingIndicator = null;

    if (loading) {
      loadingIndicator = (
        <div>
          <div style={{ maxHeight: '50px', maxWidth: '50px' }}>
            <LoadingIndicator />
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1>Tweets</h1>
        <div>
          <div>
            <TextInput
              name="searchTerm"
              label="Search Term"
              onChange={this.updateSearchTermState}
              error={errors.searchTerm}
              value={searchTerm}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
              onClick={this.onSearchButtonClick}
            />
          </div>
          {loadingIndicator}
        </div>
        <Griddle
          data={data}
          pageProperties={{
            currentPage,
            pageSize,
            recordCount
          }}
          events={{
            onNext: this.onNext,
            onPrevious: this.onPrevious,
            onGetPage: this.onGetPage
          }}
        >
          <RowDefinition>
            <ColumnDefinition id="username" title="Username" />
            <ColumnDefinition id="sentiment" title="Sentiment" />
            <ColumnDefinition id="fullText" title="Text" />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  tweets: state.getIn(['tweets', 'tweets']).toJS(),
  loading: state.getIn(['tweets', 'loading'])
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(tweetActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(TweetsPage);
