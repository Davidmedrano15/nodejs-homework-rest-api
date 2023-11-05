const messages = {
<<<<<<< HEAD
  400: "Bad Request",
  401: "Not Authorize",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const createError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = createError;
=======
    400: 'Bad request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    409: 'Conflict',
}

const createError = (status, message = messages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = createError;
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
