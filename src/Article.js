
import React,{ Component } from 'react'

class Article extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="article">
                <div className="photo">
                    <img src={this.props.image} alt=""/>
                </div>
                <h1>{this.props.title}</h1>
                <h4>{this.props.description}</h4>
                <p>{this.props.publishedAt}</p>
                <div className="line"></div>
            </div>
        )
    }
}
export default Article