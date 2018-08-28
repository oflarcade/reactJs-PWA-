import {CHANGE_LANGUAGE, SET_TITLE} from '../actions';


const defaultStatus = {
        defaultLang: 'Fr',
        headerTitle: 'Toutes les promotions',
        fruitIconTitle: 'Fruits',
        meatIconTitle: 'Boucherie',
        breadIconTitle: 'Boulangerie',
        fishIconTitle:'Poissonnerie',
        alimentationIconTitle: 'Alimentation',
        noFoodIconTitle: 'Non food',
        product: 'Produit',
}



export default function (state= defaultStatus , action) {
    switch(action.type) {
        case CHANGE_LANGUAGE: 
                if(action.payload === 'Fr'){
                    return {
                        ...state,
                        defaultLang: action.payload,
                        headerTitle: 'Toutes les promotions',
                        fruitIconTitle: 'Fruits',
                        meatIconTitle: 'Boucherie',
                        breadIconTitle: 'Boulangerie',
                        fishIconTitle:'Poissonnerie',
                        alimentationIconTitle: 'Alimentation',
                        noFoodIconTitle: 'Non food',
                        product : 'Produit',
                        
                    }
                    
                } else if (action.payload === 'De') {
                        return {
                            ...state,
                            defaultLang: action.payload,
                            headerTitle: 'Alle Aktionen',
                            fruitIconTitle: 'Früchte',
                            meatIconTitle: 'Schlächterei',
                            breadIconTitle: 'Bäckerei',
                            fishIconTitle: 'Fisch',
                            alimentationIconTitle: 'Versorgung',
                            noFoodIconTitle: 'Nicht essen',
                            product : 'Produkt',
                        }
                }
                break;
         case SET_TITLE : 
                return {
                    ...state,
                    headerTitle: action.payload
                }
      
        default: 
            return state    
    }
}