const router = require('express').Router()
const controller = require('../controller/controller')

router.get("/get",controller.getMethod)
router.get("/get/:active",controller.getMethodByActive)
router.post('/add',controller.addName)
router.put('/add/:id',controller.updateStudent)

module.exports = router