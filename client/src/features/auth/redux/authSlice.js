import { createSlice } from "@reduxjs/toolkit";
import { decryptData } from "../../../features/utils/helpers";


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const initialState = {
  // user: getCookie("accessToken")
  //   ? decryptData(getCookie("accessToken"))
  //   : null,
  user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
};


// const initialState = {
//   user: localStorage.getItem("user")
//     ? decryptData(localStorage.getItem("user"))
//     : null,
// };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
