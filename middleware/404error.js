
module.exports=(req, res, next) => {

    res.status(404).send(
        "<h1>Page not found on the server</h1>");
    next();    
}