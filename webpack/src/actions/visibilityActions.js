'use strict';
import * as types from './actionTypes';

export function loginFormVisibilityAction(show) {
    return {type: types.CHANGE_LOGIN_VISIBILITY, show};
}
