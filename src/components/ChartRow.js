import	React from "react"


function ChartRow(props) {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.rating}</td>
        <td>{props.awards}</td>
        <td>{props.length}</td>
      </tr>
    );
  }
  
  export default ChartRow;