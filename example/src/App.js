import React from 'react'

import 'aws-sfn-graph/src/css/graph-0.1.5.css'
import 'aws-sfn-graph/src/css/state-machine-render.css'
import AWSSfnGraph from 'aws-sfn-graph'

const aslData = {
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "Hello",
  "States": {
    "Hello": {
      "Type": "Pass",
      "Result": "Hello",
      "Next": "World"
    },
    "World": {
      "Type": "Pass",
      "Result": "World",
      "End": true
    }
  }
}

const App = () => {

  return (
    <div>
      <AWSSfnGraph data={aslData} width={500} height={500}/>
    </div>

  ) 
}

export default App
