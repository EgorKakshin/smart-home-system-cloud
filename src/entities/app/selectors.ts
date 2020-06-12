// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
// eslint-disable-next-line no-unused-vars
import {Collections as AppCollection} from 'entities/app';

export const selectAppState = (state: State): AppCollection => state.app;
