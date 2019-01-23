import React, { Component } from 'react';
import axios from'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount()
  {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then((response) =>
    {
      console.log(response.data)
      this.setState({
        students: response.data
      });

    })
    .catch((error) => 
    {
      console.log(error)
      alert("couldnt get students");
    })
  }

  render() {
    const students  = this.state.students.map((curVal, index) =>
    {
      return <Link key={index} to={`/student/${curVal.id}`}>
      <h3>{`${curVal.first_name} ${curVal.last_name}`}</h3>
      </Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
}