const getDifferences = (updated, old) => 
  Object.keys(updated).some(key => updated[key] !== old[key])

module.exports = {
  getDifferences,
}