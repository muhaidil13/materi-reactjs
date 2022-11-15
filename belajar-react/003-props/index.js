class App extends React.Component{
    render(){
        return(
            <div>
                <Hello 
                    to="farid" 
                    from="aidil" 
                    num={2} 
                    data={[1,2,3]}
                    isFunny={true}
                    image="https://plus.unsplash.com/premium_photo-1661632918318-eb0e7ce92955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
                <Hello 
                    to="alif" 
                    from="fikar" 
                    num={4} 
                    data={[1,2,3]}
                    isFunny={true}    
                    image="https://plus.unsplash.com/premium_photo-1661632918318-eb0e7ce92955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))