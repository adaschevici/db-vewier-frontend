import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Table,
	TableBody,
	TableFooter,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { fetchCensusData } from '../actions/index';

const styles = {
    propContainer: {
          width: 200,
          overflow: 'hidden',
          margin: '20px auto 0',
        },
    propToggleHeader: {
          margin: '20px auto 10px',
        },
};

class CensusTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };

    // this.renderRow = this.renderRow.bind(this);
    this.props.fetchCensusData(this.props.selectedField.value);
  }

  renderRow(row, index) {
    if (!this.props.selectedField.value || !row.average) {
      return
    }

    return (
      <TableRow key={index} selected={row.selected}>
        <TableRowColumn>{row[this.props.selectedField.value]}</TableRowColumn>
        <TableRowColumn>{row.count}</TableRowColumn>
        <TableRowColumn>{row.average}</TableRowColumn>
      </TableRow>
    );
  }

  render() {
		const cp = new Date();
		const year = cp.getFullYear();
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Census Data Stats" style={{textAlign: 'center'}}>
                Census Data Stats
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip={this.props.selectedField.value}>{this.props.selectedField.value}</TableHeaderColumn>
              <TableHeaderColumn tooltip="Count">Count</TableHeaderColumn>
              <TableHeaderColumn tooltip="Average">Average</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.censusTableData.map( (row, index) => (
              this.renderRow(row, index)
            ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn tooltip="The ID">{this.props.selectedField.value}</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Count</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Average</TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                &#169; Artur {year}
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ censusTableData, selectedField }) {
	return { censusTableData, selectedField };

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCensusData }, dispatch
  );
}

CensusTable.propTypes = {
  censusTableData: PropTypes.array,
  selectedField: PropTypes.object,
  fetchCensusData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CensusTable);
