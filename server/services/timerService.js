const Logger = require('../utils/Logger'); // logging utility
const TimerLogModel = require('../models/TimerLog'); // Mongoose model for timer logs

exports.logTimerStart = async (userId, details) => {
  try {
    // Log to console logger
    Logger.info(`Timer started by user ${userId} at ${details.startTime} for duration ${details.duration}`);
    
    // Log to database
    const newLog = new TimerLogModel({
      userId,
      type: 'start',
      time: details.startTime,
      duration: details.duration
    });
    await newLog.save();
  } catch (error) {
    Logger.error('Failed to log timer start:', error);
  }
};

exports.logTimerEnd = async (userId, details) => {
  try {
    Logger.info(`Timer ended by user ${userId} at ${details.endTime}`);
    
    // Log to database
    const newLog = new TimerLogModel({
      userId,
      type: 'end',
      time: details.endTime
    });
    await newLog.save();
  } catch (error) {
    Logger.error('Failed to log timer end:', error);
  }
};

exports.logTimerInterruption = async (userId, details) => {
  try {
    Logger.info(`Timer interrupted by user ${userId} at ${details.interruptTime}`);
    
    // Log to database
    const newLog = new TimerLogModel({
      userId,
      type: 'interrupt',
      time: details.interruptTime
    });
    await newLog.save();
  } catch (error) {
    Logger.error('Failed to log timer interruption:', error);
  }
};