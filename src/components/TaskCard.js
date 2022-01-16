import React from "react";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function TaskCard() {
  return (
    <div className="task-card">
      <h2 className="task-name">TaskName</h2>
      <h5>Progress</h5>
      <ProgressBar now={60} label={`60%`} />
      <h5>Due Date</h5>

      <h5>Duration</h5>

      <div className="task-card-buttons">
        <Button variant="primary">Start</Button>
        <Button variant="success">Done</Button>
      </div>
    </div>
  );
}
