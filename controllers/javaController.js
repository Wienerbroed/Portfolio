const name = process.env.NAME;

const helloVisitor = (req, res, next) => {
    const visitorName = req.query.name || "Visitor";

    res.json({message: `Hello ${visitorName} and welcome to ${name}s portofolio`});
}

export {helloVisitor};