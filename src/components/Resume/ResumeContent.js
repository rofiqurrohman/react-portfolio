import React from 'react';

function ResumeContent(props) {
  return (
    <div className='resume-item'>
      <h5 className={props.title ? 'resume-title' : 'resume-no-title'}>{props.title}</h5>

      <p>
        <em>
          {props.date}. {props.type && `(${props.type})`}
        </em>
        {/* <i>📍</i> */}
      </p>
      <p>{props.location}</p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
