import {TEST_ACTION} from "../action"

export interface DefaultState {
    name:string
}
const defaultState = {
    name:'李金珂666'
}
export default function (state:DefaultState = defaultState, action:TEST_ACTION) {
    const {type,name} = action
    switch (type) {
        case TEST_ACTION:
            return {
                ...state,
                name
            }
        default:
            return state
    }
}