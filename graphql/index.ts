const {merge} = require('lodash')
import hello from './hello'
import post from './post'


export default merge(hello, post)