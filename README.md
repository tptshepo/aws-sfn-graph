# aws-sfn-graph

> Visualise the AWS Step Functions ASL JSON.

[![NPM](https://img.shields.io/npm/v/aws-sfn-graph.svg)](https://www.npmjs.com/package/aws-sfn-graph) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save aws-sfn-graph
```

## Usage

```jsx
import React, { Component } from 'react'

import AWSSfnGraph from 'aws-sfn-graph'

const data =
  '{\r\n  "Comment": "A Hello World example of the Amazon States Language using Pass states",\r\n  "StartAt": "Hello",\r\n  "States": {\r\n    "Hello": {\r\n      "Type": "Pass",\r\n      "Result": "Hello",\r\n      "Next": "World"\r\n    },\r\n    "World": {\r\n      "Type": "Pass",\r\n      "Result": "World",\r\n      "End": true\r\n    }\r\n  }\r\n}'

class Example extends Component {
  render() {
    return <AWSSfnGraph data={data} width={500} height={500} />
  }
}
```

## License

MIT © [tptshepo](https://github.com/tptshepo)
