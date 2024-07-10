
'use client'
import { useDispatch, useSelector } from "react-redux";
import { addCandidateGender } from "../../../features/filter/candidateFilterSlice";

const CandidatesGender = () => {
    const { candidateGender } =
        useSelector((state) => state.candidateFilter) || {};

    const dispath = useDispatch();

    // gender handler
    const genderHandler = (e) => {
        dispath(addCandidateGender(e.target.value));
    };

    return (
        <>
            <select
                className="form-select px-5"
                value={candidateGender}
                onChange={genderHandler}
            >
                <option value="male">ذكر</option>
                <option value="female">انثي</option>
                {/* <option value="other">Others</option> */}
            </select>
            <span className="icon flaticon-user-1"></span>
        </>
    );
};

export default CandidatesGender;
