import axios from "axios";

//Create axios base url
const baseApi = axios.create({
    baseURL: "http://www.filltext.com/",
});

//Get data from api;
export const apiCall = {
    async getBigData() {
        return await baseApi.get(
            `?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
        );
    },
    async getSmallData() {
        return await baseApi.get(
            `?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
        );
    },
};
