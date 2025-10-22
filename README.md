# 🧩 BFD_JS_OO — Programação Orientada a Objetos em JavaScript

## 📘 Descrição

O projeto **BFD_JS_OO** reúne exemplos práticos e organizados de **Programação Orientada a Objetos (POO)** aplicados em **JavaScript Moderno (ES6+)**, com o objetivo de auxiliar estudantes e professores no aprendizado de conceitos fundamentais de **objetos, herança, modularização e persistência de dados**.

O repositório está estruturado para demonstrar, de forma progressiva, desde variáveis básicas e funções até a criação de **classes, módulos e DAOs (Data Access Objects)** que simulam um pequeno sistema de cadastro de pessoas físicas e jurídicas.

---

## 🧱 Estrutura do Projeto

BFD_JS_OO-main/
│
├── arrays.js # Manipulação de arrays
├── declvar.js # Declaração de variáveis (var, let, const)
├── funcbasic.js # Funções básicas
├── lacos.js # Estruturas de repetição
├── lacosarray.js # Laços aplicados a arrays
├── tipovar.js # Tipos de variáveis
├── usamodulo.js # Exemplo de uso de módulos JS
│
├── biblioteca/
│ └── definemodulo.js # Criação de módulo personalizado
│
├── objetos/
│ ├── Pessoa.js # Classe base de Pessoa
│ ├── usaPessoa.js # Exemplo de instanciação e uso da classe Pessoa
│ ├── usaPF.js # Testes com Pessoa Física (PF)
│ ├── usaPJDAO.mjs # Demonstração de DAO com Pessoa Jurídica (PJ)
│ ├── escola/
│ │ ├── Aluno.js
│ │ └── AlunoBase.js
│ └── pessoas/
│ ├── Aluno.js
│ ├── Endereco.js
│ ├── PF.js
│ ├── PJ.js
│ ├── Pessoa.js
│ ├── Telefone.js
│ ├── Titulo.js
│ ├── DAOs/
│ │ ├── PJDAO.mjs
│ │ └── localStorage.mjs
│ ├── ENDERECO/
│ │ ├── Endereco.mjs
│ │ └── usaEndereco.mjs
│ └── IE/
│ ├── IE.mjs
│ ├── IEclss.js
│ ├── IEfunc.js
│ ├── IEjson.js
│ └── usaIE.mjs
│
├── plantUML/
│ └── uml1.txt # Diagrama UML dos relacionamentos
│
└── package.json # Dependências do projeto

---

## 💡 Conceitos Abordados

| Conceito | Descrição |
|-----------|------------|
| **Classes e Objetos** | Estruturação de entidades como Pessoa, PF, PJ, Aluno etc. |
| **Herança** | Extensão de classes (ex: `Pessoa` → `PF` e `PJ`). |
| **Modularização (ES Modules)** | Separação de código em arquivos reutilizáveis `.mjs`. |
| **DAO (Data Access Object)** | Simulação de persistência de dados em `localStorage`. |
| **JSON e Manipulação de Dados** | Criação, leitura e escrita de dados simulando armazenamento local. |
| **Diagramas UML** | Representação visual das relações entre classes. |

---

## 🧩 Tecnologias Utilizadas

- **Node.js** (para execução dos módulos)
- **JavaScript (ES6+)**
- **PlantUML** (para diagramas de classe)
- **localStorage** (simulação de persistência)

---

## ▶️ Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seuusuario/BFD_JS_OO.git
   cd BFD_JS_OO-main

## 🧭 Diagrama UML

O projeto inclui o arquivo plantUML/uml1.txt que pode ser visualizado via PlantUML
:

@startuml
Pessoa <|-- PF
Pessoa <|-- PJ
PF --> Titulo
PJ --> PJDAO
Pessoa --> Endereco
Pessoa --> Telefone
@enduml

## 👨‍🏫 Finalidade Didática

Este projeto foi criado para fins educacionais, integrando exemplos usados em disciplinas de Lógica de Programação, POO, Estrutura de Dados e Desenvolvimento de Sistemas, permitindo que os alunos visualizem como os conceitos se conectam no código real.

## 📄 Licença

Este repositório está licenciado sob a MIT License
.

## ✍️ Autor

Prof. Dr.. Leandro Vaguetti
📘 Instituto Federal de Brasília — IFB
📫 Contato: leandro.vaguetti@ifb.edu.br

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/vaguettibfd/BFD_JS_OO)
