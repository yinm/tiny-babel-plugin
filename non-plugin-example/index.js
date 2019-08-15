const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default

const astLog = require('babel-log') // for logging

const code = 'let foo'
console.log('// input -------------------------------------')
console.log(code)

const ast = parser.parse(code)
console.log('')
console.log('// parse -------------------------------------')
astLog(ast)

traverse(ast, {
  Identifier(path) {
    if (path.node.name === 'foo') {
      path.node.name = 'bar'
    }
  }
})
console.log('')
console.log('// transform ---------------------------------')
astLog(ast)

const output = generate(ast, {}, code)
console.log('')
console.log('// generate (= output) -----------------------')
console.log(output.code)