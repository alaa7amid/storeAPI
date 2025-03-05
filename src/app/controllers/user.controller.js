const prisma = require('../../../prisma/prisamClint')

exports.register = async (req , res) => {
    const {name , username , passwrd , role , email , phone , address } = req.body;
    try{
        const user = prisma.user.findUnique({
            where: {
                username : username
            }
        })
        if (!user) {
            const new_user = prisma.user.create({
            data : {
                name ,
                passwrd ,
                role,
                email , 
                phone , 
                address 
            }
        }) 
            res.status(200).send("user created ")
        } else {
            res.status(400).send("user already exist")
        }

    }catch (err){
        res.status(500).send("failed to create user")
    }
}