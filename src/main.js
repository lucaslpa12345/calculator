import React, {Component} from 'react' 
import './Main.css'
import Butao from  './components/button.js'
import Display from './components/display.js'

const initialState = { 
     displayValue: 0, 
     clearDisplay: false, 
     operation: null,
     values: [0, 0],
     current: 0
}
export default  class Calculator extends Component { 
  state =  {...initialState}

   clearMemory() { this.setState( 
       {...initialState})}

   addoperation(operation) { 
       if(this.state.current ===0 ) { 
           this.setState({ operation ,   current: 1, clearDisplay: true  })
       }
            else { 
             const equals = operation  === '='
            
               const currentOperarion = this.state.operation
               const values = [...this.state.values] 
               
               const resultado =  () => {if (currentOperarion === '+') {return values[1] + values[0]}
                                        else if (currentOperarion === '*') {return values[1] * values[0]}
                                        else if (currentOperarion === '-') {return values[1] - values[0]}
                                        else if (currentOperarion === '/') {return values[1] / values[0]}}
 
               values[0] = resultado()
             
               
                console.log(values[0])       
               
               values[1] = 0 
               this.setState({displayValue:values[0], operation: equals ? null : operation, current: equals ? 0 : 1, 
             clearDisplay: !equals, 
               values})     
                 
            }

            

   }

   adddigit(e) { 
    if ( e === '.' && this.state.displayValue.includes('.') ) {
        return}
     const clearDisplay = this.state.displayValue === 0 || this.state.clearDisplay
     const currentValue =    clearDisplay ? '' : this.state.displayValue
     const displayValue = currentValue + e 
     this.setState({displayValue, clearDisplay: false})
     
     if(e !== '.') { 
         const i = this.state.current 
         const NewValue = parseFloat(displayValue)
         const values = [...this.state.values]
         values[i] = NewValue
         this.setState({values})
         console.log(values)
     }
   }

          render() { 
              return ( 
                   <div className='doidera'>
                   <Display value={this.state.displayValue}></Display>
                   <Butao label='C' clear click= {(v) => this.clearMemory()}/>
                   <Butao label='0'  click= {(v) => this.adddigit(v)} />
                   <Butao label='*' operation click= {(v) => this.addoperation(v)}  />
                   <Butao label='1' click= {(v) => this.adddigit(v)}/>
                   <Butao label='2'click= {(v) => this.adddigit(v)}/>
                   <Butao label='3'click= {(v) => this.adddigit(v)}/>
                   <Butao label='/'operation click= {(v) => this.addoperation(v)} />
                   <Butao label='4' click= {(v) => this.adddigit(v)} />
                   <Butao label='5'click= {(v) => this.adddigit(v)}/>
                   <Butao label='6'click= {(v) => this.adddigit(v)}/>
                   <Butao label='-' operation click= {(v) => this.addoperation(v)}/>
                   <Butao label= '7' click= {(v) => this.adddigit(v)} />
                   <Butao label='8'click= {(v) => this.adddigit(v)}/>
                   <Butao label='9' click= {(v) => this.adddigit(v)} />
                   <Butao label='+' operation   click= {(v) => this.addoperation(v)} />
                   <Butao label='.'    click= {(v) => this.adddigit(v)} />
                   <Butao label='=' double click= {(v) => this.addoperation(v)}/>
                   
                  </div>
              )
          }
}

