import React, { Component } from 'react';
import Provider, {connect} from 'react-redux';

import ExpressionScreen from './ExpressionScreen';
import Button from './Button';
import * as ButtonTypes from '../consts/buttonTypes';



const frameStyle = {
  background: '#39393b',
  width: '300px',
  height: '400px',
  borderRadius: '15px',
  margin: 'auto',
  display: 'grid',
  padding: '20px',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1.5fr 1fr 1fr 1fr 1fr 1fr',
  gridColumnGap: '10px',
  gridRowGap: '12px'
};

class Frame extends Component {
    render() {

      return (
        <div style={frameStyle}>
        <ExpressionScreen></ExpressionScreen>
          <Button row={2} column={1} type='C' id={ButtonTypes.CLEAR} color='#222222'></Button>
          <Button row={2} column={2} type='←' id={ButtonTypes.DELETE} color='#222222'></Button>
          <Button row={2} column={3} type='/' id={ButtonTypes.DIVIDE} color='#222222'></Button>
          <Button row={2} column={4} type='x' id={ButtonTypes.MULTIPLY} color='#222222'></Button>

          <Button row={3} column={1} type='7' id={ButtonTypes.SEVEN}></Button>
          <Button row={3} column={2} type='8' id={ButtonTypes.EIGHT}></Button>
          <Button row={3} column={3} type='9' id={ButtonTypes.NINE}></Button>
          <Button row={3} column={4} type='-' id={ButtonTypes.SUBTRACT}></Button>

          <Button row={4} column={1} type='4' id={ButtonTypes.FOUR}></Button>
          <Button row={4} column={2} type='5' id={ButtonTypes.FIVE}></Button>
          <Button row={4} column={3} type='6' id={ButtonTypes.SIX}></Button>
          <Button row={4} column={4} type='+' id={ButtonTypes.ADD}></Button>

          <Button row={5} column={1} type='1' id={ButtonTypes.ONE}></Button>
          <Button row={5} column={2} type='2' id={ButtonTypes.TWO}></Button>
          <Button row={5} column={3} type='3' id={ButtonTypes.THREE}></Button>
          <Button row={5} rowSpan={2} column={4} type='=' id={ButtonTypes.EQUALS} color='#F15A2B'></Button>

          <Button row={6} column={1} columnSpan={2} type='0' id={ButtonTypes.ZERO}></Button>
          <Button row={6} column={3} type='.' id={ButtonTypes.DECIMAL}></Button>
        
        </div>
      );
    }
  }

  export default connect(null, null)(Frame);
  
