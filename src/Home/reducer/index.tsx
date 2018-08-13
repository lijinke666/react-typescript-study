import { HomeAction } from "../action"
import { StoreState } from "../../types/home"
import { TEST_ACTION } from "../../constants"

export default function (state: StoreState, action: HomeAction): StoreState {
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