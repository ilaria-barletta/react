//to create and automatically export a new  functional component = rfce
import React from 'react'

function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

//to create and automatically export a new  functional component as an arrow function = rafce

import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// to create and export a class component = rce

import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets

//to create the constructor = rconst

constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// to log something to the console = clg

console.log(first)

// to log an object along with its name as a string = clo

console.log('first', first)