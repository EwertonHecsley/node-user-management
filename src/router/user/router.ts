import { Router } from 'express';
import { UserController } from '../../controller/user/User.controller';

const router = Router();

const router_user = new UserController();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/user', router_user.getUsers);


export default router;