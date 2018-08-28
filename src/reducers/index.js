import {combineReducers} from 'redux';

// TO DO import the reducer to change the language 

import LanguageReducer from './languageReducer';
import ItemReducer from './ItemReducer';

const rootReducer = combineReducers ({
    lang: LanguageReducer,
    item: ItemReducer,
});

export default rootReducer;