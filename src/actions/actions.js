import { ADD_STUFF } from './actionTypes';
import { v4 as uuid } from 'uuid';

export const addStuff = item => ({
  type: ADD_STUFF,
  payload: { id: uuid(), isPacked: false, name: item },
});