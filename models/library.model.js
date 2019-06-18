import mongoose from 'mongoose'
import paginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema

const librarySchema = new Schema({
  name: String,
  project_name: String,
  project_url: String,
  github_url: String,
  category: [String]
})

librarySchema.plugin(paginate)

export default libraryModel = mongoose.model('library', librarySchema)



