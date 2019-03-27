import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


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
    render() {
      return (
        <div style={style}>{this.props.expression.map(e => e.buttonValue)}</div>
      );
    }
  }

  ExpressionScreen.propTypes = {
    expression: PropTypes.array.isRequired
  };

  const mapStateToProps = state => ({
    expression: state.expression
  });

  export default connect(mapStateToProps, null)(ExpressionScreen);
  
  