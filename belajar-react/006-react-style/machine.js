class Machine extends React.Component{
    render(){
        const {s1, s2, s3} = this.props
        const win = (s1 === s2) && (s2 ===s3)
        const colors = { fontSize:"2rem", backgroundColor:"white", color:"black"}
        return (
            // perubahan untuk react seperti className untuk mendefinisikan Class dan for tag label
            // Yang biasanya di gunakan untuk tag id berubah menjadi htmlFor
            // penggunaaan class pada style haruslah camelCase
            <div className="Machine">
                <p style={colors}>Hello World</p>
                <p style={{ fontSize:"2rem", backgroundColor:"white", color:"black"}}>{s1} {s2} {s3}</p>
                <p className={win? 'Win':'Lose'}>{win ? "Winner":"Losser"}</p>
                <label htmlFor="ID"/>
            </div>
        )
    }
}