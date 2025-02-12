import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import JobList from './components/JobListing'

export default function App() {
  
  return (
    <>
    <NavBar />
    <Hero title="React Jobs" subtitle="Find React jobs here" />
    <HomeCard />
    <JobList limit={3} />
    </>
  )
}

