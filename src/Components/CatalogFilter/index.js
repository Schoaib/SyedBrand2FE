// @flow
import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import ColorFilter from '../ColorFilter';


class CatalogFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      searchedColor: this.props.searchedColor
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({colors: nextProps.colors});
    this.setState({searchedColor: nextProps.searchedColor});
  }

  handler = color => {
    this.setState({searchedColor: color});
    this.props.handler(color);
  };

  render() {
    return (
      <div className="Container-Filter">
        <h4>Refine Category</h4>
        <ColorFilter colors={this.state.colors} handler={this.handler} searchedColor={this.state.searchedColor} />
      </div>
    );
  }
}

CatalogFilter.propTypes = {
  colors: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
};

export default CatalogFilter;
