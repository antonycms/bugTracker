const GoogleSheets = require('../../services/GoogleSheets.service');
const SendGrid = require('../../services/SendGrid.service');

class BugTrackerController {
  async store(req, res) {
    const data = req.body;

    await GoogleSheets.saveToSheet(data);

    if (data.issueType === 'CRITICAL') {
      await SendGrid.sendEmail();
    }

    return res.render('sucess');
  }
}

module.exports = new BugTrackerController();
