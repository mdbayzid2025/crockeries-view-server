import express from 'express';
import { getSetting, createSetting, updateSetting } from '../controllers/settingController.js';

const settingRouter = express.Router();

router.get('/', getSetting);
router.post('/', createSetting);
router.put('/', updateSetting);

export default settingRouter;
