import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../actions/Product";

export const useProduct = () => {
    const products = useSelector((state) => state.products);

    // 

    const dispatch = useDispatch();
    const action = useMemo(
        () => bindActionCreators(ProductActions, dispatch),
        [dispatch]
    );

    return useMemo(() => ({
        products, action
    }), [products, action])
};