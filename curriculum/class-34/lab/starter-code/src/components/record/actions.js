export const get = payload => {
  return {
    type: "GET",
    payload: payload
  };
};

export const post = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const destroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export const patch = payload => {
  return {
    type: "PATCH",
    payload: payload
  };
};

export const put = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};
