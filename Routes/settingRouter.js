import express from 'express';
import { getSetting, createSetting, updateSetting, deleteSetting } from '../controllers/settingController.js';
import upload  from "../middleware/uploadFile.js";
const settingRouter = express.Router();

settingRouter.delete('/:id', deleteSetting);
settingRouter.get('/', getSetting);
settingRouter.post('/',upload("siteinfo").single("photo"), createSetting);
settingRouter.put('/:id', updateSetting);

export default settingRouter;
