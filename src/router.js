const express = require("express")
const sss = require("./services/base64converter")
const renderImage = require("./services/imageviewer")
const rt = express.Router()

rt.get("/", (req, res) => {
  res.status(200).send({
    github: "https://github.com/eliaquinn",
    email: "eliaquimunderlinejordan@gmail.com",
  })
})

rt.post("/base64converter", (req, res) => {
  const base64data = req.body.base64

  const filename = sss(res, base64data)

  res.send({
    msg: "Sua imagem foi convertida com sucesso!",
    link: `${process.env.HOST}/imageviewer/${filename}.png`,
  })
})

rt.get("/imageviewer/:filename", (req, res) => {
  const image = req.params.filename

  renderImage(res, image)
})

module.exports = rt
