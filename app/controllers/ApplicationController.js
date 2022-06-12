class ApplicationController {
  hadleGetRoot = (req, res) => {
    res.json({
      status: 'OK',
      message: 'API is Running!',
    });
  };
}

module.exports = ApplicationController;
