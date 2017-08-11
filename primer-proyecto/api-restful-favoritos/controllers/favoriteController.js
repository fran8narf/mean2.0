'use strict'

function prueba (req, res) {
	res.status(200).send({
							message: "Welcome to the Home!", 
							data: [2,3,4]	
						});
}

module.exports = {
	prueba
}