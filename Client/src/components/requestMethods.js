import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2JhYTdmZDU3NGM3NzQ4M2IzYzYxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzM5MTYxNywiZXhwIjoxNjUzNDc4MDE3fQ.h3br7p1YosHiOBp1NujftAjRZh5SV3xKA4kQ0Lge2ew";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token : `bearer ${TOKEN}`},
});