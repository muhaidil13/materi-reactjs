class Hello extends React.Component{
    render(){
        return(
            <div>
                <h1>hello there</h1>
                <h1>hello there</h1>
                <Test/>
            </div>
        )
    }
}
class Test extends React.Component{
render(){
    return(
        <div>
            <h1>Hello form test</h1>
        </div>
        )
    }
}