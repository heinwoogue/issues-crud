import express from 'express';
import issues from './issues/issues.route';

const router = express.Router();

router.use('/issues', issues);

export default router;
