import {
    changing_false, changing_true
} from "./changeIconRedux.js";

export const changing_true_Func = () => async (dispatch) => {
    dispatch(changing_true());
};

export const changing_false_Func = () => async (dispatch) => {
    dispatch(changing_false());
};