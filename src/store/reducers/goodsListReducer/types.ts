export interface Item {
    id: number;
    itemTitle: string;
    itemInfo: {
        photoUrl: string;
        facts: {title: string, text: string}[];
    };
    itemMainInfo: {
        title: string;
        text: string;
    };
}

export interface State {
    currentItemId: number;
    itemList: Item[];
}

export enum ActionsType {
    SET_CURRENT_ITEM_ID = "SET_CURRENT_ITEM_ID",
    SET_ITEM_LIST = "SET_ITEM_LIST"
}

export interface SetCurrentItemId {
    type: ActionsType.SET_CURRENT_ITEM_ID;
    payload: number;
}

export interface SetItemList {
    type: ActionsType.SET_ITEM_LIST;
    payload: Item[];
}

export type Actions = SetCurrentItemId | SetItemList