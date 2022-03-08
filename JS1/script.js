let multiplicando= 1;
let multiplicador= 1;
const limiteInferior = 1;
const limiteSuperior = 11;

for(multiplicando = limiteInferior; multiplicando < limiteSuperior; multiplicando++){
    if(multiplicando <6){
        document.write("<table border=\"1\" class=\"a c\"  id=multiplicando",multiplicando,">");
    }else{
        document.write("<table border=\"1\" class=\"b c\"  id=multiplicando",multiplicando,">");
    }

    document.write("<thead><tr><th colspan=\"2\"> Produtos de ",multiplicando," </th></tr></thead>");
    for(multiplicador = limiteInferior; multiplicador < limiteSuperior; multiplicador++){
        document.write("<tr><td>",multiplicando,"x",multiplicador,"=","</td><td>",multiplicando*multiplicador,"</td></tr>");
        console.log(multiplicando, 'x',multiplicador,'=',multiplicando*multiplicador);
    }
}

