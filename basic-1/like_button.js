// class Hello extends React.Component{
//     render(){
//         return (
//         <div>
//             <h1>Hello World</h1>
//             <h1>Hello World</h1>
//             <h1>Hello World</h1>
//             <h1>Hello World</h1>
//         </div>
//         );
//     }
// }

function Hello(){
    return(
        <div>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
    )
}

ReactDOM.render(<Hello/>, document.getElementById("root"))