const GoogleSpreadSheet = require('google-spreadsheet');
const config = require('../config/GoogleSheets.config');
const { promisify } = require('util');

async function saveToSheet(data) {
  try {
    const doc = new GoogleSpreadSheet(config.sheetId);
    await promisify(doc.useServiceAccountAuth)(config.credentials);

    const info = await promisify(doc.getInfo)();
    const worksheet = info.worksheets[config.sheetIndex];

    const save = promisify(worksheet.addRow);

    await save(data);
  }
  catch (err) {
    console.log('error Google Sheet: ' + err.message);
  }
}

module.exports = {
  saveToSheet,
};
