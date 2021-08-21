import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import PhoneActions from "../actions/Phone";

export const usePhone = () => {
    const phones = useSelector((state) => state.phones);

    // 

    const dispatch = useDispatch();
    const actions = useMemo(
        () => bindActionCreators(PhoneActions, dispatch),
        [dispatch]
    );

    return useMemo(() => ({
        phones, actions
    }), [phones, actions])
};
