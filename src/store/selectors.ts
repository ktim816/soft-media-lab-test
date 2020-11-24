import {RootState} from '@/interfaces';

export const Selectors = {
  getFormState: (state: RootState) => state.form,
};
