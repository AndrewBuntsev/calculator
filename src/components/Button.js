import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import pressButtonAction from '../actions/pressButtonAction';



class Button extends Component {

    constructor(props){
      super(props);

      this.onClick = this.onClick.bind(this);
    }
  
    buttonStyle = {
      background: this.props.color,
      borderRadius: '3px',
      gridColumn: this.props.column + (this.props.columnSpan != undefined ? ' / span ' + this.props.columnSpan : ''),
      gridRow: this.props.row + (this.props.rowSpan != undefined ? ' / span ' + this.props.rowSpan : ''),
      fontSize: '28px',
      color: '#DDDDDD'
    };

    onClick(e){
      this.props.pressButton(e.target.id, e.target.value);
    }


    render() {
      return (
        <button 
          style={this.buttonStyle} 
          onClick={this.onClick} 
          value={this.props.type}
          id={this.props.id}>
            {this.props.type}
        </button>
      );
    }
}

Button.defaultProps = {
  color: '#58595B'
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  rowSpan: PropTypes.number,
  columnSpan: PropTypes.number,
  color: PropTypes.string.isRequired,
  pressButton: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  pressButton: pressButtonAction(dispatch)
});

export default connect(null, mapDispatchToProps)(Button);
  
  