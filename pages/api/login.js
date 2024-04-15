import { loginUser } from "../../prisma/Userin";
import validateMethod from "./middleware";

export default async function handler(req, res) {
    validateMethod(req, res, async() => {
        if (req.method === 'POST') {
            const { email, password } = req.body;

            try {
                const { user, token } = await loginUser(email, password);
                res.status(200).json({ message: 'Logged in successfully', user, token });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    })
}
