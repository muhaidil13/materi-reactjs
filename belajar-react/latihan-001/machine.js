class Machine extends React.Component{
    render(){
        const {s1, s2, s3} = this.props
        const win = (s1 === s2) && (s2 ===s3)
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{win ? "Winner":"Losser"}</p>
            </div>
        )
    }
}