import {Component} from "react"

class Footer extends Component{
    render(){
        return(
            <div style={{display:"flex", margin:"none", color:"silver",backgroundColor:"black"}}>
                <div style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column", padding:"15px 0 0 0"}}>
                    <h4>Address</h4>
                    <hr style={{width:"100vw"}}/>
                    <p>30 N Gould St Ste R, Sheridan</p>
                    <p>Wyoming, ZIP: 82801</p>
                    <p>Phone:336-290-7678</p>
                </div>
            </div>
        )
    }
}

export default Footer