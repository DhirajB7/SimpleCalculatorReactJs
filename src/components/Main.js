import React, { Component } from 'react'
import Display from './Display'
import ButtonComponent from './ButtonComponent'

class Main extends Component {

    constructor() {
        super()
    
        this.state = {
           display:"0",
           reload:false
        }

        this.getFromChild=this.getFromChild.bind(this)
    }
    
    getFromChild(item){
        let value = this.state.display+item
        if(item==="C"){
            value="0"
        }else if(item==="+"||item==="-"||item==="*"||item==="/"){
            value = this.validate(value)
        }else if(item==="="){
            value = this.trueCalculate(value)
        }
       this.setState({
           display:value
       })
    }

    validate(question){
        var a = question.substring(question.length-2,question.length-1)

       if(parseInt(a)>-1){
           return question
       }else{
           return "WRONG VALUE ENTERED"
       }
    }

    trueCalculate(question){
        var a = question.substring(1,question.length-1)
        var answer = eval(a)

        setTimeout(()=>{
            alert("Click on clear or C before next operation")
        },5000)

        return answer
    }

    render() {
        return (
            <div>
            <div>
            <Display toDisplay={this.state.display}/>
            </div>

           <br/>
           
            <div className="keyPad">

                <div className="firstRow">
            <ButtonComponent toChild={this.getFromChild} name="1"/>
            <ButtonComponent toChild={this.getFromChild} name="2"/>
            <ButtonComponent toChild={this.getFromChild} name="3"/>
            <ButtonComponent toChild={this.getFromChild} name="+"/>
                </div>

                <br/>

                <div className="SecondRow">
            <ButtonComponent toChild={this.getFromChild} name="4"/>
            <ButtonComponent toChild={this.getFromChild} name="5"/>
            <ButtonComponent toChild={this.getFromChild} name="6"/>
            <ButtonComponent toChild={this.getFromChild} name="-"/>
                </div>

                <br/>

                <div className="thirdRow">
            <ButtonComponent toChild={this.getFromChild} name="7"/>
            <ButtonComponent toChild={this.getFromChild} name="8"/>
            <ButtonComponent toChild={this.getFromChild} name="9"/>
            <ButtonComponent toChild={this.getFromChild} name="*"/>
                </div>

                <br/>

                <div className="lastRow">
            <ButtonComponent toChild={this.getFromChild} name="C"/>
            <ButtonComponent toChild={this.getFromChild} name="0"/>
            <ButtonComponent toChild={this.getFromChild} name="="/>
            <ButtonComponent toChild={this.getFromChild} name="/"/>
                </div>

            </div>
            
        </div>
        )
    }
}


export default Main
