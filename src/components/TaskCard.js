import React from "react";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function TaskCard({name,progress,dueDate}) {
  return (
    <div className="task-card">
      <h2 className="task-name">{name}</h2>
      <h5>Progress</h5>
      <ProgressBar now={progress} label={`${progress}%`} />
      <h5>Due Date: {dueDate} </h5>

      <h5>Duration</h5>

<div className="line"></div>
      <div className="task-card-buttons">
        <Button variant="primary">Start</Button>
        <Button variant="success">Done</Button>
      </div>
    </div>
  );
}
