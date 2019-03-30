import {PRESS_BUTTON} from '../consts/actionTypes';

const pressButton = dispatch => (buttonId) => {
    return dispatch({
        type: PRESS_BUTTON,
        buttonId: buttonId
    })
};

export default pressButton;