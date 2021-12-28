import { Actions, ActionTypes, State } from './types';

const initialState: State = {
    mobileMenuIsOpened: false,
    currentSliderItemId: 1,
    sliderItems: []
}

export const headerReducer = (state = initialState, action: Actions) => {
    switch(action.type) {
        case ActionTypes.SET_MOBILE_MENU_STATUS:
            return {...state, mobileMenuIsOpened: action.payload}
        case ActionTypes.SET_CURRENT_SLIDER_ITEM_ID:
            return {...state, currentSliderItemId: action.payload}
        case ActionTypes.SET_SLIDER_ITEMS:
            return {...state, sliderItems: [...action.payload]}
        default:
            return state    
    }
}