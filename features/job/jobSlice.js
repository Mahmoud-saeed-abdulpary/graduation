import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latestJob: ["full-time"],
    category: [
        {
            id: 1,
            name: "نجار",
            value: "نجار",
        },
        {
            id: 2,
            name: "سباك",
            value: "سباك",
        },
        {
            id: 3,
            name: "نقاش",
            value: "نقاش",
        },
        {
            id: 4,
            name: "سيكيورتي",
            value: "سيكيورتي",
        },
    ],
    jobTypeList: [
        {
            id: 1,
            name: "عمل حر",
            value: "freelancer",
            isChecked: false,
        },
        {
            id: 2,
            name: "دوام كامل",
            value: "full-time",
            isChecked: false,
        },
        {
            id: 3,
            name: "دوام جزئي",
            value: "part-time",
            isChecked: false,
        },
        {
            id: 4,
            name: "مؤقت",
            value: "temporary",
            isChecked: false,
        },
    ],
    datePost: [
        { id: 1, name: "الكل", value: "all", isChecked: false },
        { id: 2, name: "اخر ساعة", value: "last-hour", isChecked: false },
        {
            id: 3,
            name: "اخر 24 ساعة",
            value: "last-24-hour",
            isChecked: false,
        },
        { id: 4, name: "اخر 7 ايام", value: "last-7-days", isChecked: false },
        {
            id: 5,
            name: "اخر 14 يوم",
            value: "last-14-days",
            isChecked: false,
        },
        {
            id: 6,
            name: "اخر 30 يوم",
            value: "last-30-days",
            isChecked: false,
        },
    ],
    experienceLavel: [
        { id: 1, name: "مبتدئ", value: "fresh", isChecked: false },
        { id: 2, name: "سنة", value: "1-year", isChecked: false },
        { id: 3, name: "سنتين", value: "2-year", isChecked: false },
        { id: 4, name: "3 سنوات", value: "3-year", isChecked: false },
        {
            id: 5,
            name: "4 سنوات",
            value: "4-year",
            isChecked: false,
        },
    ],
    tags: [
        {
            id: 1,
            name: "سباك",
            value: "سباك",
        },
        {
            id: 2,
            name: "سيكيورتي",
            value: "سيكيورتي",
        },
        {
            id: 3,
            name: "نجار",
            value: "نجار",
        },
        {
            id: 4,
            name: "نقاش",
            value: "نقاش",
        },
    ],
};

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        addLatestJob: (state, { payload }) => {
            const isExist = state.latestJob?.includes(payload);
            if (isExist) {
                state.latestJob = state.latestJob.filter(
                    (item) => item !== payload
                );
            } else {
                state.latestJob.push(payload);
            }
        },
        clearJobTypeToggle: (state) => {
            state?.jobTypeList?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        jobTypeCheck: (state, { payload }) => {
            state?.jobTypeList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        datePostCheck: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                if (item.id === payload) {
                    item.isChecked = true;
                }
                return {
                    ...item,
                };
            });
        },
        clearDatePostToggle: (state) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        experienceLavelCheck: (state, { payload }) => {
            state?.experienceLavel?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        clearExperienceToggle: (state) => {
            state?.experienceLavel?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
    },
});

export const {
    addLatestJob,
    clearJobTypeToggle,
    jobTypeCheck,
    datePostCheck,
    clearDatePostToggle,
    experienceLavelCheck,
    clearExperienceToggle,
} = jobSlice.actions;
export default jobSlice.reducer;
