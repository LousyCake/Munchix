import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { restaurantReducer } from './reducer/restaurantReducer';
import { menuReducer } from './reducer/menuReducer';
import { authReducer } from './reducer/userReducer';
import { userReducer } from './reducer/userReducer';
import { forgotPasswordReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';
import { myOrderReducer, newOrderReducer, orderDetailsReducer } from './reducer/orderReducer';

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrderReducer,
    orderDetails: orderDetailsReducer,
});

const composeehancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Middleware = [thunk];

const store = createStore(
    reducer,
    composeehancers(applyMiddleware(...Middleware))
);

export default store;