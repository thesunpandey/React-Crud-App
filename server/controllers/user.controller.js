import User from "../models/user.model.js"; // Importing the User model

// Function to create a new user
export const create = async (req, res) => {
    try {
        // Check if the role is 'Admin' and if an admin already exists
        if (req.body.role === 'Admin') {
            const adminExists = await User.findOne({ role: 'Admin' });

            // If an admin already exists, prevent the creation of another admin
            if (adminExists) {
                return res.status(400).json({ msg: "An admin already exists!" });
            }
        }

        // Create a new instance of User with the request body data
        const userData = new User(req.body);

        // Check if userData is valid
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }

        // Save the new user to the database
        await userData.save();
        res.status(200).json({ msg: "User created successfully" });

    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error });
    }
}

// Function to retrieve all users
export const getAll = async (req, res) => {
    try {
        // Fetch all users from the database
        const userData = await User.find();

        // Check if any users were found
        if (!userData || userData.length === 0) {
            return res.status(404).json({ msg: "User data not found" });
        }

        // Return the list of users
        res.status(200).json(userData);

    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error });
    }
}

// Function to retrieve a single user by ID
export const getOne = async (req, res) => {
    try {
        const id = req.params.id; // Get the user ID from request parameters

        // Find a user by ID in the database
        const userExist = await User.findById(id);

        // Check if the user exists
        if (!userExist) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Return the found user data
        res.status(200).json(userExist);

    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error });
    }
}

// Function to update an existing user's information
export const update = async (req, res) => {
    try {
        const id = req.params.id; // Get the user ID from request parameters

        // Check if the user exists in the database
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Update the user's information and return the updated data
        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
        
        res.status(200).json({ msg: "User updated successfully", updatedData });

    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error });
    }
}

// Function to delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id; // Get the user ID from request parameters

        // Check if the user exists in the database
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "User does not exist" });
        }

        // Delete the user from the database
        await User.findByIdAndDelete(id);
        
        res.status(200).json({ msg: "User deleted successfully" });

    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error });
    }
}
