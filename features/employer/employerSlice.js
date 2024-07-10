import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
        {
            id: 1,
            name: "سكني",
            value: "residential",
        },
        {
            id: 2,
            name: "تجاري",
            value: "commercial",
        },
        {
            id: 3,
            name: "صناعي",
            value: "industrial",
        },
        {
            id: 4,
            name: "شقق سكنية",
            value: "apartments",
        },
    ],
    companySize: [],
};

export const employerSlice = createSlice({
    name: "employer",
    initialState,
    reducers: {},
});

export const {} = employerSlice.actions;
export default employerSlice.reducer;
