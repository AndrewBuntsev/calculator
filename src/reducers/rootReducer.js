import  {defaultState} from '../store';
import {PRESS_BUTTON} from '../consts/actionTypes';
import * as ButtonTypes from '../consts/buttonTypes';
import  {buttonMap} from '../consts/buttonTypes';

const CHARACTERS_LIMIT = 14;


export default function(state, action){
    switch(action.type){
        case PRESS_BUTTON:

            if (action.buttonId === ButtonTypes.CLEAR){
                return defaultState;    
            }

            let newState = [...state];

            if (action.buttonId === ButtonTypes.DELETE){
                newState.pop();
                if (newState.length === 0){
                    return defaultState;
                }
                if (newState.length === 1 && !isNumberButton(newState[0])){
                    return defaultState;
                }
                return newState;
            }

            if (isOperationButton(action.buttonId)){
                if (isOperationButton(newState.slice(-1)[0])){
                    newState.pop();
                }
                newState.push(action.buttonId);
                return newState;
            }

            if (isNumberButton(action.buttonId)){
                if (newState.length === 1 && newState[0] === ButtonTypes.ZERO){
                    newState.pop();
                }
                newState.push(action.buttonId);
                return newState;
            }

            if (action.buttonId === ButtonTypes.DECIMAL){
                if (isOperationButton(newState.slice(-1)[0])){
                    newState.push(ButtonTypes.ZERO);
                    newState.push(action.buttonId);
                    return newState;
                }
                let lastOperationIndex = lastIndexOfAny(state, [ButtonTypes.DIVIDE, ButtonTypes.MULTIPLY, ButtonTypes.SUBTRACT, ButtonTypes.ADD])
                let lastOperand = state;
                if (lastOperationIndex > -1){
                    lastOperand = state.slice(lastOperationIndex + 1);
                }
                if (lastOperand.includes(ButtonTypes.DECIMAL)){
                    return state;
                }
                
                newState.push(action.buttonId);
                return newState;
            }

            if (action.buttonId === ButtonTypes.EQUALS){
                let stringExpression = state.reduce((acc,el) => acc + buttonMap.get(el), '');
                console.log(stringExpression);
                let resultExpression = eval(stringExpression).toString();
                console.log(resultExpression);

                return resultExpression.split('').reduce((acc,el) => acc.concat([getKeyByValue(buttonMap, el)]), []).slice(0, CHARACTERS_LIMIT);
            }
            
            return state;
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

function getKeyByValue(map, value) {
    return [...map.keys()].find(key => map.get(key) === value);
}                            

function lastIndexOfAny(where, what){
    return what.reduce((acc,el) => Math.max(acc, where.lastIndexOf(el)), -1);
}

                            
                            