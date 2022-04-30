import { Area } from '../models/index';

const areaController = {
    index: async (req, res, next) => {
        const areas = await Area.findAll();
        //paginaçao  {limit: 2, offset: 0} 
        res.render('area/index', {
            areas: areas.map(area => area.toJSON())
        });
    }
};

export default areaController;
