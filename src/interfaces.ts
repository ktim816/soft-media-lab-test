import {rootReducer} from '@/store';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type Sizes = 'sm' | 'md' | 'lg';
export type RootState = ReturnType<typeof rootReducer>;
