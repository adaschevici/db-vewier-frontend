import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FieldSelectorDropdown from '../containers/field-selector';
import CensusTable from '../containers/census-table';
import { fetchColumnNames, setSelectedField } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);

    // init lifecycle method ES5 willComponentMount equivalent
    this.props.fetchColumnNames();
    this.props.setSelectedField({key: 0, value: this.props.columns[0]});
  }

  render() {
    return (
			<div>
				<MuiThemeProvider>
					<FieldSelectorDropdown />
				</MuiThemeProvider>
				<MuiThemeProvider>
					<CensusTable />
				</MuiThemeProvider>
			</div>
    );
  }
}

function mapStateToProps({ columns }) {
  return { columns };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchColumnNames, setSelectedField }, dispatch
  );
}

App.propTypes = {
  fetchColumnNames: PropTypes.func,
  setSelectedField: PropTypes.func,
  columns: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
