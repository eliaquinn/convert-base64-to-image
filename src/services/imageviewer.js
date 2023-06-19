const fs = require("fs")

const renderImage = (res, filename) => {
  const nomeArquivo = `public/${filename}`

  fs.readFile(nomeArquivo, (error, data) => {
    if (error) {
      console.error(error)
      res.status(500).send({ msg: "Erro ao ler o arquivo" })
      return
    }

    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": data.length,
    })

    res.end(data)
  })
}

module.exports = renderImage
