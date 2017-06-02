import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import analysis from './code.png'
import mobile from './mobile.png'
import web from './web.png'
import star from './star.svg'
import starRed from './star-red.svg'

require('smoothscroll-polyfill').polyfill();


class App extends Component {
  constructor(){
  super();
  this.state = {
  isOptions:true,
    title: "Expertise",
    star:star,
    classHover:[
        "",
        "",
        "",
    ],
    classClick:[
        "",
        "",
        "",
    ],
    classStar:"",
    classtitle:"",
    classTitleBox:""
  }
  }
  hover(i,isEnter){
    let update = this.state;
    if(isEnter){ 
        update.classHover[i] = "app__box__cover--expose"
    }else{
        update.classHover[i] = ""
    }
    this.setState({update})
  }
  click(box){
    console.log( typeof box + "  " + box)
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
    setTimeout(() => {
        let update = this.state;
        update.classTitle = "app--hidden";
        update.classStar = "app--hidden";
        this.setState({update})
    } ,500);
    setTimeout(() => {
        let update = this.state;
        update.classTitleBox = "app--hidden";
        for(let i=0; i < update.classClick.length; i++){
            update.classClick[i] = " app--hidden"
        }
        this.setState({update})
    } ,1000);
        setTimeout(() => {
        let update = this.state;
        update.isOptions = false;
        this.setState({update})
    } ,1500);
    setTimeout(() => {
        let update = this.state;
        update.classTitleBox = " ";
        for(let i=0; i < update.classClick.length; i++){
            update.classClick[i] = " "
        }
        this.setState({update})
    } ,1500);
    setTimeout(() => {
        let update = this.state;
        update.classTitle = "";
        update.classStar = "";
        update.title=box
        update.star=starRed
        this.setState({update})
    } ,2000,box);
  }
  render() {
  if(this.state.isOptions){
	    var options = (
	          <div className="app__boxes">
	            <div onClick={() => this.click("Web")} onMouseEnter={() => {this.hover(0,true)}} onMouseLeave={() => {this.hover(0,false)}}  className={"app__box " + " " + this.state.classClick[0]}>
	                <div className={"app__box__cover " + this.state.classHover[0]}>
	                    <h2> Web </h2>
	                </div>
	                <img src={web} alt="Web"/>    
	            </div>
	            <div onClick={() => this.click("Mobile")} onMouseEnter={() => this.hover(1,true)} onMouseLeave={() => this.hover(1,false)}  className={"app__box " + " " + this.state.classClick[1]}>
	                <div className={"app__box__cover " + this.state.classHover[1]}>
	                    <h2> Mobile </h2>
	                </div>
	                <img src={mobile} alt="Mobile"/>    
	            </div>
	            <div onClick={() => this.click("Analysis")} onMouseEnter={() => this.hover(2,true)} onMouseLeave={ () => this.hover(2,false)}  className={"app__box " + " " + this.state.classClick[2]}>
	                <div className={"app__box__cover " + this.state.classHover[2]}>
	                    <h2> Analysis </h2>
	                </div>
	                <img src={analysis} alt="Analysis"/>    
	            </div>
	          </div>
	    )
        var background = null;
    }else{
    options = null;
      var background = <img className="app__background" src={web} alt="Web"/> 
    }
    return (
      <div className="app">
          {background}
          <div className={"app__title " + this.state.classTitleBox}>  
            <img className={this.state.classStar} src={this.state.star} alt="Star"/>  
            <h1 className={this.state.classTitle} > {this.state.title}</h1>
          </div>
          {options}
      </div>
    );
  }
}

export default App;
