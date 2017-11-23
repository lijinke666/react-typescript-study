import helper from "libs/helper"
export const TEST_ACTION = "test_action"
export type TEST_ACTION = typeof TEST_ACTION

export interface HomeActionTypes {
    type: TEST_ACTION,
    name?: string
}

export type HomeAction = HomeActionTypes

// export type HomeAction = HomeAction

export default function getName(parmas: string = '李金珂666') {
    return async function (dispatch:Function) : Promise<HomeActionTypes>{
        dispatch({
            type: TEST_ACTION,
            name: parmas
        })
    }
}