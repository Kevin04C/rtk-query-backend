import mongoose, { SchemaTypes } from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  }
})

export const Project = mongoose.model('projects', projectSchema)
