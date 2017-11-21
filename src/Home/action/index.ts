import helper from "libs/helper"
export const TEST_ACTION = "test_action"
export type TEST_ACTION = typeof TEST_ACTION

export interface HomeActionTypes{
    fn1:Function,
}

// export type HomeAction = HomeAction

export default function fn1(parmas:string = '李金珂666') {        
    return async function (dispatch:Function) {
        dispatch({
            type: TEST_ACTION,
            name: parmas
        })
    }
}