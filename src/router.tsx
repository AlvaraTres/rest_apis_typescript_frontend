import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as ProductsLoader , action as ProductsAvailabilityAction} from './views/Products'
import NewProduct, { action as newProductAction} from './views/NewProduct'
import EditProduct, {loader as EditProductLoader, action as editProductAction} from './views/EditProduct'
import {action as DeleteProductAction } from './components/ProductDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout />, 
        children: [
            {
                index: true,
                element: <Products />,
                loader: ProductsLoader,
                action: ProductsAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', //ROA Pattern - Resource -Orientated Design
                element: <EditProduct />,
                loader: EditProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: DeleteProductAction
            }
        ]
    }
])