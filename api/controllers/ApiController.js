/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * Obtener foto y enviarla vía Sockets
   */
  getPhoto: (req, res) => {
    if (req.session.getphoto) {
      var base64Image = req.params.image;
      // TODO Image
      // TODO Socket emit image src
    }
  },

  /**
   * Asignar dato de peso y emitirlo vía Socket
   */
  setData: (req, res) => {
    req.session.weight = req.params.weight;
    req.session.getphoto = false;
    // TODO Socket emit weight to main panel
    return res.ok();
  },

  /**
   * Restaurar datos a null
   */
  restoreData: (req, res) => {
    req.session.weight = null;
    req.session.getphoto = null;
    return res.ok();
  }
};
