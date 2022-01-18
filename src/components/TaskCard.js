import React from "react";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function TaskCard({name,progress,dueDate,status,duration}) {

  const formatDate=date=>{
    let taskDate = new Date(date)
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };  
    let formattedDate=taskDate.toLocaleDateString("en-US", options)
    return formattedDate
  }
  let statusCode={
    
    0:"Not Started",         //0
    1:"In Progress",         //1
    2:"Paused",             //2
    3:"Completed"           //3
  }
 return (
    
    <div className="task-card">
      <h2 className="task-name">{name}</h2>
      <div className="faded line"></div>
      <div className="margin-1-rem">
      <h5>Progress</h5>
      <ProgressBar now={progress} label={`${progress}%`} />
      </div>
      <div className="faded line"></div>
      <div className="margin-1-rem">
      <h5>Due Date:</h5>
      <h6 ><em>{formatDate(dueDate)}</em></h6>
      </div>
      <div className="faded line"></div>
      <div className="row">
        <div className="col-6">
        <h5>Duration</h5>
        <h6><em>{duration} minutes</em></h6>
        </div>
        <div className="col-6">
        <h5>Status</h5>
        <h6><em>{statusCode[status]}</em></h6>
        </div>
      
      </div>
      
      <div className="faded line"></div>

      <div className="task-card-buttons">
        <Button variant="primary">Start</Button>
        <Button variant="success">Done</Button>
      </div>
    </div>
  );
}
