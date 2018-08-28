export const CHANGE_LANGUAGE ='CHANGE_LANGUAGE';
export const SET_TITLE = 'SET_TITLE';
export const SET_ITEM_DETAILS = 'SET_ITEM_DETAILS';
export const SET_ITEM = 'SET_ITEM';


export const changeLanguage = (langset) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: langset
    }
}

export const setHeaderTitle = (title) => {
    return {
        type: SET_TITLE,
        payload: title
    }
}


export const setItemDetails = (item) => {
    return {
        type: SET_ITEM_DETAILS,
        payload: item
    }
}


export const setItem = (item) => {
    return {
        type: SET_ITEM,
        payload: item
    }
}

