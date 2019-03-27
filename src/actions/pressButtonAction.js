import {PRESS_BUTTON} from '../consts/actionTypes';

const pressButton = dispatch => (buttonId, buttonValue) => {
    return dispatch({
        type: PRESS_BUTTON,
        buttonId: buttonId,
        buttonValue: buttonValue
    })
};

export default pressButton;