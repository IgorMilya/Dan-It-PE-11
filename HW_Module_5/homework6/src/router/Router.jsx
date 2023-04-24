import {Routes, Route, Navigate} from "react-router-dom";
import {ROUTER} from "./router.utils";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTER.HOME.path} element={ROUTER.HOME.element}>
                <Route path={ROUTER.PRODUCT.path} element={ROUTER.PRODUCT.element}/>
                <Route path={ROUTER.CART.path} element={ROUTER.CART.element}/>
                <Route path={ROUTER.FAVORITE.path} element={ROUTER.FAVORITE.element}/>
            </Route>
            <Route path="*" element={<Navigate to={ROUTER.PRODUCT.path} />} />
        </Routes>
    );
};

export default Router;
