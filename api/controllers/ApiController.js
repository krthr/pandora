/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getData: (req, res) => {
    if (!req.session.getphoto)
      return res.json({
        response: false
      })
    else
      req.session.weight = req.params.weight
    return res.ok()
  },

  start: (req, res) => {
    if (!req.isSocket) return res.badRequest();
    if (!req.session.getphoto) req.session.getphoto = true;
    console.log(req.session.getphoto)
    // return res.ok()

    return res.json({
        weight: 34
    })
  },

  restore: (req, res) => {
    req.session.getphoto = null;
  }

};
