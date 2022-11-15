class Hobies extends React.Component{
    // harus huruf Besar
    static defaultProps={
        name:'anonymous',
        ke:1

    }
    render(){
        const {name, hobies, ke} = this.props
        return(
            <div>
                <h1>{name} anak ke {ke}</h1>
                <ul>
                    {hobies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}