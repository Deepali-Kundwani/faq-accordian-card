import React, { useState } from "react";
import "../src/App.css";



export default function App() {

  var [para,setPara]=useState("");
  var [para2,setPara2]=useState("");
  var [para3,setPara3]=useState("");
  var [para4,setPara4]=useState("");
  var [para5,setPara5]=useState("");

  var [downArrow, setDownArrow]= useState(<img className="icon-image" onClick={downArrowClickHandler} src="/images/icon-arrow-down.svg"/>);
  var [downArrow2, setDownArrow2]= useState(<img className="icon-image" onClick={downArrowClickHandler2} src="/images/icon-arrow-down.svg"/>);
  var [downArrow3, setDownArrow3]= useState(<img className="icon-image icon-image-1" onClick={downArrowClickHandler3} src="/images/icon-arrow-down.svg"/>);
  var [downArrow4, setDownArrow4]= useState(<img className="icon-image icon-image-2" onClick={downArrowClickHandler4} src="/images/icon-arrow-down.svg"/>);
  var [downArrow5, setDownArrow5]= useState(<img className="icon-image icon-image-3" onClick={downArrowClickHandler5} src="/images/icon-arrow-down.svg"/>);

  function downArrowClickHandler()
  {
     
     para = <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
     setPara(para);
     downArrow= <img onClick={upArrowClickHandler} className="icon-image" style={{transform: "rotateX(180deg)"}} src="./images/icon-arrow-down.svg"/>
     setDownArrow(downArrow);    
  }

  function upArrowClickHandler()
  {
    downArrow = <img onClick={downArrowClickHandler} className="icon-image" src="./images/icon-arrow-down.svg"/>
    setDownArrow(downArrow);
    para = "";
    setPara(para);
  };

  function downArrowClickHandler2()
  {
     
     para2 = <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
     setPara2(para2);
     downArrow2= <img onClick={upArrowClickHandler2} className="icon-image" style={{transform: "rotateX(180deg)"}} src="./images/icon-arrow-down.svg"/>
     setDownArrow2(downArrow2);
  };

  function upArrowClickHandler2()
  {
    downArrow2 = <img onClick={downArrowClickHandler2} className="icon-image" src="./images/icon-arrow-down.svg"/>
    setDownArrow2(downArrow2);
    para2 = "";
    setPara2(para2);
  };
  
  function downArrowClickHandler3()
  {
     
     para3 = <p>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
     setPara3(para3);
     downArrow3= <img onClick={upArrowClickHandler3} className="icon-image icon-image-1" style={{transform: "rotateX(180deg)"}} src="./images/icon-arrow-down.svg"/>
     setDownArrow3(downArrow3);
  };

  function upArrowClickHandler3()
  {
    downArrow3 = <img onClick={downArrowClickHandler3} className="icon-image icon-image-1" src="./images/icon-arrow-down.svg"/>
    setDownArrow3(downArrow3);
    para3 = "";
    setPara3(para3);
  };

  function downArrowClickHandler4()
  {
     
     para4 = <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
     setPara4(para4);
     downArrow4= <img onClick={upArrowClickHandler4} className="icon-image icon-image-2" style={{transform: "rotateX(180deg)"}} src="./images/icon-arrow-down.svg"/>
     setDownArrow4(downArrow4);
  };

  function upArrowClickHandler4()
  {
    downArrow4 = <img onClick={downArrowClickHandler4} className="icon-image icon-image-2" src="./images/icon-arrow-down.svg"/>
    setDownArrow4(downArrow4);
    para4 = "";
    setPara4(para4);
  };

  function downArrowClickHandler5()
  {
     
     para5 = <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
     setPara5(para5);
     downArrow5= <img onClick={upArrowClickHandler5} className="icon-image icon-image-3" style={{transform: "rotateX(180deg)"}} src="./images/icon-arrow-down.svg"/>
     setDownArrow5(downArrow5);
  };

  function upArrowClickHandler5()
  {
    downArrow5 = <img onClick={downArrowClickHandler5} className="icon-image icon-image-3" src="./images/icon-arrow-down.svg"/>
    setDownArrow5(downArrow5);
    para5 = "";
    setPara5(para5);
  };


  

  return (

  <div className="container">
    
    <div class="images">
        <img className="img1" src="./images/bg-pattern-desktop.svg" alt="bg-image"/>
        <img className="img2" src="./images/illustration-woman-online-desktop.svg" width="100%" height="100%"/>  
        <div className="QNA">
          
         <h1 className="heading">FAQ</h1>
 
          
          <div className="flex-container">
             <div className="question">
                <label className="label">How many team members can I invite?</label>{downArrow}
                {para}
             </div>
             <div className="question">
                <label className="label">What is the maximum file upload size?</label>{downArrow2}
                {para2}
             </div>
             <div className="question">
                <label className="label">How do I reset my password?</label>{downArrow3}
                {para3}
             </div>
             <div className="question">
                <label className="label">Can I cancel my subscription?</label>{downArrow4}
                {para4}
             </div>
             <div className="question">
                <label className="label">Do you provide additional support? </label>{downArrow5}
                {para5}
             </div>
          </div> 
        
        </div>
  </div>

  <img className= "images img3" src="./images/illustration-box-desktop.svg" width="100%" height="100%"/>
    
    
    
</div>
    
  );
}
