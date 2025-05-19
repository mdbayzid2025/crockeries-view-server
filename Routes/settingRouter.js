import express from 'express';
import { getSetting, createSetting, updateSetting, deleteSetting } from '../controllers/settingController.js';

const settingRouter = express.Router();

settingRouter.delete('/:id', deleteSetting);
settingRouter.get('/', getSetting);
settingRouter.post('/', createSetting);
settingRouter.put('/:id', updateSetting);

export default settingRouter;
