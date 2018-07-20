import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const enchancer = applyMiddleware(
    sagaMiddleware,
    logger
);

const store = createStore(rootReducer, composeWithDevTools(enchancer));


sagaMiddleware.run(rootSaga);

export default store;