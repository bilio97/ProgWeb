import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index",{
        professores: [
            {nome :"David Fernandes", sala: 1238},
            {nome :"Horacio Fernandes", sala: 1233},
            {nome :"Leandro Galvão", sala: 1222},
            {nome :"Tayana Conte", sala: 1212},
        ],
        layout:false,
    })
})

export default router;