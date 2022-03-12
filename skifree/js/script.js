(function () {

  const FPS = 50;
  const TAMX = 300;
  const TAMY = 400;
  const PROB_ARVORE = 1;
  const PROB_ARBUSTO= 0.8;
  const PROB_ROCHA= 0.6;
  const PROB_TOCO= 0.4;
  const PROB_CACHORRO= 0.3;
  const PROB_ARVORE_GRANDE= 0.2;

  let montanha;
  let skier;

  const obstacles = [];
  
  function init() {
    montanha = new Montanha();
    skier = new Skier();
    setInterval(run, 1000/FPS);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') skier.mudarDirecao(-1)
    else if (e.key === 'ArrowRight') skier.mudarDirecao(+1);
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
    andar() {
      if (this.direcao === 0) this.element.style.left = parseInt(this.element.style.left)-1 + 'px';
      else if (this.direcao === 2) this.element.style.left = parseInt(this.element.style.left)+1 + 'px';
    }
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
    console.log(random);
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
      obstacle.push(obstacle);
    }

    if(random <= PROB_ARVORE_GRANDE) {
      const obstacle = new ArvoreGrande();
      //arvoreGrandes.push(obstacle);
      obstacle.push(obstacle);
    }
    
    obstacles.forEach(a => {
      a.element.style.top = parseInt(a.element.style.top)-1 + 'px';
    })
    
    skier.andar();
  }

  init();

})()