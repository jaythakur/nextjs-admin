export const filterError = (error) => {
  if (error.message) {
    return { type: 'js', errors: { message: error.message } };
  } else {
    return { type: 'api', errors: error.response.data };
  }
};
