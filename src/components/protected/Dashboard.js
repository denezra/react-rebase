import React, { Component } from 'react'
import { saveEvent } from '../../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Dashboard extends Component {
	state = { registerError: null }
	handleSubmit = (e) => {
    e.preventDefault()
    saveEvent(this.name.value, this.date.value, this.location.value)
  }
  render () {
  	console.log(saveEvent);
    return (
      <div>
        Dashboard. This is a protected route. You can only see this if you're authed.
        <h1>Register Event</h1>
        <form onSubmit={this.handleSubmit}>
					<div className="form-group">
            <label>Event Name</label>
            <input className="form-control" ref={(name) => this.name = name} placeholder="Name"/>
            <label>Event Date</label>
            <input className="form-control" ref={(date) => this.date = date} type="date"/>
            <label>Event Location</label>
            <input className="form-control" ref={(location) => this.location = location} placeholder="Location"/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}