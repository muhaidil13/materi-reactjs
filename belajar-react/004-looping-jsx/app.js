class App extends React.Component{
    render(){
        return(
            <div>
                <Friend
                name="Elton"
                hobbie = {["Coding","Sepeda", "kuda"]}
                />
                <Friend
                name="farid"
                hobbie = {["Coding","Sepeda", "kuda"]}
                />
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("root"))