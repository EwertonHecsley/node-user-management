import { Router } from 'express';
import { UserController } from '../../controller/user/User.controller';

const router = Router();

const router_user = new UserController();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/user', router_user.createUser);
router.get('/user/:id', router_user.getUserById);
router.get('/user/:username', router_user.getUserByUsername);
router.get('/user/:email', router_user.getUserByEmail);
router.get('/user', router_user.getUsers);


export default router;