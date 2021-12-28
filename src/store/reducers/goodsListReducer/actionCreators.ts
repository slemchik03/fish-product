import axios from 'axios';
import { AppDispatch } from '../../store';
import { ActionsType, Item, SetCurrentItemId, SetItemList } from './types';


export const actionCreators = {
    setCurrentItemId: (id: number): SetCurrentItemId => {
        return {
            type: ActionsType.SET_CURRENT_ITEM_ID,
            payload: id
        }
    },
    setItemList: () => async (dispatch: AppDispatch) => {
        try {
            const response = (await axios.get<{data: Item[]}>("goodsList.json")).data.data
            dispatch({type: ActionsType.SET_ITEM_LIST, payload: response} as SetItemList)
            
        } catch (error) {
            // ...any
        }
    }
}