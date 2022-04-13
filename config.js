module.exports = {
	Bot: {
		token: process.env.token,
		prefix: ["muz","$getServerVar[prefix]"],	
    intents: "all"
  }
}