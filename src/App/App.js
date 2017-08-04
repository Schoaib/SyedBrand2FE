//@flow
import React, {Component} from 'react';
import logo from './images/logo_en_ae.svg';
import './styles.css';
import Catalog from '../Components/Catalog';

const BACKEND_API = "http://localhost:8080";
const PRODUCT_IMAGE_PATH = "//ounass-prod4.mnpcdn.ae/small_light(p=listing2x,of=webp,q=90)/pub/media/catalog/product/";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <Catalog backendApi={BACKEND_API} productImagePath={PRODUCT_IMAGE_PATH} match={this.props.match}></Catalog>
      </div>
    );
  }
}

export default App;
