module.exports = async () => {
  return {
    decoder: await require('./decoder')(),
    encoder: await require('./encoder')()
  }
}