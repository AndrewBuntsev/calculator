import {PRESS_BUTTON} from '../consts/actionTypes';
import * as ButtonTypes from '../consts/buttonTypes';

const defaultState = {
    expression: [
        {
            buttonId: ButtonTypes.ZERO,
            buttonValue: '0'
        }
    ]
};

export default function(state = defaultState, action){
    switch(action.type){
        case PRESS_BUTTON:
            if (action.buttonId === ButtonTypes.CLEAR){
                return defaultState;    
            }
            if (action.buttonId === ButtonTypes.DELETE){
                if (state.expression.length > 1){
                    return {expression: state.expression.slice(0, state.expression.length - 1)};
                }
            }
            if (isOperationButton(action.buttonId)){
                let newState = state;
                if (isOperationButton(state.expression[state.expression.length - 1].buttonId)){
                    newState = {expression: state.expression.slice(0, state.expression.length - 1)};
                }
                return {expression: [...newState.expression, {
                    buttonId: action.buttonId,
                    buttonValue: action.buttonValue
                }]};
            }
            if (isNumberButton(action.buttonId)){
                if (state.expression.length == 1 && state.expression[0].buttonId === ButtonTypes.ZERO){
                    return {expression: [{
                        buttonId: action.buttonId,
                        buttonValue: action.buttonValue
                    }]};
                }
                return {expression: [...state.expression, {
                    buttonId: action.buttonId,
                    buttonValue: action.buttonValue
                }]};
            }
            if (action.buttonId === ButtonTypes.EQUALS){
                let stringExpression = state.expression.reduce((acc,el) => acc + el.buttonValue, '');
                let resultExpression = eval(stringExpression).toString();
                return {expression: resultExpression.reduce((acc,el) => acc.concat({
                    buttonId: action.buttonId,
                    buttonValue: action.buttonValue
                }), [])};

                console.log(stringExpression);
                console.log(typeof eval(stringExpression).toString());
            }
            
            else{
                return {expression: [...state.expression, {
                    buttonId: action.buttonId,
                    buttonValue: action.buttonValue
                }]};
            }


            
        default:
            return state;
    }
}

const isNumberButton = buttonId => buttonId === ButtonTypes.ZERO 
                            || buttonId === ButtonTypes.ONE
                            || buttonId === ButtonTypes.TWO
                            || buttonId === ButtonTypes.THREE
                            || buttonId === ButtonTypes.FOUR
                            || buttonId === ButtonTypes.FIVE
                            || buttonId === ButtonTypes.SIX
                            || buttonId === ButtonTypes.SEVEN
                            || buttonId === ButtonTypes.EIGHT
                            || buttonId === ButtonTypes.NINE;

const isOperationButton = buttonId => buttonId === ButtonTypes.DIVIDE
                            || buttonId === ButtonTypes.MULTIPLY
                            || buttonId === ButtonTypes.SUBTRACT
                            || buttonId === ButtonTypes.ADD;

                            
                            