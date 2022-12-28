import { createAction, props } from '@ngrx/store';

export const setItemTypeId = createAction(
  '[Root Component] SetItemTypeId',
  props<{ itemTypeId: string }>()
);
