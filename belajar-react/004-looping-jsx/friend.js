class Friend extends React.Component{
    render(){
        const{name, hobbie} = this.props;
        return(
            <div>
                <h1>Hello {name}</h1>
                <ul>
                    {hobbie.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}