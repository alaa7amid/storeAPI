const prisma = require('../../../prisma/prisamClint'); 

exports.register = async (req, res) => {
    const { name, username, password, role, email, phone, address } = req.body;
    try {
        const user = await prisma.user.findUnique({ 
            where: { username }
        });

        if (!user) {
            const new_user = await prisma.user.create({ 
                data: {
                    name,
                    username, 
                    password,
                    role,
                    email,
                    phone,
                    address
                }
            });

            return res.status(201).json({ message: "User created successfully", user: new_user });
        } else {
            return res.status(400).json({ message: "User already exists" });
        }

    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ message: "Failed to create user", error: err.message });
    }
};
