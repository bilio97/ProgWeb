const mainController = {
    index: async (req, res, next) => {
        const conteudo = "Página principal da aplicação";
        res.render("main/index", {
            conteudo: conteudo,
        });
    },
    sobre: async (req, res, next) => {
        const conteudo = "Página sobre a aplicação";
        res.render("main/sobre", {
            conteudo: conteudo,
        });
    },
};

export default mainController;
