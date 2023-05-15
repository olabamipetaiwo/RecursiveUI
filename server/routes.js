const express = require('express')
const { html2Object } = require('html2Object')
const superagent = require('superagent')
const router = express.Router()
const path = require('path')

// health check
router.get('/metrics/_health', (req, res) => {
  res.status(200).end()
})

// parsedhtml gets a javascript object representation of the html
// for a given webpage. It takes the following params:
// url: the url of a given website
// and returns the following response body:
// {
//   "html": {
//     "__children": {
//       ...
//     }
//   }
// }
router.get('/api/v1/parsedhtml', async (req, res) => {
  try {
    const targetRes = await superagent.get(req.query.url)
    const parsedPage = await html2Object(targetRes.text)
    res.status(200).send(parsedPage.root.__children[0])
  } catch (err) {
    res.status(400).send(err)
  }
})

// serve generated index file from dist
// folder
router.get('*', (req, res) => {
  res.status(200)
    .sendFile('index.html', {
      root: path.join(__dirname, '../dist'),
    })
})

module.exports = router
