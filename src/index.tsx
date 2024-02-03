import {App} from "./components/App";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import path from "path";
import {LazyAbout} from "./components/about/About.lazy";
import {Shop} from "./components/shop";
import {Suspense} from "react";

const root = document.getElementById('root')
if(!root) throw new Error('root not found')
const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/about',
                element:<Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element:<Suspense fallback={'Loading...'}> <Shop/> </Suspense>
            }
        ]
    },
]);
container.render(
    <RouterProvider router={router} />)