(function () {

  const TAMX = 300;
  const TAMY = 400;
  const PROB_ARVORE = 1;
  const PROB_ARBUSTO= 0.8;
  const PROB_ROCHA= 0.6;
  const PROB_TOCO= 0.4;
  const PROB_CACHORRO= 0.3;
  const PROB_ARVORE_GRANDE= 0.2;
  
  let FPS = 50.0;   //Para 20 metros/segundo 
  let vidas = 3;
  let metrosPercorridos = 0;
  let montanha;
  let mps; //metros por segundo
  let skier;
  let gameFPS;

  const obstacles = [];
  
  function init() {
    montanha = new Montanha();
    skier = new Skier();
    mps =Math.floor(1000/FPS);
    gameFPS=setInterval(run, mps);
    setInterval(calcularMetros, 1000);
  }

  function calcularMetros() {
    if(FPS === 50.0)
      metrosPercorridos+=20;   
    else 
      metrosPercorridos+=30;
    console.log("Pontuaçao: ",metrosPercorridos);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') skier.mudarDirecao(-1)
    else if (e.key === 'ArrowRight') skier.mudarDirecao(+1);
    else if (e.key === 'f'||e.key === 'F') skier.acelerar();
  })

  class Montanha {
    constructor() {
      this.element = document.getElementById('montanha');
      this.element.style.width = `${TAMX}px`;
      this.element.style.height = `${TAMY}px`;
    }
  }

  class Skier {
    constructor() {
      this.element = document.getElementById('skier');
      this.direcoes = ['para-esquerda', 'para-frente', 'para-direita'];
      this.direcao = 1;
      this.acelerado = false;
      this.element.className = this.direcoes[this.direcao];
      this.element.style.top = '20px';
      this.element.style.left = parseInt(TAMX/2)-8 + 'px';
    }
    mudarDirecao(giro) {
      if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
        this.direcao += giro;
        this.element.className = this.direcoes[this.direcao];
      }
    }
    acelerar() {
      this.acelerado= !this.acelerado;
      clearInterval(gameFPS);
      if(this.acelerado){
       FPS= 75; //Para 30 metros/segundo
      } else{
        FPS = 50; //Para 20 metros/segundo
      }
      mps = Math.floor(1000/FPS);
      gameFPS=setInterval(run, mps);
    }
    andar() {
      if (this.direcao === 0) {
        // if(this.acelerado){
        //   this.element.style.left = parseInt(this.element.style.left)-3 + 'px'; //Aceleração por pixel
        // }else{                                                               
          this.element.style.left = parseInt(this.element.style.left)-1 + 'px';
      } else if (this.direcao === 2) {
        //if (this.acelerado){
        //   this.element.style.left = parseInt(this.element.style.left)+3 + 'px'; //Aceleração por pixel
        // }else{                                                                 
          this.element.style.left = parseInt(this.element.style.left)+1 + 'px';
        }
      }
      /*
      if(this.acelerado){
        this.element.style.top =parseInt(this.element.style.top)+1 + 'px';    //Aceleração por pixel fazia o boneco ir descendo a div
      }
      */
    }
  class Arvore {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arvore';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class ArbustoEmChamas {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arbusto';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }
  class Rocha {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'rocha';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class TocoDeArvore {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'toco';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class ArvoreGrande {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arvoreGrande';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Cachorro {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'cachorro';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  
  function run() {
    const random = Math.random() * 100;
    console.log("vidas",vidas);
    if (random <= PROB_ARVORE && random >PROB_ARBUSTO) {
      const arvore = new Arvore();
      //arvores.push(obstacle);
      obstacles.push(arvore);
    }
      
    if(random <= PROB_ARBUSTO && random > PROB_ROCHA) {
        const obstacle = new ArbustoEmChamas();
        //arbustos.push(obstacle);
        obstacles.push(obstacle);
    }

    if(random <= PROB_ROCHA && random > PROB_TOCO) {
      const obstacle = new Rocha();
      //rochas.push(obstacle);
      obstacles.push(obstacle);
    }
    if(random <= PROB_TOCO && random > PROB_CACHORRO) {
      const obstacle = new TocoDeArvore();
      //tocos.push(obstacle);
      obstacles.push(obstacle);
    }

    if(random <= PROB_CACHORRO && random > PROB_ARVORE_GRANDE) {
      const obstacle = new Cachorro();
      //cachorro.push(obstacle);
      obstacles.push(obstacle);
    }

    if(random <= PROB_ARVORE_GRANDE) {
      const obstacle = new ArvoreGrande();
      //arvoreGrandes.push(obstacle);
      obstacles.push(obstacle);
    }
    
    obstacles.forEach(a => {
      a.element.style.top = parseInt(a.element.style.top)-1 + 'px';
    })
    
    skier.andar();
  }
  init();

})()