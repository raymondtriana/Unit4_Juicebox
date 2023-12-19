function requireUser(req, res, next) {
  if(!req.user){
    res.status(401);
    next();
  }
  next();
}

module.exports = {
  requireUser
}