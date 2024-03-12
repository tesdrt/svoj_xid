const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('uDpjN8Mcjy', uuidlib.v4());
	}

module.exports = generateId
