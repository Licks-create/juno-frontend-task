/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";
const Home = () => {
  const [activeComp, setActiveComp] = useState("Monitoring");
  const [topic, setTopic] = useState("Monitoring");
  useEffect(() => {
    document.querySelectorAll("li.compo").forEach((elem) => {
      const classList=elem.classList;
      // console.log({classList},classList[1])
      if(classList[1]===activeComp){
      elem.classList.add("compoactive");
      console.log(elem)    
    }
    else
      elem.classList.remove("compoactive")
    });
  }, [activeComp]);
  return (
    <header className="header">
      <main className="home">
        <div className="left">
          <div className="logo">LOGO HERE</div>

          <nav>
            <li className="compo Overview">
              <Link to="/overview" onClick={() => 
                {
                  setTopic("Overview")
                  setActiveComp("Overview");
                }
                }>
                Overview
              </Link>
            </li>
            <li className="compo Onboarding">
              <Link to="/onboarding" onClick={() => {
                setTopic("Onboarding")
               setActiveComp("Onboarding");
            }}>
                OnBoarding
              </Link>
            </li>
            <li className="compo Monitoring">
              <Link to="/" onClick={() =>{ 
                setTopic("Monitoring")
                setActiveComp("Monitoring");
              }
            }>
                Monitoring
              </Link>
            </li>
            <li className="compo Flagging">
              <Link
                to="/flagging"
                onClick={() => {
                  setTopic("Flagging");
                  setActiveComp("Flagging");
                }}
              >
                Flagging
              </Link>
            </li>
            <li className="compo sourceofincome">
              <Link
                to="/sourceofincome"
                onClick={() => {
                  setTopic("Source of Income")
                  setActiveComp("sourceofincome");
                
              }}
              >
                Source of Income
              </Link>
            </li>
            <li className="compo UAR">
              <Link to="/uar" onClick={() => {
                setTopic("UAR")
                setActiveComp("UAR");
            }}>
                UAR
              </Link>
            </li>
          </nav>

          <div className="profile" style={{display:"flex",
          position:"fixed",
          bottom:"10px",alignItems:"center",width:"10%"}}>
            <span><img src="https://iili.io/JC5XY67.jpg" alt="" style={{width:"50px",height:"50px",borderRadius:"50%"}}/></span>
            <div className="name-email" style={{display:"flex",flexDirection:"column"}}>
              <span style={{fontSize:"18px",fontWeight:"700",color:"#121010fb"}}>Elon Musk</span>
              <span style={{fontSize:"12px",fontWeight:"700",color:"#121010d0"}}>elon@twitter.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>{topic}</h1>
          <section>
            <Outlet />
          </section>
        </div>
      </main>
    </header>
  );
};

export default Home;
