import { Component } from "react"

class SubscribeButton extends Component{
    state={
        isSubscribed:true,
        text1:"Subscribe",
        text2:"Subscribed"
    }
    handleClick=()=>(
        this.setState(
            {
                isSubscribed:!this.state.isSubscribed
            }
        )
    )
    render(){
        return(
            <>
                <button onClick={this.handleClick}>
                    {this.state.isSubscribed?this.state.text1:this.state.text2}
                </button>
            </>
        )
    }
}
export default SubscribeButton;