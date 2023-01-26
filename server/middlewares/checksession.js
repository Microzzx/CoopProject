module.exports = function checkSession(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).send('Unauthorized');
    }
    next();
}