
module.exports = function(error,res){
  console.error(error.stack);
  res.status(500).send('Something broke!');
}
