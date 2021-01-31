import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducers'

const reducer =combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    
})
const cartItemFromStorage=localStorage.getItem('cartItem')
 ?JSON.parse(localStorage.getItem('cartItems'))
 :[]

const userInfoFromStorage=localStorage.getItem('userInfo')
 ?JSON.parse(localStorage.getItem('userInfo'))
 :null

const initialState ={
    cart:{cartItems:cartItemFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}
const middleware=[thunk]
const store =createStore(
    reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;