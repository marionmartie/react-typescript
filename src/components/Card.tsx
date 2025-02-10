

const Card = ({children, bg} : {children: React.ReactNode, bg: string}) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card