import { request, response } from 'express'
import { Task } from '../models/Task.js'

export const getTasksByProject = async (req = request, res = response) => {
  const { id } = req.params
  try {
    const taksProject = await Task.find({ project: id })
    res.json({
      ok: true,
      taks: taksProject
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}
export const createTask = async (req = request, res = response) => {
  const body = req.body
  try {
    const taskSaved = new Task(body)
    await taskSaved.save()
    res.status(201).json({
      ok: true,
      taks: taskSaved
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}
export const updateTask = async (req = request, res = response) => {
  // id task
  const { id } = req.params
  // id project
  const project = req.body.project

  try {
    const task = await Task.find({ project }).findOne({ _id: id })
    if (!task) {
      return res.status(404).json({
        ok: true,
        msg: 'taks not found in project'
      })
    }

    delete req.body.project

    const newTask = { ...req.body, project }
    const taskUpdated = await Task.find({ project })
      .findOneAndUpdate(id, newTask, { new: true })

    res.json({
      ok: true,
      taks: taskUpdated
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}
export const deleteTask = async (req = request, res = response) => {
  // task id
  const { id } = req.params
  // project id
  const { project } = req.body
  try {
    const taskDeleted = await Task.find({ project }).findOne({ _id: id })
    if (!taskDeleted) {
      return res.status(404).json({
        ok: true,
        msg: 'taks not found in project'
      })
    }
    await Task.find({ project }).findOneAndDelete({ _id: id })
    res.json({
      ok: true,
      task: taskDeleted
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}
