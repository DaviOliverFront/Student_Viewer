const paginas = {
  inicio: `
    <h1>Olá,mundo!</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quibusdam autem at harum eligendi omnis eos adipisci qui. Culpa praesentium corporis dolores delectus assumenda placeat impedit, suscipit minus provident velit.</p>
  `,
  turmas: `
  <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
    <h1 class="mb-0">Minhas Turmas</h1>
    <button class="btn btn-primary" id="novaTurma">
      <i class="bi bi-plus-circle-fill me-1"></i> Nova turma
    </button>
  </div>

  <div class="row g-3" id="listaTurmas">
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">3º Ano A</h5>
            <span class="badge bg-primary">Manhã</span>
          </div>
          <p class="card-text text-muted mb-1"><i class="bi bi-people-fill me-1"></i>28 alunos</p>
          <p class="card-text text-muted mb-3"><i class="bi bi-book-fill me-1"></i>Matemática</p>
          <button class="btn btn-outline-primary btn-sm w-100" data-turma="3a">Ver turma</button>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">3º Ano B</h5>
            <span class="badge bg-primary">Manhã</span>
          </div>
          <p class="card-text text-muted mb-1"><i class="bi bi-people-fill me-1"></i>25 alunos</p>
          <p class="card-text text-muted mb-3"><i class="bi bi-book-fill me-1"></i>Matemática</p>
          <button class="btn btn-outline-primary btn-sm w-100" data-turma="3b">Ver turma</button>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">2º Ano C</h5>
            <span class="badge bg-secondary">Tarde</span>
          </div>
          <p class="card-text text-muted mb-1"><i class="bi bi-people-fill me-1"></i>30 alunos</p>
          <p class="card-text text-muted mb-3"><i class="bi bi-book-fill me-1"></i>Matemática</p>
          <button class="btn btn-outline-primary btn-sm w-100" data-turma="2c">Ver turma</button>
        </div>
      </div>
    </div>
  </div>
`,
  alunos: `
  <h1 class="mb-4">Meus Alunos</h1>

  <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
    <div class="input-group" style="max-width: 320px;">
      <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
      <input type="text" class="form-control" id="buscaAluno" placeholder="Buscar aluno...">
    </div>
    <button class="btn btn-primary">
      <i class="bi bi-person-plus-fill me-1"></i> Novo aluno
    </button>
  </div>

  <div class="table-responsive">
    <table class="table table-hover align-middle" id="tabelaAlunos">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Turma</th>
          <th>E-mail</th>
          <th>Frequência</th>
          <th class="text-end">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ana Beatriz Souza</td>
          <td>3º Ano A</td>
          <td>ana.souza@email.com</td>
          <td><span class="badge bg-success">96%</span></td>
          <td class="text-end">
            <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-eye"></i></button>
            <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil"></i></button>
          </td>
        </tr>
        <tr>
          <td>Carlos Eduardo Lima</td>
          <td>3º Ano A</td>
          <td>carlos.lima@email.com</td>
          <td><span class="badge bg-warning text-dark">78%</span></td>
          <td class="text-end">
            <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-eye"></i></button>
            <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil"></i></button>
          </td>
        </tr>
        <tr>
          <td>Fernanda Costa</td>
          <td>3º Ano B</td>
          <td>fernanda.costa@email.com</td>
          <td><span class="badge bg-danger">62%</span></td>
          <td class="text-end">
            <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-eye"></i></button>
            <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`,
  frequencia: `
  <h1 class="mb-4">Frequência</h1>

  <div class="row g-2 mb-4 align-items-end">
    <div class="col-md-4">
      <label for="turmaFreq" class="form-label">Turma</label>
      <select class="form-select" id="turmaFreq">
        <option value="3a">3º Ano A</option>
        <option value="3b">3º Ano B</option>
        <option value="2c">2º Ano C</option>
      </select>
    </div>
    <div class="col-md-3">
      <label for="dataFreq" class="form-label">Data</label>
      <input type="date" class="form-control" id="dataFreq">
    </div>
    <div class="col-md-3">
      <button class="btn btn-primary w-100" id="salvarFrequencia">
        <i class="bi bi-check-circle-fill me-1"></i> Salvar
      </button>
    </div>
  </div>

  <ul class="list-group" id="listaFrequencia">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Ana Beatriz Souza
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-sm btn-outline-success btn-presenca active" data-aluno="ana">Presente</button>
        <button type="button" class="btn btn-sm btn-outline-danger btn-falta" data-aluno="ana">Falta</button>
      </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Carlos Eduardo Lima
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-sm btn-outline-success btn-presenca active" data-aluno="carlos">Presente</button>
        <button type="button" class="btn btn-sm btn-outline-danger btn-falta" data-aluno="carlos">Falta</button>
      </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Fernanda Costa
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-sm btn-outline-success btn-presenca active" data-aluno="fernanda">Presente</button>
        <button type="button" class="btn btn-sm btn-outline-danger btn-falta" data-aluno="fernanda">Falta</button>
      </div>
    </li>
  </ul>
`,
  lembretes: `
  <h1 class="mb-4">Lembretes</h1>

  <ul class="nav nav-tabs mb-4" id="tabsLembretes" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="tab-pessoais" data-bs-toggle="tab" data-bs-target="#painelPessoais" type="button" role="tab">
        <i class="bi bi-person-fill me-1"></i> Meus Lembretes
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="tab-turmas" data-bs-toggle="tab" data-bs-target="#painelTurmas" type="button" role="tab">
        <i class="bi bi-people-fill me-1"></i> Enviar para Turmas
      </button>
    </li>
  </ul>

  <div class="tab-content" id="conteudoTabsLembretes">

    <div class="tab-pane fade show active" id="painelPessoais" role="tabpanel">
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="novoLembrete" placeholder="Escreva um novo lembrete...">
        <select class="form-select" id="prioridadeLembrete" style="max-width: 140px;">
          <option value="baixa">Baixa</option>
          <option value="media" selected>Média</option>
          <option value="alta">Alta</option>
        </select>
        <button class="btn btn-primary" id="addLembrete">
          <i class="bi bi-plus-lg me-1"></i> Adicionar
        </button>
      </div>

      <ul class="list-group" id="listaLembretes">
        <li class="list-group-item d-flex justify-content-between align-items-center" data-prioridade="alta">
          <div class="form-check">
            <input class="form-check-input check-lembrete" type="checkbox" id="lembrete1">
            <label class="form-check-label" for="lembrete1">
              Corrigir provas do 3º Ano A
            </label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-danger">Alta</span>
            <button class="btn btn-sm btn-outline-secondary btn-remover"><i class="bi bi-trash"></i></button>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center" data-prioridade="media">
          <div class="form-check">
            <input class="form-check-input check-lembrete" type="checkbox" id="lembrete2">
            <label class="form-check-label" for="lembrete2">
              Enviar boletim para os pais
            </label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-warning text-dark">Média</span>
            <button class="btn btn-sm btn-outline-secondary btn-remover"><i class="bi bi-trash"></i></button>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center" data-prioridade="baixa">
          <div class="form-check">
            <input class="form-check-input check-lembrete" type="checkbox" id="lembrete3">
            <label class="form-check-label" for="lembrete3">
              Organizar material da próxima aula
            </label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-secondary">Baixa</span>
            <button class="btn btn-sm btn-outline-secondary btn-remover"><i class="bi bi-trash"></i></button>
          </div>
        </li>
      </ul>
    </div>

    <div class="tab-pane fade" id="painelTurmas" role="tabpanel">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title mb-3">Novo lembrete para turma</h5>

          <div class="mb-3">
            <label class="form-label">Selecione as turmas</label>
            <div class="d-flex flex-wrap gap-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3a" id="turmaCheck3a">
                <label class="form-check-label" for="turmaCheck3a">3º Ano A</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3b" id="turmaCheck3b">
                <label class="form-check-label" for="turmaCheck3b">3º Ano B</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="2c" id="turmaCheck2c">
                <label class="form-check-label" for="turmaCheck2c">2º Ano C</label>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="textoLembreteTurma" class="form-label">Mensagem</label>
            <textarea class="form-control" id="textoLembreteTurma" rows="2" placeholder="Ex: Trazer material para a aula prática de amanhã"></textarea>
          </div>

          <button class="btn btn-primary" id="enviarLembreteTurma">
            <i class="bi bi-send-fill me-1"></i> Enviar lembrete
          </button>
        </div>
      </div>

      <h6 class="mb-3">Lembretes enviados</h6>
      <ul class="list-group" id="listaLembretesTurma">
        <li class="list-group-item">
          <div class="d-flex justify-content-between">
            <span class="fw-medium">3º Ano A</span>
            <small class="text-muted">Hoje</small>
          </div>
          <p class="mb-0 text-muted small">Trazer calculadora para a prova de sexta-feira.</p>
        </li>
      </ul>
    </div>

  </div>
`,
  config: `
    <h1>Configurações</h1>
    <p>Conteúdo de configurações aqui.</p>
  `,
  sair: `
    <h1>Saindo...</h1>
    <p>Você está saindo do sistema.</p>
  `
};

const conteudo = document.getElementById('conteudo');
const links = document.querySelectorAll('.nav-link[data-page]');

function carregarPagina(pagina, linkClicado) {
  conteudo.innerHTML = paginas[pagina];

  links.forEach(link => link.classList.remove('active'));
  linkClicado.classList.add('active');
}

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const pagina = link.dataset.page;
    carregarPagina(pagina, link);
  });
});

function carregarPagina(pagina, linkClicado) {
  conteudo.innerHTML = paginas[pagina];

  links.forEach(link => link.classList.remove('active'));
  linkClicado.classList.add('active');

  if (pagina === 'alunos') {
    ativarBuscaAlunos();
  }

  if (pagina === 'turmas') {
    ativarBotoesTurma();
  }
}

function ativarBotoesTurma() {
  const botoes = document.querySelectorAll('[data-turma]');
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const turma = btn.dataset.turma;
      console.log('Turma selecionada:', turma);
      // Aqui futuramente você pode filtrar a página "alunos" por essa turma
    });
  });
}

function carregarPagina(pagina, linkClicado) {
  conteudo.innerHTML = paginas[pagina];

  links.forEach(link => link.classList.remove('active'));
  linkClicado.classList.add('active');

  if (pagina === 'alunos') {
    ativarBuscaAlunos();
  }

  if (pagina === 'turmas') {
    ativarBotoesTurma();
  }

  if (pagina === 'frequencia') {
    ativarFrequencia();
  }
}

function ativarFrequencia() {
  const dataInput = document.getElementById('dataFreq');
  dataInput.valueAsDate = new Date();

  const itens = document.querySelectorAll('#listaFrequencia li');

  itens.forEach(item => {
    const btnPresenca = item.querySelector('.btn-presenca');
    const btnFalta = item.querySelector('.btn-falta');

    btnPresenca.addEventListener('click', () => {
      btnPresenca.classList.add('active');
      btnFalta.classList.remove('active');
    });

    btnFalta.addEventListener('click', () => {
      btnFalta.classList.add('active');
      btnPresenca.classList.remove('active');
    });
  });

  document.getElementById('salvarFrequencia').addEventListener('click', () => {
    const resultado = [];

    itens.forEach(item => {
      const nome = item.childNodes[0].textContent.trim();
      const presente = item.querySelector('.btn-presenca').classList.contains('active');
      resultado.push({ nome, presente });
    });

    console.log('Frequência do dia:', resultado);
    alert('Frequência salva! (veja o console para os dados)');
  });
}

function carregarPagina(pagina, linkClicado) {
  conteudo.innerHTML = paginas[pagina];

  links.forEach(link => link.classList.remove('active'));
  linkClicado.classList.add('active');

  if (pagina === 'alunos') {
    ativarBuscaAlunos();
  }

  if (pagina === 'turmas') {
    ativarBotoesTurma();
  }

  if (pagina === 'frequencia') {
    ativarFrequencia();
  }

  if (pagina === 'lembretes') {
    ativarLembretes();
  }
}

function ativarLembretes() {
  const lista = document.getElementById('listaLembretes');
  const input = document.getElementById('novoLembrete');
  const selectPrioridade = document.getElementById('prioridadeLembrete');
  const btnAdd = document.getElementById('addLembrete');

  const badges = {
    alta: 'bg-danger',
    media: 'bg-warning text-dark',
    baixa: 'bg-secondary'
  };

  const rotulos = {
    alta: 'Alta',
    media: 'Média',
    baixa: 'Baixa'
  };

  function religarEventosItem(item) {
    item.querySelector('.check-lembrete').addEventListener('change', (e) => {
      item.querySelector('label').classList.toggle('text-decoration-line-through', e.target.checked);
      item.querySelector('label').classList.toggle('text-muted', e.target.checked);
    });

    item.querySelector('.btn-remover').addEventListener('click', () => {
      item.remove();
    });
  }

  lista.querySelectorAll('li').forEach(religarEventosItem);

  btnAdd.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;

    const prioridade = selectPrioridade.value;
    const id = 'lembrete_' + Date.now();

    const novoItem = document.createElement('li');
    novoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    novoItem.dataset.prioridade = prioridade;
    novoItem.innerHTML = `
      <div class="form-check">
        <input class="form-check-input check-lembrete" type="checkbox" id="${id}">
        <label class="form-check-label" for="${id}">${texto}</label>
      </div>
      <div class="d-flex align-items-center gap-2">
        <span class="badge ${badges[prioridade]}">${rotulos[prioridade]}</span>
        <button class="btn btn-sm btn-outline-secondary btn-remover"><i class="bi bi-trash"></i></button>
      </div>
    `;

    lista.appendChild(novoItem);
    religarEventosItem(novoItem);
    input.value = '';
  });
}

function ativarBotoesTurma() {
  const botoes = document.querySelectorAll('[data-turma]');
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const turma = btn.dataset.turma;
      console.log('Turma selecionada:', turma);
    });
  });

  document.getElementById('novaTurma').addEventListener('click', () => {
    alert('Aqui você abriria um formulário ou modal para cadastrar uma nova turma.');
  });
}

function ativarLembretes() {
  ativarLembretesPessoais();
  ativarLembretesTurma();
}

function ativarLembretesPessoais() {
  const lista = document.getElementById('listaLembretes');
  const input = document.getElementById('novoLembrete');
  const selectPrioridade = document.getElementById('prioridadeLembrete');
  const btnAdd = document.getElementById('addLembrete');

  const badges = {
    alta: 'bg-danger',
    media: 'bg-warning text-dark',
    baixa: 'bg-secondary'
  };

  const rotulos = {
    alta: 'Alta',
    media: 'Média',
    baixa: 'Baixa'
  };

  function religarEventosItem(item) {
    item.querySelector('.check-lembrete').addEventListener('change', (e) => {
      item.querySelector('label').classList.toggle('text-decoration-line-through', e.target.checked);
      item.querySelector('label').classList.toggle('text-muted', e.target.checked);
    });

    item.querySelector('.btn-remover').addEventListener('click', () => {
      item.remove();
    });
  }

  lista.querySelectorAll('li').forEach(religarEventosItem);

  btnAdd.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;

    const prioridade = selectPrioridade.value;
    const id = 'lembrete_' + Date.now();

    const novoItem = document.createElement('li');
    novoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    novoItem.dataset.prioridade = prioridade;
    novoItem.innerHTML = `
      <div class="form-check">
        <input class="form-check-input check-lembrete" type="checkbox" id="${id}">
        <label class="form-check-label" for="${id}">${texto}</label>
      </div>
      <div class="d-flex align-items-center gap-2">
        <span class="badge ${badges[prioridade]}">${rotulos[prioridade]}</span>
        <button class="btn btn-sm btn-outline-secondary btn-remover"><i class="bi bi-trash"></i></button>
      </div>
    `;

    lista.appendChild(novoItem);
    religarEventosItem(novoItem);
    input.value = '';
  });
}

function ativarLembretesTurma() {
  const btnEnviar = document.getElementById('enviarLembreteTurma');
  const textoInput = document.getElementById('textoLembreteTurma');
  const lista = document.getElementById('listaLembretesTurma');

  const nomesTurmas = {
    '3a': '3º Ano A',
    '3b': '3º Ano B',
    '2c': '2º Ano C'
  };

  btnEnviar.addEventListener('click', () => {
    const texto = textoInput.value.trim();
    const checksMarcados = document.querySelectorAll('#painelTurmas input[type="checkbox"]:checked');

    if (!texto || checksMarcados.length === 0) {
      alert('Escreva a mensagem e selecione pelo menos uma turma.');
      return;
    }

    checksMarcados.forEach(check => {
      const nomeTurma = nomesTurmas[check.value];

      const novoItem = document.createElement('li');
      novoItem.className = 'list-group-item';
      novoItem.innerHTML = `
        <div class="d-flex justify-content-between">
          <span class="fw-medium">${nomeTurma}</span>
          <small class="text-muted">Agora</small>
        </div>
        <p class="mb-0 text-muted small">${texto}</p>
      `;

      lista.prepend(novoItem);
      check.checked = false;
    });

    textoInput.value = '';
  });
}

function ativarLembretes() {
  ativarLembretesPessoais();
  ativarLembretesTurma();
}

function ativarLembretesPessoais() {
  const lista = document.getElementById('listaLembretes');
  const input = document.getElementById('novoLembrete');
  const selectPrioridade = document.getElementById('prioridadeLembrete');
  const btnAdd = document.getElementById('addLembrete');

  const badges = {
    alta: 'bg-danger',
    media: 'bg-warning text-dark',
    baixa: 'bg-secondary'
  };

  const rotulos = {
    alta: 'Alta',
    media: 'Média',
    baixa: 'Baixa'
  };

  function religarEventosItem(item) {
    item.querySelector('.check-lembrete').addEventListener('change', (e) => {
      item.querySelector('label').classList.toggle('text-decoration-line-through', e.target.checked);
      item.querySelector('label').classList.toggle('text-muted', e.target.checked);
    });

    item.querySelector('.btn-remover').addEventListener('click', () => {
      item.remove();
    });
  }

  lista.querySelectorAll('li').forEach(religarEventosItem);

  btnAdd.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;

    const prioridade = selectPrioridade.value;
    const id = 'lembrete_' + Date.now();

    const novoItem = document.createElement('li');
    novoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    novoItem.dataset.prioridade = prioridade;
    novoItem.innerHTML = `
      <div class="form-check">
        <input class="form-check-input check-lembrete" type="checkbox" id="${id}">
        <label class="form-check-label" for="${id}">${texto}</label>
      </div>
      <div class="d-flex align-items-center gap-2">
        <span class="badge ${badges[prioridade]}">${rotulos[prioridade]}</span>
        <button class="btn btn-sm btn-outline-secondary btn-remover"><i class="bi bi-trash"></i></button>
      </div>
    `;

    lista.appendChild(novoItem);
    religarEventosItem(novoItem);
    input.value = '';
  });
}

function ativarLembretesTurma() {
  const btnEnviar = document.getElementById('enviarLembreteTurma');
  const textoInput = document.getElementById('textoLembreteTurma');
  const lista = document.getElementById('listaLembretesTurma');

  const nomesTurmas = {
    '3a': '3º Ano A',
    '3b': '3º Ano B',
    '2c': '2º Ano C'
  };

  btnEnviar.addEventListener('click', () => {
    const texto = textoInput.value.trim();
    const checksMarcados = document.querySelectorAll('#painelTurmas input[type="checkbox"]:checked');

    if (!texto || checksMarcados.length === 0) {
      alert('Escreva a mensagem e selecione pelo menos uma turma.');
      return;
    }

    checksMarcados.forEach(check => {
      const nomeTurma = nomesTurmas[check.value];

      const novoItem = document.createElement('li');
      novoItem.className = 'list-group-item';
      novoItem.innerHTML = `
        <div class="d-flex justify-content-between">
          <span class="fw-medium">${nomeTurma}</span>
          <small class="text-muted">Agora</small>
        </div>
        <p class="mb-0 text-muted small">${texto}</p>
      `;

      lista.prepend(novoItem);
      check.checked = false;
    });

    textoInput.value = '';
  });
}