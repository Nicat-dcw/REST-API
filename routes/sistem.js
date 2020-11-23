const express = require('express')
const router = express.Router()
const Subscriber = require('../models/sistem')

// Başlangıç 1
router.get('/', async (req, res) => {
  try {
    const sistem = await sistem.find()
    res.json(sistem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Başlangıç tekrar
router.get('/:id', getSistem, (req, res) => {
  res.json(res.sistem)
})

// Oluşturma
router.post('/', async (req, res) => {
  const sistem = new Sistem({
    name: req.body.name,
    sistemVeriKanal: req.body.sistemVeriKanal
  })
  try {
    const newSistem = await sistem.save()
    res.status(201).json(newSistem)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Degisdirme
router.patch('/:id', getSistem, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name
  }
  if (req.body.sistemVeriKanal != null) {
    res.sistem.sistemVeriKanal = req.body.sistemVeriKanal
  }
  try {
    const updatedSistem = await res.sistem.save()
    res.json(updatedSistem)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Silme
router.delete('/:id', getSistem, async (req, res) => {
  try {
    await res.sistem.remove()
    res.json({ message: 'Veri Silindi' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getSistem(req, res, next) {
  let sistem
  try {
    sistem = await sistem.findById(req.params.id)
    if (sistem == null) {
      return res.status(404).json({ message: 'HATA! BULUNAMADI' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.sistem = sistem
  next()
}

module.exports = router
