import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { activeItemReducer } from './root/root.reducer';
import { hydrationMetaReducer } from './hydration/hydration.reducer';

export interface AppState {
  itemTypeId: string;
}

export const reducers: ActionReducerMap<AppState> = {
  itemTypeId: activeItemReducer,
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];
