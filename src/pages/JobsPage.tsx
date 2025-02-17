import { useEffect, useState } from "react";
import JobList from "../components/JobList";
import jobsData from '../jobs.json';

const JobsPage = () => {
    const [jobs, setJobs] = useState<{ id: string; title: string; type: string; description: string; location: string; salary: string; company: { name: string; description: string; contactEmail: string; contactPhone: string; }; }[]>([]);

    useEffect(() => {
        setJobs(jobsData);
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.length > 0 ? (
                        jobs.map(job => (
                            <JobList list={job} key={job.id} />
                        ))
                    ) : (
                        <p>Loading jobs...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JobsPage;