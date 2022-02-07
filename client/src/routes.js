const { default: Admin } = require("./pages/Admin")
const { default: Auth } = require("./pages/Auth")
const { default: Basket } = require("./pages/Basket")
const { default: DevicePage } = require("./pages/DevicePage")
const { default: Shop } = require("./pages/Shop")
const {ADMIN_ROUTE,
    SHOP_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE } = require("./utils/consts")

export const authRoutes = [
{
    path:ADMIN_ROUTE,
    Component:Admin
},
{
    path:BASKET_ROUTE,
    Component:Basket
}
]
export const publicRoutes = [
{
    path:SHOP_ROUTE,
    Component:Shop
},
{
    path:REGISTRATION_ROUTE,
    Component:Auth
},
{
    path:LOGIN_ROUTE,
    Component:Auth
},
{
    path:DEVICE_ROUTE+'/:id',
    Component:DevicePage
}
]