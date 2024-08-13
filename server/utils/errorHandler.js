module.exports = {
    handleError: function (err, req, res, next) {
      res.status(err.status || 500).send({
        message: err.message || 'An unknown error occurred',
        error: process.env.NODE_ENV === 'development' ? err : {}
      });
    },
  
    createError: function (status, message) {
      const err = new Error(message);
      err.status = status;
      return err;
    }
};  