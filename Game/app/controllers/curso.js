import { Curso } from '../models/index';
import { Area } from '../models/index';

const cursoController = {
    index: async (req, res, next) => {
        const cursos = await Curso.findAll();
        res.render('curso/index', {
            cursos: cursos.map(curso => curso.toJSON())
        });
    },
    create: async (req, res, next) => {
        if (req.route.methods.get) {
            res.render('curso/create');
        } else {
            try {
                await Curso.create({
                    sigla: req.body.sigla,
                    nome: req.body.nome,
                    descricao: req.body.descricao,
                    areaId: req.body.area
                }
                );
            } catch (error) {
                console.log(error);
            }

        }
    },
    read: async (req, res, next) => {
        const { id } = req.params;
        const curso = await Curso.findByPk(id, { include: Area });
        console.log(curso.toJSON());
        res.render('curso/read', {
            curso: curso.toJSON()
        });
    },
    update: async (req, res, next) => {
        const cursos = await Curso.findAll();
        //paginaçao  {limit: 2, offset: 0} 
        res.render('curso/update', {
            cursos: cursos.map(curso => curso.toJSON())
        });
    },
    remove: async (req, res, next) => {
        const cursos = await Curso.findAll();
        //paginaçao  {limit: 2, offset: 0} 
        res.render('curso/remove', {
            cursos: cursos.map(curso => curso.toJSON())
        });
    },
};

export default cursoController;
