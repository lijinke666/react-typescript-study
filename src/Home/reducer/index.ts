import { TEST_ACTION } from "../action"

export interface ActionType {
    type: string 
    name?: string
}
export interface StoreType {
    name: string
}

export type StateType = StoreType
const defaultState = {
    name: '李金珂666'
}
export default function (state: StoreType, action: ActionType): StoreType {
    const { type, name } = action
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