/* eslint-disable no-unused-vars */
import AWSSfnGraph from 'aws-sfn-graph'
import 'aws-sfn-graph/src/css/graph-0.1.5.css'
import 'aws-sfn-graph/src/css/state-machine-render.css'
import React, { useState } from 'react'
import './App.css'

const aslData = {
  Comment:
    'A Hello World example of the Amazon States Language using Pass states',
  StartAt: 'Hello',
  States: {
    Hello: {
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

const aslDataError = `{
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

const App = () => {
  const [data, setData] = useState(aslData)

  // useEffect(() => {
  //   setTimeout(() => setData(aslData), 3000)
  //   setTimeout(() => setData(aslDataError), 6000)
  // }, [])

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
