import axios from 'axios';
import { AppDispatch } from '../../store';
import { ActionsType, ArticleItem, SetArticleList } from './types';


export const actionCreators = {
    setItemList: () => async (dispatch: AppDispatch) => {
        try {
            const response = (await axios.get<{data: ArticleItem[]}>("data/articlesList.json")).data.data
            dispatch({type: ActionsType.SET_ARTCILE_LIST, payload: response} as SetArticleList)
        } catch (error) {
            // ...any
        }
    }
}