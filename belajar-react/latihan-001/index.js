class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Machine Price</h1>
                <Machine
                    s1="x"
                    s2="x"
                    s3="x"
                />
                <Machine
                    s1="y"
                    s2="x"
                    s3="x"
                />
                <Hobies name="farid"  hobies={["belajar","coding","copi"]}/>
                <Hobies ke={4}  hobies={["belajar","coding","copi"]}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))