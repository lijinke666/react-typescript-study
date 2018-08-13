import * as constants from '../../constants'

export interface HomeActionTypes {
    type: constants.TEST_ACTION;
    name?: string;
}

export type HomeAction = HomeActionTypes

// export default function getName(params: string = '李金珂666') {
//     return function (dispatch:Function) : Promise<HomeActionTypes>{
//         dispatch({
//             type: TEST_ACTION,
//             name: params
//         })
//     }
// }

export function getName(name = "李金珂"): HomeActionTypes {
    return {
        type: constants.TEST_ACTION,
        name
    }
}