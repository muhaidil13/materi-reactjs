class App extends React.Component{
    render(){
        return(
            <div>
                <JSXDemo/>
                <Hello/>
                <h1>This App Class</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))