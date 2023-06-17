const { default: mongoose } = require("mongoose");

async function connectionToDB(){
    try{
        await mongoose.connect("mongodb://kamyar:kamyar021@ac-zmxi4ye-shard-00-00.zz6j6v1.mongodb.net:27017,ac-zmxi4ye-shard-00-01.zz6j6v1.mongodb.net:27017,ac-zmxi4ye-shard-00-02.zz6j6v1.mongodb.net:27017/?ssl=true&replicaSet=atlas-p8ez7s-shard-0&authSource=admin&retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("succsess");
    } catch(err){
        console.log("error to conection");
    }
}

export default connectionToDB