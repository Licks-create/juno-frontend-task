/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CircleIcon from "@mui/icons-material/Circle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { db as demoData } from "../data";
import "./Monitoring.css";
import CloseIcon from "@mui/icons-material/Close";
const Monitoring = () => {
  const flags = [
    "Hard flag",
    "Temp flag",
    "Restricted unflag",
    "unflag",
    "Reviewed",
  ];
  const [drop, setDrop] = useState(false);
  const [dialog, setDialog] = useState(false);

  console.log(demoData[0]);

  const { completed, pending } = demoData[0];
  const [taskStatus, setTaskStatus] = useState("pending");
  const pendingSwitch = useRef();
  const completedSwitch = useRef();

  useEffect(() => {
    completedSwitch.current.classList.toggle("active");
    console.log("one");
  }, []);

  useEffect(() => {
    toggleSwitch();
    console.log({ taskStatus });
  }, [taskStatus]);

  const toggleSwitch = () => {
    document.querySelectorAll("span.toggleClass").forEach((elem) => {
      elem.classList.toggle("active");
    });
  };
  const getColor = (data) => {
    if (data.riskLevel === "L") return "#35562b";
    if (data.riskLevel === "H") return "#900C3F";
    if (data.riskLevel === "M") return "#848415";
  };

  return (
    <main className="monitoring">
      <div className="above">
        <div className="switch">
          <span
            className="toggleClass"
            ref={pendingSwitch}
            onClick={() => {
              setTaskStatus("pending");
            }}
          >
            Pending
          </span>

          <span
            className="toggleClass"
            ref={completedSwitch}
            onClick={() => {
              setTaskStatus("completed");
            }}
          >
            Completed
          </span>
        </div>

        <div
          className="closeAccount"
          onClick={() => {
            console.log("object");
            setDialog(!dialog);
          }}
        >
          <button style={{ cursor: "pointer" }}>
            <HighlightOffIcon style={{ marginRight: ".5rem" }} />
            <span>Close Account</span>
          </button>

          {dialog && (
            <div
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                top: "0px",
                left: "0px",
                zIndex: "100",
                background: "rgb(0,0,0,.2)",
              }}
            >
              <section
                className="modal"
                style={{
                  position: "absolute",
                  top: "25%",
                  left: window.innerWidth > 786 ? "35%" : "25%",
                  width: "50%",
                  height: "50vh",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  padding: "1rem",
                  borderRadius: "1rem",
                  maxWidth: "466px",
                  margin: "auto",
                }}
              >
                <h2
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                  }}
                >
                  <span>Close Account</span>
                  <CloseIcon
                    onClick={() => {
                      console.log({ dialog });
                      setDialog(false);
                    }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      cursor: "pointer",
                    }}
                  />
                </h2>
                <div>
                  <label
                    htmlFor="reason"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="reason"
                    style={{
                      width: "100%",
                      outline: "none",
                      border: "1px solid #7b707089",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="reason"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Reason
                  </label>
                  <input
                    type="text"
                    id="reason"
                    style={{
                      width: "100%",
                      outline: "none",
                      border: "1px solid #7b707089",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="otherInput"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Note
                  </label>
                  <input
                    type="text"
                    id="otherInput"
                    style={{
                      width: "100%",
                      outline: "none",
                      border: "1px solid #7b707089",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <button>Close Account</button>
              </section>
            </div>
          )}
        </div>
      </div>

      <div className="below">
        <section className="search-filter">
          <div style={{ position: "relative" }}>
            <div style={{ width: "50%" }}>
              <SearchIcon
                style={{
                  position: "absolute",
                  color: "rgba(7, 6, 6, 0.26)",
                  top: "25%",
                  left: "5px",
                }}
              />
              <input
                type="text"
                style={{ width: "100%" }}
                placeholder="Search"
              />
            </div>
            <div
              className="scroll"
              onClick={() => setDrop(!drop)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              Triggered Reason
              <ExpandMoreIcon className={`${drop ? "arrowUp" : ""} arrow`} />
              <div className={`dropdown ${drop ? "active" : ""}`}>
                <ul className="flags-list">
                  {flags.map((flag, index) => (
                    <li key={index} className="flag">
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="scroll">
              Risk Level
              <ExpandMoreIcon />
            </div>
          </div>
        </section>
        {taskStatus === "pending" ? (
          <section className="table">
            <table>
              <thead>
                <tr>
                  <th>Users</th>
                  <th>
                    <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center",alignItems:"center"}}>
                      <span>Risk Level</span>
                      <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                        <ExpandMoreIcon className={`arrowUp`} />
                        <ExpandMoreIcon className={`arrowDown`} />
                      </div>
                    </div>
                  </th>
                  <th>Triggered Reason</th>
                  <th>
                    
                    

                    <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center",alignItems:"center"}}>
                      <span>
                        In queue for
                      </span>
                      <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                        <ExpandMoreIcon className={`arrowUp`} />
                        <ExpandMoreIcon className={`arrowDown`} />
                      </div>
                    </div>
                  </th>
                  <th>
                    <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center",alignItems:"center"}}>
                      <span>
                    Date Added on
                      </span>
                      <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                        <ExpandMoreIcon className={`arrowUp`} />
                        <ExpandMoreIcon className={`arrowDown`} />
                      </div>
                    </div>
                  </th>
                  <th>Previously reviewed</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((data, i) => {
                  return (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid rgb(0,0,0,.3)" }}
                    >
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          padding: "1rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "start",
                          }}
                        >
                          <span style={{ fontWeight: "700" }}>{data.name}</span>
                          <span
                            style={{
                              fontSize: "12px",
                              color: "#100e0e9c",
                              fontWeight: "700",
                            }}
                          >
                            {data.email}
                          </span>
                        </div>
                        <OpenInNewIcon style={{ color: "blue" }} />
                      </td>

                      <td style={{ textAlign: "center" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            fontSize: "13px",
                            paddingLeft: "1.5rem",
                          }}
                        >
                          <CircleIcon
                            style={{ color: getColor(data), fontSize: "13px" }}
                          />
                          <span
                            style={{
                              textAlign: "start",
                              flexGrow: "2",
                              color: getColor(data),
                              justifySelf: "flex-start",
                              fontWeight: "600",
                              marginLeft: "5px",
                            }}
                          >
                            {(data.riskLevel === "L" && "Low") ||
                              (data.riskLevel === "M" && "Medium") ||
                              (data.riskLevel === "H" && "High")}
                          </span>
                        </div>
                      </td>
                      <td style={{ fontWeight: "700" }}>
                        {data.TriggeredReason}
                      </td>
                      <td style={{ fontWeight: "700" }}>{data.InQueFor}</td>
                      <td
                        style={{
                          fontSize: "14px",
                          color: "#100e0e9c",
                          fontWeight: "700",
                        }}
                      >
                        {data.DateAdded}
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "start",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "700",
                              textAlign: "center",
                              width: "100%",
                            }}
                          >
                            {data.PrevReview.bool}
                          </span>
                          <span
                            style={{
                              fontWeight: "700",
                              color: "#1d1a1a93",
                              textAlign: "center",
                              width: "100%",
                            }}
                          >
                            {data.PrevReview.bool === "Yes" && "12 aug 2023"}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        ) : (
          <section className="table belowtable">
            <table>
              <thead>
                <tr>
                  <th>Users</th>
                  <th>
                    
                    <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center",alignItems:"center"}}>
                      <span>
                      Risk Level
                      </span>
                      <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                        <ExpandMoreIcon className={`arrowUp`} />
                        <ExpandMoreIcon className={`arrowDown`} />
                      </div>
                    </div>

                  </th>
                  <th>Action Reason</th>
                  <th>
                    <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center",alignItems:"center"}}>
                      <span>
                    Time To close
                      </span>
                      <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                        <ExpandMoreIcon className={`arrowUp`} />
                        <ExpandMoreIcon className={`arrowDown`} />
                      </div>
                    </div>


                  </th>
                  <th>
                    <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center",alignItems:"center"}}>
                      <span>
                    Date Added on
                      </span>
                      <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                        <ExpandMoreIcon className={`arrowUp`} />
                        <ExpandMoreIcon className={`arrowDown`} />
                      </div>
                    </div>

                  </th>
                  <th>Action taken by</th>
                </tr>
              </thead>
              <tbody>
                {completed.map((data, i) => {
                  return (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid rgb(0,0,0,.3)" }}
                    >
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          padding: "1rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "start",
                          }}
                        >
                          <span style={{ fontWeight: "700" }}>{data.name}</span>
                          <span
                            style={{
                              fontSize: "12px",
                              color: "#100e0e9c",
                              fontWeight: "700",
                            }}
                          >
                            {data.email}
                          </span>
                        </div>
                        <OpenInNewIcon style={{ color: "blue" }} />
                      </td>

                      <td style={{ textAlign: "center" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            fontSize: "13px",
                            paddingLeft: "1.5rem",
                          }}
                        >
                          <CircleIcon
                            style={{ color: getColor(data), fontSize: "13px" }}
                          />
                          <span
                            style={{
                              textAlign: "start",
                              flexGrow: "2",
                              color: getColor(data),
                              justifySelf: "flex-start",
                              fontWeight: "600",
                              marginLeft: "5px",
                            }}
                          >
                            {(data.riskLevel === "L" && "Low") ||
                              (data.riskLevel === "M" && "Medium") ||
                              (data.riskLevel === "H" && "High")}
                          </span>
                        </div>
                      </td>
                      <td style={{ fontWeight: "700" }}>{data.ActionReason}</td>
                      <td style={{ fontWeight: "700" }}>{data.TimeToClose}</td>
                      <td
                        style={{
                          fontSize: "14px",
                          color: "#100e0e9c",
                          fontWeight: "700",
                        }}
                      >
                        {data.DateAdded}
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "start",
                          }}
                        >
                          <span style={{ fontWeight: "700" }}>
                            {data.ActionTakenBy.name}
                          </span>
                          <span
                            style={{ color: "#120e0e9d", fontWeight: "700" }}
                          >
                            {data.ActionTakenBy.email}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </main>
  );
};

export default Monitoring;
