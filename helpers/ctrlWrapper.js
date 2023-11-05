const ctrlWrapper = (ctrl) => {
<<<<<<< HEAD
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = ctrlWrapper;
=======
    const func = async (req, res, next) => {
        try {
            await ctrl(req, res, next);
        } catch (error) {
            next(error);
        }
    }
    return func;
}

module.exports = ctrlWrapper;
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
