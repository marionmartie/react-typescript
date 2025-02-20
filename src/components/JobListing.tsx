// import jobs from '../jobs.json';
import JobList from './JobList';
import { useState, useEffect } from 'react';

const Listing = ({limit} : {limit?: number}) => {
    const [jobs, setJobs] = useState<{ id: string; title: string; type: string; description: string; location: string; salary: string; company: { name: string; description: string; contactEmail: string; contactPhone: string; }; }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try{ 
                const res = await fetch('http://localhost:5000/jobs');
                const data = await res.json();
                setJobs(data.slice(0, limit || data.length));
            } catch(error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, [])
    return (
        loading ? <p>Loading jobs...</p> :
        jobs.map((job) => (
            <JobList list={job} key={job.id} />
        ))
    )
}

const JobListings = ({limit} : {limit?: number}) => {
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        { <Listing limit={limit} /> }
                </div>
            </div>
        </section>
    )
}

export default JobListings;