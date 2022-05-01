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
            const curso = req.body;
            try {
                await Curso.create(curso);
                res.redirect('/curso');
            } catch (error) {
                res.render("curso/create", {
                    curso: req.body,
                    errors: error.errors
                })
            }

        }
    },
    read: async (req, res, next) => {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id, { include: Area });
            res.render('curso/read', {
                curso: curso.toJSON()
            });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res, next) => {
        const cursos = await Curso.findAll();
        res.render('curso/update', {
            cursos: cursos.map(curso => curso.toJSON())
        });
    },
    remove: async (req, res, next) => {
        const { id } = req.params;
        try {
            const cursos = await Curso.destroy({ where: { id: id } });
            res.send("Curso apagado com sucesso");
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
};

export default cursoController;
