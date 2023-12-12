import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import EditProduct from "../pages/Admin/EditProduct/EditProduct";
import Table from "../pages/Admin/Table/Table";
import CardDetail from "../pages/Site/CardDetail/CardDetail";
import Home from "../pages/Site/Home/Home";
import SiteRoot from "../pages/Site/SiteRoot";

const ROUTES = [{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },{
        path:'/:id',
        element:<CardDetail/>
    }]
},{
    path:'admin',
    element:<AdminRoot/>,
    children:[{
        path:'',
        element:<Table/>
    },{
        path:'addproduct',
        element:<AddProduct/>
    },{
        path:'editproduct',
        element:<EditProduct/>
    }]
}]

export default ROUTES