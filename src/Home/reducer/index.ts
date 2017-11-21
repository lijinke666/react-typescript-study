import {TEST_ACTION} from "../action"

export interface ActionType {
    name?:string,
    type:string
}
interface StoreType{
    name?:string
}

export type StateType  = StoreType
const defaultState = {
    name:'李金珂666'
}
export default function (state:StateType = defaultState, action:ActionType) {
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