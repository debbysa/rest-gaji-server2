const Gaji = require("../models/Gaji");

module.exports = {
  index: function(req, res) {
    Gaji.findAll().then(function(rows) {
      res.json(rows);
    });
  },

  search: function(req, res) {
    Gaji.findByPk(req.params.id).then(function(row) {
      res.json(row);
    });
  },

  store: function(req, res) {
    Gaji.create(req.body).then(function(rows) {
      res.json(rows);
    });
  },

  update: function(req, res) {
    Gaji.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  destroy: function(req, res) {
    Gaji.findByPk(req.params.id).then(function(row) {
      row.destroy();
      res.json(row);
    });
  }
};
