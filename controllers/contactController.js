import nodemailer from 'nodemailer';

const contactForm = async (req, res, next) => {
    const { name, email, message } = req.body;
if (!name || !email || !message)
        return res.status(400).json({ error: "All fields required."});

    try {
        const transporter = nodemailer.createTransport({
            service: "proton",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}`,
            to: process.env.EMAIL,
            subject: "New contact from website",
            text: `You received a new message from ${name} (${email}):\n\n${message}`,
        });

        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send message." });
    }
};

export { contactForm };