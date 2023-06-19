const fs = require("fs")

function generateUUID() {
  let dt = new Date().getTime()
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

const sss = (res, base64) => {
  const imageBuffer = Buffer.from(base64, "base64")
  const filename = generateUUID()

  fs.writeFile(`public/${filename}.png`, imageBuffer, (error) => {
    if (error) {
      res.status(500).send("Não foi possível gerar a imagem")
      return
    }
  })

  return filename
}

module.exports = sss
