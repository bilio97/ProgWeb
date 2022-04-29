const mainController = {
    index: async (req, res, next) => {
        const conteudo = "Página principal da aplicação";
        res.render("main/index", {
            conteudo: conteudo,
            layout: 'main'
        });
    },
    sobre: async (req, res, next) => {
        const conteudo = "Página sobre a aplicação";
        res.render("main/sobre", {
            conteudo: conteudo,
        });
    },
    ui: async (req, res, next) => {
        const conteudo = "Página sobre a aplicação";
        res.render("main/ui");

    },
    game: async (req, res, next) => {
        const conteudo = "Página sobre a aplicação";
        res.render("main/game");

    }
};

export default mainController;
