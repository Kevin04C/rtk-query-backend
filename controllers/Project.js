import { request, response } from 'express'
import { Project } from '../models/Project.js'

export const getProjectsByUser = async (req = request, res = response) => {
  const { id } = req.user
  try {
    const projectsDb = await Project.find({ user: id })
    res.json({
      ok: true,
      projects: projectsDb
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}

export const createProject = async (req = request, res = response) => {
  const { id } = req.user
  try {
    const savedProject = new Project(req.body)
    savedProject.user = id

    await savedProject.save()

    res.json({
      ok: true,
      project: savedProject
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}

export const deleteProject = async (req = request, res = response) => {
  const { id } = req.params
  try {
    const projectDeleted = await Project.findOne({ _id: id })
    if (!projectDeleted) {
      return res.status(404).json({
        ok: false,
        msg: 'not found project with these id'
      })
    }
    await Project.findOneAndDelete({ _id: id })
    res.json({
      ok: true,
      msg: 'Project deleted',
      project: projectDeleted
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}
