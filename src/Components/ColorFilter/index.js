// @flow
import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {ColorFilterItem} from 'syedcommonfe';

const colorImagePath = "//prod2.atgcdn.ae/small_light(cw=70,ch=70,dw=70,dh=70,of=webp,q=90)/media/attribute/swatch";

class ColorFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      searchedColor: this.props.searchedColor
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({colors: nextProps.colors});
  }

  onMouseOver = (color) => {
    this.setState({hover: color});
  }

  onMouseLeave = () => {
    this.setState({hover: ''});
  }

  handler = color => {
    if(!color)
    {
      this.setState({searchedColor: []});
      this.props.handler([]);
      return;
    }

    let arr=  this.state.searchedColor;
    if(arr.find((searchColor) => {return  searchColor === color } ))
    {
      arr.splice(arr.indexOf(color),1);
    }
    else {
      arr.push(color);
    }
    this.setState({searchedColor: arr});
    this.props.handler(arr);
  };

  render() {
    return (
      <div>
        <h5>Colour... {this.state.searchedColor.length > 0 && <a className="Clear-filters" onClick={() => this.handler()}>Clear Filters</a>
        }</h5>
        <div className="Center">
          {Object.keys(this.state.colors).map((color) =>
            <ColorFilterItem
              color={color}
              colorCode={this.state.colors[color]}
              showIcon={this.state.hover === color || this.state.searchedColor.find((searchColor) => {return  searchColor === color } )}
              onClick={() => this.handler(color)}
              onMouseEnter={() => this.onMouseOver(color)}
              onMouseLeave={() => this.onMouseLeave(color)}
              showImage={this.state.colors[color] && this.state.colors[color].indexOf('#') === -1}
              colorImagePath ={colorImagePath}/>
          )}
        </div>
      </div>
    );
  }
}

ColorFilter.propTypes = {
  colors: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
};

export default ColorFilter;
