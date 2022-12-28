import { createReducer, on } from '@ngrx/store';
import { setItemTypeId } from './root.actions';

export const initialState = 'animals';

export const activeItemReducer = createReducer(
  initialState,
  on(setItemTypeId, (_, props) => props.itemTypeId)
);
