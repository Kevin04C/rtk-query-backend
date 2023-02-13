import mongoose, { Schema, SchemaTypes } from 'mongoose'

const TaskSchema = new Schema({
  title: {
    type: String,
    description: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  project: {
    type: SchemaTypes.ObjectId,
    ref: 'projects'
  }
})

export const Task = mongoose.model('task', TaskSchema)
