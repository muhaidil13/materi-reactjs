class Hello extends React.Component{
    static defaultProps={
        num : 1,
        from :"hamba allah"
    }
    render(){
        var oo = "!".repeat(this.props.num)

        console.log(this.props);
        return(
            <div>
                <h1>hello {this.props.to} from {this.props.from}{oo}</h1>
                <img src={this.props.image}/>
            </div>
        )
    }
}
