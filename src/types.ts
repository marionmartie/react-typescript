export type Job = {
    title: string, //instead of title : title
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
}