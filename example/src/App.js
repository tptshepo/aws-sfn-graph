/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import 'aws-sfn-graph/src/css/graph-0.1.5.css'
import 'aws-sfn-graph/src/css/state-machine-render.css'
import AWSSfnGraph from 'aws-sfn-graph'

import './App.css';

const aslData = `{
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
}`;

const aslData2 = {
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "Hello2",
  "States": {
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
}

const App = () =>  {
  const [data, setData ] = useState(aslData);

  // useEffect(() => {
  //   setTimeout(() => setData(aslData), 3000);
  //   setTimeout(() => setData(aslData2), 6000);
  // }, []);  

  return (
    <>
    <div style={{padding: 10, height: 300, width: 500}}>
      <AWSSfnGraph data={data} width={500} height={300} onError={console.log}/>
    </div>
    </>
  ) 
}

export default App
