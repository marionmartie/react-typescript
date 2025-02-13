import { useState } from "react"
import JobList from "../components/JobList"
import jobItems from '../jobs.json'


const JobsPage = () => {
    const [jobs, setJobs] = useState(jobItems)
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        jobs.map(job => {
                            return (
                                <JobList list={job} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default JobsPage