import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"
import reducer from "./reducer";



const persistedReducer = persistReducer({ key: 'root', storage }, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);