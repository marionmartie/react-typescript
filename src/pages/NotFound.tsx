import { Link } from "react-router-dom"
import { FaArrowCircleLeft } from "react-icons/fa"

const NotFound = () => {
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div>
                <h1 className="text-2xl font-bold mb-2">Page not found</h1>
                <Link to="/jobs" className="text-blue-600 underline">
                    <FaArrowCircleLeft className="inline-block me-2" />
                    Return to jobs
                </Link>
            </div>
        </section>
    )
}

export default NotFound