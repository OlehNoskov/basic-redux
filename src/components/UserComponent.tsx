import {useAppDispatch} from "../hooks/redux";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import React, {useEffect} from "react";
import {fetchUsers} from "../store/reducers/actionCreators";

export const UserComponent = () => {
    const dispatch = useAppDispatch();

    const {users, isLoading, error}  = useSelector((state: RootState) => state.userReducer);

    // UseEffect with empty array execute only one time!
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
     <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(users, null, 2)}
    </div>
    );
};