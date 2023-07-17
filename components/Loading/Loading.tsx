import React from 'react'
import { Loader } from 'semantic-ui-react'

const Loading = () => {
  return (
    <div>
      <Loader active inline="centered">
        Loading...
      </Loader>
    </div>
  )
}

export default Loading
