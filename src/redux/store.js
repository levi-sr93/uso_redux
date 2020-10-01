
import { createStore } from 'redux';
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const store = createStore(reducers);

// export default store;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }