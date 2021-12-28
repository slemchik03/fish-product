import { Actions, ActionsType, State } from "./types"

const initialState: State = {
    articleList: []
}

export const articlesReducer = (state = initialState, action: Actions): State => {
    switch(action.type) {
        case ActionsType.SET_ARTCILE_LIST:
            return {articleList: [...action.payload, ...state.articleList]}
        default:
            return state
    }
}