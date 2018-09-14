import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { getSagaTest as getSagaTestAction } from './actions';

class SagaPage extends React.Component {
  static propTypes = {
    getSagaTest: PropTypes.func.isRequired,
    sagaTest: PropTypes.string
  };

  static defaultProps = {
    sagaTest: ''
  };

  onButtonClick = event => {
    event.preventDefault();
    const { getSagaTest } = this.props;
    getSagaTest();
  };

  render() {
    const { sagaTest } = this.props;
    return (
      <div>
        <h3>Saga Example</h3>
        <p>{`Test: ${sagaTest}`}</p>
        <button type={'button'} onClick={this.onButtonClick}>
          Test Saga
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sagaTest: state.getIn(['saga', 'test'])
});

const mapDispatchToProps = dispatch => ({
  getSagaTest: bindActionCreators(getSagaTestAction, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(SagaPage);
