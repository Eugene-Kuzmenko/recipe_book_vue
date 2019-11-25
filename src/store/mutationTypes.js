import { AsyncActionTypeSet } from './abstract';

export const ITEM_ADD = AsyncActionTypeSet('ITEM_ADD');
export const ITEM_REMOVE = AsyncActionTypeSet('ITEM_REMOVE');
export const ITEM_CHANGE = AsyncActionTypeSet('ITEM_CHANGE');
export const ITEM_LIST_GET = AsyncActionTypeSet('ITEM_LIST_GET');

export const RECIPE_ADD = AsyncActionTypeSet('RECIPE_ADD');
export const RECIPE_REMOVE = AsyncActionTypeSet('RECIPE_REMOVE');
export const RECIPE_CHANGE = AsyncActionTypeSet('RECIPE_CHANGE');
export const RECIPE_LIST_GET = AsyncActionTypeSet('RECIPE_LIST_GET');

export const RECIPE_ITEM_ADD = AsyncActionTypeSet('RECIPE_ITEM_ADD');
export const RECIPE_ITEM_REMOVE = AsyncActionTypeSet('RECIPE_ITEM_REMOVE');