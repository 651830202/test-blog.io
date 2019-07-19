import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const root = 'web/page6'

export function getLink(to,data) {
  return class extends Component {
    render() {
      var path = {
        pathname:'../../'+root + to,
        state:data,
      }
      return (<Link to={path} {...this.props} />)
    }
  }
}

export function toLink(self, to) {
  self.props.router.push(root + to)
}

export function linkToState(state) {
  return class extends Component {
    render() {
      return (<Link to={state} {...this.props} />)
    }
  }
}