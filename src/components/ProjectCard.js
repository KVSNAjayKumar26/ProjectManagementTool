import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ProjectCard = ({ project }) => {
  return (
    <motion.div
    className='project-card'
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5}}
    >
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`}>View Details</Link>
    </motion.div>
  )
}

export default ProjectCard