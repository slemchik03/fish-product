import axios from 'axios';
import { AppDispatch } from './../../store';
import { SetMobileMenuStatus, ActionTypes, SetCurrentSliderItemId, SetSliderItems } from "./types";

export const actionCreators =  {
    setMobileMenuStatus: (payload: boolean): SetMobileMenuStatus => {
        return {
            type: ActionTypes.SET_MOBILE_MENU_STATUS, 
            payload
        }
    },
    setCurrentSliderItemId:(payload: number): SetCurrentSliderItemId => {
        return {
            type: ActionTypes.SET_CURRENT_SLIDER_ITEM_ID, 
            payload
        }
    },
    setSliderItemContent: () => {
        return async (dispatch: AppDispatch) => {
            try {
                const response = (await axios.get<{id: number, body: string}[]>(
                    "https://jsonplaceholder.typicode.com/posts/1/comments"
                    )).data.map(v => ({id: v.id, text: v.body}))
                
                dispatch({type: ActionTypes.SET_SLIDER_ITEMS, payload: response} as SetSliderItems)
            } catch (error) {
                // any...
            }            
        }       
    }
}
