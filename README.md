# JS_Bind
Allows the developer to bind the values of one element to another (or set of others)

This has been built using https://github.com/guitarbeerchocolate/vanilla-js-component
## Example of use
`const binder = require('./binder');`
`binder.setSource('#myinput','keyup');`
`binder.setBinded(['h1','h2','.myClass']);`
`binder.Bind();`
