import { useState } from "react"
import { FaMapMarker } from "react-icons/fa"

type Job = {
    list: {
        id: string,
          title: string,
          type: string,
          description: string,
          location: string,
          salary: string,
          company: {
            name: string,
            description: string,
            contactEmail: string,
            contactPhone: string
          }
    },
}


const JobList = ({ list } : Job) => {
    const [showFullDescription, setShowFullDescription] = useState(false)
    let desc: string = list.description
    if ( !showFullDescription ) {
        desc = desc.substring(0, 90) + '...'
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{ list.type }</div>
                    <h3 className="text-xl font-bold">{ list.title }</h3>
                </div>

                <div className="mb-5">
                    { desc }
                    <button onClick={ () => setShowFullDescription(prev => !prev)} className="text-blue-500 hover:text-blue-600 underline cursor-pointer">
                        { showFullDescription ? 'See less' : 'See more' }
                    </button>
                </div>

                <h3 className="text-indigo-500 mb-2">{ list.salary } / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className="inline-block me-1" />
                        { list.location }
                    </div>
                    <a
                        href="job.html"
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JobList