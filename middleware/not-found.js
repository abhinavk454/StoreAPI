const notFound = (req, res) => res.sendStatus(404).send("Route doesn't exists");

module.exports = notFound;
