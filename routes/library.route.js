import express from 'express'
import LibaryController from '../controllers/library.controller'
const router = express.Router()


router.get('/getall', LibaryController.getAll)
router.get('/getLibrary/:id')
router.post('/submit', LibaryController.addNewLibrary)







export default router