import React from "react";

export default function ProjectSwitch(props) {
  return (<div className="projectSwitch">
    <select onChange={e => props.proUpdaters.updateProjects(e.target.value)} value={props.proUpdaters.newProjects}>
      <option value="true">Current Version</option>
      <option value="false">Old Version</option>
    </select>
  </div>);
}