import { Area } from '../models/index';

const areaController = {
    index: async (req, res, next) => {
        const areas = await Area.findAll();
        res.render('area/index', {
            areas: areas.map(area => area.toJSON())
        });
    }
};

export default areaController;
