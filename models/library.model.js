import mongoose from 'mongoose'
import paginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema

const librarySchema = new Schema({
  name: String,
  project: String,
  projectUrl: String,
  category: [String]
})




librarySchema.plugin(paginate)


