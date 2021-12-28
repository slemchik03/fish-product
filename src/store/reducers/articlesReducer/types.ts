export interface ArticleItem {
    id: number;
    info: {title: string, text: string[]}[];
    imgPath: string;
}

export interface State {
    articleList: ArticleItem[];
}

export enum ActionsType {
    SET_ARTCILE_LIST = "SET_ARTCILE_LIST"
}

export interface SetArticleList {
    type: ActionsType.SET_ARTCILE_LIST;
    payload: ArticleItem[];
}

export type Actions = SetArticleList