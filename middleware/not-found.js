const not_found = (req,res) => {
    res.status(404).send('<h1>Item not found</h1> <br> <a href="/"> Home Page </a>');
}

module.exports = not_found;