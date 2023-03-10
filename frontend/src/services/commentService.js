import axios from "axios";
import { AuthorizationHeader } from "./request.extras";

axios.defaults.withCredentials = false;

const API_BASE_URL = "http://localhost:8080/api/";

export const getAllComments = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: API_BASE_URL + "comments",
    });
    //console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};

export const createComment = async (commentDetails) => {
  try {
    const res = await axios({
      method: "POST",
      url: API_BASE_URL + "comments",
      data: commentDetails,
      headers: AuthorizationHeader(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const updateComment = async (id, commentDetails) => {
  try {
    const res = await axios({
      method: "PUT",
      url: API_BASE_URL + "comments/" + id,
      data: commentDetails,
      headers: AuthorizationHeader(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteComment = async (id) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: API_BASE_URL + "comments/" + id,
      headers: AuthorizationHeader(),
    });
    return res;
  } catch (err) {
    return err;
  }
};
