
'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/filterSlice";

const Categories = () => {
    const { jobList } = useSelector((state) => state.filter) || {};
    const [getCategory, setCategory] = useState(jobList.category);

    const dispatch = useDispatch();

    // category handler
    const categoryHandler = (e) => {
        dispatch(addCategory(e.target.value));
    };

    useEffect(() => {
        setCategory(jobList.category);
    }, [setCategory, jobList]);

    return (
        <>
            <select
                className="form-select"
                value={jobList.category}
                onChange={categoryHandler}
            >
                <option value="">اختر قسم</option>
                <option value="نقاش">نقاش</option>
                <option value="سباك">سباك</option>
                <option value="سيكيورتي">سيكيورتي</option>
                <option value="نجار">نجار</option>
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
