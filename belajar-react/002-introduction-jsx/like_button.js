function getMood(){
    const moods = ['marah','sedih','gelisah','senang']
    return moods[Math.floor(Math.random() * moods.length)];
}

function getNum(){
    return Math.floor(Math.random() * 10)+1
}
class JSXDemo extends React.Component{
    render(){
        const num = getNum()
        var msg ;
        if (num === 10){
            msg = 
            <div>
                <h1>Perfect</h1>
                <img src="https://images.unsplash.com/photo-1543291436-d2508229d0ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
            </div>
        }
        return(
            // bisa seperti ini
            <div>
                <p>embet code javasript tapi tidak dinamis {4*11}</p>
                <p>embet code dinamis {getMood()}</p>
                <h1>Harus Dibungkus Menjadi 1</h1>
                <h1>if Statement pada react </h1>
                <h1>Random number is {num}</h1>
                <h1>{num === 7 ? "Selamat" : "Cobalagi"}</h1>
                {num === 7 ?
                <img src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"/>
                :null
                }
                {num === 7 &&
                <img src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"/>
                }
                <img src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                <h1>Grand Price</h1>
                {msg}
            </div>
            // React.createElement(
            //     "h3",
            //     null,
            //     "text"
            // )
        )
    }
}
ReactDOM.render(<JSXDemo/>,document.getElementById('root'));