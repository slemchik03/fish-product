
export interface State {
    mobileMenuIsOpened: boolean;
    currentSliderItemId: number;
    sliderItems: {id: number, text: string}[];
}

export enum ActionTypes {
    SET_MOBILE_MENU_STATUS = "SET_MOBILE_MENU_STATUS",
    SET_CURRENT_SLIDER_ITEM_ID = " SET_CURRENT_SLIDER_ITEM_ID",
    SET_SLIDER_ITEMS = "SET_SLIDER_ITEMS"
}

// Actions

export type SetMobileMenuStatus = {
    type: ActionTypes.SET_MOBILE_MENU_STATUS,
    payload: boolean
}
export type SetCurrentSliderItemId = {
    type: ActionTypes.SET_CURRENT_SLIDER_ITEM_ID,
    payload: number
}

export type SetSliderItems = {
    type: ActionTypes.SET_SLIDER_ITEMS,
    payload: State["sliderItems"]
}
// ------

export type Actions = SetMobileMenuStatus | SetCurrentSliderItemId | SetSliderItems