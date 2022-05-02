import { USER } from "./actions";

const init = {
  isAuth : false,
  users : [],
  orders : [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USER:
      return {...store , isAuth: true,users:payload}
    default:
      return store;
  }
};