import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as ButtonTypes from '../consts/buttonTypes';

const style = {
  background: '#A1AF76',
  borderRadius: '10px',
  gridColumn: '1 / span 4',
  gridRow: '1',
  fontFamily: 'Orbitron',
  fontSize: '25px',
  textAlign: 'right',
  marginBottom: '10px',
  paddingRight: '10px',
  paddingTop: '15px',
  verticalAlign: 'middle'
};

class ExpressionScreen extends Component {
    constructor(props){
      super(props);
      //console.log(props);
    }
    render() {
      return (
        <div style={style} id='display'>{this.props.expression}</div>
      );
    }
  }

  ExpressionScreen.propTypes = {
    expression: PropTypes.array.isRequired
  };

  const mapStateToProps = state => ({
    expression: state.map(key => ButtonTypes.buttonMap.get(key))
  });

  export default connect(mapStateToProps, null)(ExpressionScreen);
  
  