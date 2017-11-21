import helper from "libs/helper"
export const TEST_ACTION = "test_action"
export type TEST_ACTION = typeof TEST_ACTION

export interface HomeAction{
    type:TEST_ACTION,
    name:any
}

// export type HomeAction = HomeAction

export default function (parmas:string = '李金珂666'):HomeAction {        
    return async function (dispatch) {
        dispatch({
            type: TEST_ACTION,
            name: parmas
        })
    }
}