import axios from "axios";

const API_BASE_URL = "http://localhost:8080/auth/";

export const register = async (newUser) => {
  //
  try {
    const response = await axios.post(API_BASE_URL + "register", {
      ...newUser,
    });

    localStorage.setItem(
      "user",
      JSON.stringify({
        username: newUser.username,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        profilePicture: newUser.profilePicture,
      })
    );

    return response.data;
  } catch (error) {
    //
    console.log(error);
    throw new Error("Bad request");
  }
};

export const login = async (user) => {
  //
  console.log(user);
  try {
    const response = await axios.post(API_BASE_URL + "login", user);
    const data = response.data;
    console.log(data);
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        profilePicture: data.profilePicture,
      })
    );

    return data;
  } catch (error) {
    //
    console.log(error);
    throw new Error("Bad request");
  }
};