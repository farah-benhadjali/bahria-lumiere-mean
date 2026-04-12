//mongoose crée une connection entre mangodb et express
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)
