import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { setSelectedField, fetchCensusData } from '../actions/index';

const rowHeight = 42;

const defaultValue = {value: 0, primaryText: '(Select Value For Data)'};

class FieldSelectorDropdown extends Component {

  constructor(props) {
    super(props);
		injectTapEventPlugin();
    this.props.setSelectedField({ key: -1 });
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    console.log('Calling handleChange');
    this.props.setSelectedField({key: value, value: this.props.columns[value]});
    this.props.fetchCensusData(this.props.columns[value]);
  }

  render() {
    let idx = 0;
    return (
      <DropDownMenu
        maxHeight={this.props.columns.length*rowHeight}
        value={this.props.selectedField.key}
        onChange={this.handleChange}
        openImmediately={false}>
        {this.props.columns.map(
          (column) => <MenuItem
												value={idx++}
												key={column}
												primaryText={column}
											/>)}
      </DropDownMenu>
    );
  }
}

function mapStateToProps({ columns, selectedField }) {
  return { columns, selectedField };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setSelectedField, fetchCensusData }, dispatch
  );
}

FieldSelectorDropdown.propTypes = {
  setSelectedField: PropTypes.func,
  columns: PropTypes.array,
  selectedField: PropTypes.object,
  fetchCensusData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldSelectorDropdown);
