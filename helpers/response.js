exports.sendSuccess = (req, res) => (data) => {
  const response = {
    success: true,
    message: data,
  };
  res.status(200).json(response);
};

exports.sendError = (req, res) => (err) => {
  console.log(err);
  const response = {
    success: false,
    message: err.message,
  };
  const { status = 200 } = err;
  res.status(status).json(response);
};
