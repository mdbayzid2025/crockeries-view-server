import express from 'express';
import { getSetting, createSetting, updateSetting, deleteSetting } from '../controllers/settingController.js';
import upload  from "../middleware/uploadFile.js";
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
const settingRouter = express.Router();

settingRouter.delete('/:id', authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  deleteSetting);
settingRouter.get('/', getSetting);
settingRouter.post('/', authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), upload("siteinfo").single("photo"), createSetting);
settingRouter.put('/:id', authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  updateSetting);

export default settingRouter;
