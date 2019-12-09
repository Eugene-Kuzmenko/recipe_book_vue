import { AsyncActionTypeSet } from './abstract';

export const ITEM_ADD = new AsyncActionTypeSet('ITEM_ADD');
export const ITEM_REMOVE = new AsyncActionTypeSet('ITEM_REMOVE');
export const ITEM_CHANGE = new AsyncActionTypeSet('ITEM_CHANGE');
export const ITEM_LIST_GET = new AsyncActionTypeSet('ITEM_LIST_GET');

export const RECIPE_ADD = new AsyncActionTypeSet('RECIPE_ADD');
export const RECIPE_SELECT = new AsyncActionTypeSet('RECIPE_SELECT');
export const RECIPE_REMOVE = new AsyncActionTypeSet('RECIPE_REMOVE');
export const RECIPE_CHANGE = new AsyncActionTypeSet('RECIPE_CHANGE');
export const RECIPE_LIST_GET = new AsyncActionTypeSet('RECIPE_LIST_GET');

export const RECIPE_ITEM_ADD = new AsyncActionTypeSet('RECIPE_ITEM_ADD');
export const RECIPE_ITEM_REMOVE = new AsyncActionTypeSet('RECIPE_ITEM_REMOVE');