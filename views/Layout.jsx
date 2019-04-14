import React from 'react';
import reactGuard from 'react-guard';
// import picnic from 'picnic'

const layout = (props) => {
  if (props.children == undefined) return null

  return (
    <html>
      <head>
        <title>React App</title>
        <link rel="stylesheet" href='./normalize.css' />
        <link rel="stylesheet" href='./style.css' />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body>
        {props.children}
      </body>
    </html >
  )
}

// Catch and process component render exceptions.
reactGuard(React, function (err, componentInfo) {
  // Print stacktrace to the console
  console && console.error && console.error(err.stack)

  // Notify Sentry (replace with your service of choice)
  Raven.captureException(err, {
    extra: {
      props: componentInfo.props,
      state: componentInfo.state,
      displayName: componentInfo.displayName
    }
  })

  // Replace failed component with "Failed to render".
  // Use `return null` to render nothing.
  return <div>Failed to render</div>
})

export default layout;