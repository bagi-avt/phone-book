import * as axios from "axios";

export const getUserList = () => {
    return axios
        .get("https://phone-book-decentury.herokuapp.com/api/pb")
        .then((res) => {
            return Object.values(res.data);
        });
};
export const deleteUser = (phone_id) => {
    return axios.delete(
        "https://phone-book-decentury.herokuapp.com/api/pb/" + phone_id
    );
};
export const createUser = (data) => {
    return axios.post("https://phone-book-decentury.herokuapp.com/api/pb/", {
        data,
    });
};
export const updataUser = (data) => {
    return axios.put("https://phone-book-decentury.herokuapp.com/api/pb/", {
        data,
    });
};
