import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../reducers/counterSlice'

const store = configureStore({
    reducer: {
        counterStore: counterReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false });
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
