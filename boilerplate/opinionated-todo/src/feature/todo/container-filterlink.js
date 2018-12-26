import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FilterStatus, setFilterStatus } from './action-main';
import Link from './component-link';

class FilterLink extends React.Component {
  render() {
    return (
      <div>
        <span>Show: </span>
        <Link onClick={() => this.props.setFilterStatus(FilterStatus.SHOW_ALL)}
          active={this.props.visibilityFilter === FilterStatus.SHOW_ALL}>
          All
          </Link>
        <Link onClick={() => this.props.setFilterStatus(FilterStatus.SHOW_ACTIVE)}
          active={this.props.visibilityFilter === FilterStatus.SHOW_ACTIVE}>
          Active
          </Link>
        <Link onClick={() => this.props.setFilterStatus(FilterStatus.SHOW_COMPLETED)}
          active={this.props.visibilityFilter === FilterStatus.SHOW_COMPLETED}>
          Completed
          </Link>
      </div>
    )
  }
}

export default connect(
  (state) => ({ visibilityFilter: state.filter }),
  (dispatch) => ({ setFilterStatus: bindActionCreators(setFilterStatus, dispatch) })
)(FilterLink);