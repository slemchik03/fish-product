import { Actions, ActionsType, State } from "./types"

const initialState: State = {
    currentItemId: 2,
    itemList: []
}

export const goodsListReducer = (state = initialState, action: Actions) => {
    switch(action.type) {
        case ActionsType.SET_CURRENT_ITEM_ID:
            return {...state, currentItemId: action.payload};
        case ActionsType.SET_ITEM_LIST:
            return {...state, itemList: action.payload}
        default:
            return state
    }
}