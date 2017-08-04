// @flow

import React from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import './styles.css';
import Client from "../../Api";
import CatalogFilter from "../CatalogFilter";
import {CatalogProducts} from "syedcommonfe"
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      colors: {}
    };
  }

  componentDidMount() {
    console.log('this.props',this.props)
    if (this.props.backendApi) {
      Client.post(this.props.backendApi + '/search/Ounass', {
        colors: this.props.match.params.id ? this.props.match.params.id.split(","):[]
      }, products => {
        this.setState({products: products});
      });
      Client.get(this.props.backendApi + '/colors/Ounass', colors => {
        this.setState({colors: colors});
      });
    }
  }

  handleClick = color => {
    Client.post(this.props.backendApi + '/search/Ounass', {
      colors: color
    }, products => {
      this.setState({products: products});
    });
    color.length > 0 ? history.push('/colors=' + color) : history.push('/')

  };

  render() {
    return (
      <div className="Container">
        <MuiThemeProvider>
          <Grid container gutter={24}>
            <Grid item md={3} sm={3} xs={11}>
              <CatalogFilter colors={this.state.colors} handler={this.handleClick} searchedColor={this.props.match.params.id ? this.props.match.params.id.split(","):[]}/>
            </Grid>
            <Grid item md={9} sm={8} xs={11}>
              <CatalogProducts products={this.state.products} productImagePath={this.props.productImagePath}/>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

Catalog.propTypes = {
  backendApi: PropTypes.string.isRequired,
  productImagePath: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired
};

export default Catalog;
