const credentials = require('../auth/bugTracker.json');
const sheetId = process.env.SHEET_ID;
const sheetIndex = 0;

module.exports = {
  credentials,
  sheetId,
  sheetIndex,
}
