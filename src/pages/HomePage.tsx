import Hero from "../components/Hero"
import HomeCard from "../components/HomeCard"
import JobListing from "../components/JobListing"

const HomePage = () => {
  return (
    <>
        <Hero title="React Jobs" subtitle="Find React jobs here" />
        <HomeCard />
        <JobListing limit={3} />
    </>
  )
}

export default HomePage