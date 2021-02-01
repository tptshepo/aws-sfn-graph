/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import 'aws-sfn-graph/src/css/graph-0.1.5.css'
import 'aws-sfn-graph/src/css/state-machine-render.css'
import AWSSfnGraph from 'aws-sfn-graph'

import './App.css'

const aslData = `{
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "Hello",
  "States": {
    "Hello": {
      "Type": "Pass",
      "Result": "Hello",
      "Next": "Hello2"
    },
    "Hello2": {
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
}`

const aslData2 = {
  Comment:
    'A Hello World example of the Amazon States Language using Pass states',
  StartAt: 'Hello2',
  States: {
    Hello2: {
      Type: 'Pass',
      Result: 'Hello',
      Next: 'World'
    },
    World: {
      Type: 'Pass',
      Result: 'World',
      End: true
    }
  }
}

const App = () => {
  const [data, setData] = useState(aslData)

  // useEffect(() => {
  //   setTimeout(() => setData(aslData), 3000);
  //   setTimeout(() => setData(aslData2), 6000);
  // }, []);

  const width = 600
  const height = 600

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>One of three columns</div>
          <div className='col-sm'>
            <div
              style={{ width: width, height: height, backgroundColor: '#fff' }}
            >
              <AWSSfnGraph
                data={data}
                width={width}
                height={height}
                resizeHeight
                onError={console.log}
              />
            </div>
          </div>
          <div className='col-sm'>One of three columns</div>
        </div>
      </div>
    </>
  )
}

export default App
