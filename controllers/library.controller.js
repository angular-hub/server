import libraryModel from '../models/library.model'

class LibraryController {
  constructor() { }

  async getAll(req, res) {
    const data = await libraryModel.find({})
    res.json(data)
  }

  async getById(req, res) {
    const { id } = req.params
    const data = await libraryModel.findById(id)
    res.json(data)
  }

  getLibrariesByCategories(req, res) {

  }


  addNewLibrary(req, res) {
    const data = libraryModel.create(req.body)
    res.sendStatus(200).json(data)
  }


  getSubmittedLibrabries() {

  }

}

export default new LibraryController()