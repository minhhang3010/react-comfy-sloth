import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-4v8508-h.us.auth0.com
// gV7bfJi2BPwCP1ZegrCPVacWOnBPq29F

ReactDOM.render(
    <Auth0Provider
        domain='dev-4v8508-h.us.auth0.com'
        clientId='gV7bfJi2BPwCP1ZegrCPVacWOnBPq29F'
        redirectUri={window.location.origin}
        cacheLocation='localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>    
    </Auth0Provider>


, document.getElementById('root'))
