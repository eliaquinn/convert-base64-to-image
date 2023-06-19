# Convert Base64 to Image 🖼️

É um Conversor de base64 para Imagem (\*.png), uma api simples que obtém uma string base64 atraves de rest, é converte a mesma em uma imagem.

## Documentação da API

#### Retorna o link da imagem já convertida.

```http
  POST /base64converter
```

Nosso endpoint acima retorna um json como o exemplo abaixo:

```json
{
  "msg": "Sua imagem foi convertida com sucesso!",
  "link": "http://localhost:3000/imageviewer/c1a19fab-367c-4555-8388.png"
}
```

## Clone

Faça um clone do projeto:

```bash
  git clone https://github.com/eliaquinn/convert-base64-to-image.git
```
