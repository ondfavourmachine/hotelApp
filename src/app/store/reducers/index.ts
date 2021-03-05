
import * as fromSchoolInfoReducerFile from "./booze-app.reducer"

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export interface AllState {
 
  boozeApp: fromSchoolInfoReducerFile.boozeHotelAppDetails,
  
}

export const reducers: ActionReducerMap<AllState> = {

  boozeApp: fromSchoolInfoReducerFile.reducer,

};

// building Selectors for Children

export const getCurrentChildState = createFeatureSelector<AllState>(
  "manageChild"
);

export const getBoozeAppState = createFeatureSelector<AllState>("manageBoozeApp");

// export const getCardTokenState = createFeatureSelector<AllState>("manageCardTokenization");

// export const getLoanApplicationState = createFeatureSelector<AllState>('manageLoanApplicationProcess')

// export const getSchoolDetailsState = createFeatureSelector<AllState>("schoolDetails");




