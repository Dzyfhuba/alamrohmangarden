import { createTypedHooks } from 'easy-peasy';
import { TodosModel } from './model';

const typedHooks = createTypedHooks<TodosModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;