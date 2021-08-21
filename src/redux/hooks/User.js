import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import userActions from '../actions/User';


export const useUser = () => {
  const user = useSelector((state) => state.user)

    const dispatch = useDispatch();
    const actionss = useMemo(
      () => bindActionCreators(userActions, dispatch),
      [dispatch]
    );
  
    return useMemo(() => ({
      user, actionss
    }), [user, actionss])
  };
  