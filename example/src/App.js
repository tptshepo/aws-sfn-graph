import React, { useState } from 'react'

import AWSSfnGraph from 'aws-sfn-graph'

const workflowData =
  '{\r\n  "Comment": "A Hello World example of the Amazon States Language using Pass states",\r\n  "StartAt": "Hello",\r\n  "States": {\r\n    "Hello": {\r\n      "Type": "Pass",\r\n      "Result": "Hello",\r\n      "Next": "World"\r\n    },\r\n    "World": {\r\n      "Type": "Pass",\r\n      "Result": "World",\r\n      "End": true\r\n    }\r\n  }\r\n}';

  const workflowData2 =
  '{\r\n  "Comment": "A Hello World example of the Amazon States Language using Pass states",\r\n  "StartAt": "Hello2",\r\n  "States": {\r\n    "Hello2": {\r\n      "Type": "Pass",\r\n      "Result": "Hello",\r\n      "Next": "World"\r\n    },\r\n    "World": {\r\n      "Type": "Pass",\r\n      "Result": "World",\r\n      "End": true\r\n    }\r\n  }\r\n}';

const App = () => {
  const [data, setData ] = useState(workflowData);

  return (
    <div>
      <input type='button' value="Update" onClick={() => { setData(workflowData2)}} />
      <AWSSfnGraph data={data} width={500} height={500}/>
    </div>

  ) 
}

export default App
