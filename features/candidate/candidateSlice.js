import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
        {
            id: 1,
            name: "سباك",
            value: "سباك",
        },
        {
            id: 2,
            name: "كهربائي",
            value: "كهربائي",
        },
        {
            id: 3,
            name: "نجار",
            value: "نجار",
        },
        {
            id: 4,
            name: "حداد",
            value: "حداد",
        },
        {
            id: 5,
            name: "نقاش",
            value: "نقاش",
        },
        {
            id: 6,
            name: "سيكيورتي",
            value: "سيكيورتي",
        },
    ],
    datePost: [
        { id: 1, name: "جميع الاوقات", value: "all", isChecked: false },
        { id: 2, name: "اخر ساعة", value: "last-hour", isChecked: false },
        {
            id: 3,
            name: "اخر 24 ساعة",
            value: "last-24-hour",
            isChecked: false,
        },
        {
            id: 4,
            name: "هذا الاسبوع",
            value: "last-7-days",
            isChecked: false,
        },
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
    experience: [
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
    qualification: [
        {
            id: 1,
            name: "شهادة خبرة",
            value: "certificate",
        },
        // {
        //     id: 2,
        //     name: "Associate Degree",
        //     value: "associate-degree",
        // },
        {
            id: 3,
            name: "بكالوريوس",
            value: "bachelor-degree",
        },
        {
            id: 4,
            name: "ماستر",
            value: "master’s-degree",
        },
        {
            id: 5,
            name: "الدكتوراة",
            value: "doctorate-degree",
        },
    ],
};

export const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        addDatePostCheck: (state, { payload }) => {
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
        clearDatePost: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addExperienceCheck: (state, { payload }) => {
            state?.experience?.map((item) => {
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
        clearExperience: (state, { payload }) => {
            state?.experience?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addQualificationCheck: (state, { payload }) => {
            state?.qualification?.map((item) => {
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
        clearQualification: (state, { payload }) => {
            state?.qualification?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
    },
});

export const {
    addDatePostCheck,
    addExperienceCheck,
    addQualificationCheck,
    clearDatePost,
    clearExperience,
    clearQualification,
} = candidateSlice.actions;
export default candidateSlice.reducer;
