exports.startTimer = async (req, res) => {
    // Log start time
    const { userId, duration } = req.body;
    const startTime = new Date();
    res.status(200).json({ message: "Timer started", startTime, duration });
  };
  
  exports.endTimer = async (req, res) => {
    // Log end time
    const { userId } = req.body;
    const endTime = new Date();
    res.status(200).json({ message: "Timer ended", endTime });
  };  