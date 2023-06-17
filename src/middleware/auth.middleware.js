import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next) => {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token,process.env.AUTH_KEY,(err,user) => {
        if(err) return res.sendStatus(401);
        req.user = user;
        next();
    })
}

export { verifyToken }
