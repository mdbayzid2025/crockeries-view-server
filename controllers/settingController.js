import SettingSchema from "../Schema/SettingSchema";

// GET setting (assumes only one)
export const getSetting = async (req, res) => {
  try {
    const setting = await SettingSchema.findOne();
    res.status(200).json(setting);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch setting', error });
  }
};

// CREATE setting
export const createSetting = async (req, res) => {
  try {
    const setting = new SettingSchema(req.body);
    await setting.save();
    res.status(201).json(setting);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create setting', error });
  }
};

// UPDATE setting
export const updateSetting = async (req, res) => {
  try {
    const updated = await SettingSchema.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true, // create if not exists
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update setting', error });
  }
};