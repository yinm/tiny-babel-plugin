module.exports = () => {
  return {
    visitor: {
      Identifier(path) {
        console.log('// parsed -----------------------------------')
        console.log(path.node)

        if (path.node.name === 'foo') {
          path.node.name = 'bar'
        }

        console.log('')
        console.log('// transform --------------------------------')
        console.log(path.node);

        console.log('')
        console.log('// will generate (= output) -----------------')
      }
    }
  };
}