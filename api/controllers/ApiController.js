/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * Asignar dato de peso y emitirlo vía Socket
   */
  setData: (req, res) => {
    if (req.isSocket !== true) return res.badRequest()

    req.session.weight = req.params.weight
    req.session.getphoto = false
    // TODO Socket emit weight to main panel

    sails.sockets.blast('updateWeight', {
      weight: req.session.weight
    })

    return res.ok();
  }
};
