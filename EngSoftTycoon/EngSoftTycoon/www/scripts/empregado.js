var pnomes = ["Breno", "Miguel", "Davi", "Arthur", "Pedro", "Gabriel",
    "Bernardo", "Lucas", "Matheus", "Rafael", "Heitor", "Enzo", "Guilherme",
    "Nicolas", "Lorenzo", "Gustavo", "Felipe", "Samuel", "Daniel", "Vitor",
    "Leonardo", "Henrique", "Eugenio", "Marcos", "Dourvial", "Sophia", "Alice",
    "Julia", "Isabella", "Manuela", "Laura", "Luiza", "Valentina", "Giovanna",
    "Maria Eduarda", "Helena", "Beatriz", "Maria Luiza", "Lara", "Mariana",
    "Nicole", "Rafaela", "Heloísa", "Isadora", "Lívia", "Rodolfo"];

var unomes = ["Alves", "Monteiro", "Novaes", "Mendes", "Barros", "Freitas",
    "Barbosa", "Pinto", "Moura", "Cavalcanti", "Dias", "Castro", "Campos",
    "Cardoso", "Silva", "Souza", "Costa", "Santos", "Oliveira", "Pereira",
    "Rodrigues", "Almeida", "Nascimento", "Lima", "Araújo", "Fernandes",
    "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Rezende", "Sales",
    "Diniz", "Gabrich", "Pimentel", "Pacceli"];

var areas = [
    { name: "Gerenciamento de Requisitos", abrev: "REQM" },
    { name: "Planejamento de Projeto", abrev: "PP" },
    { name: "Acompanhamento e Controle de Projeto", abrev: "PMC" },
    { name: "Gerenciamento de Acordo com Fornecedor", abrev: "SAM" },
    { name: "Medição e Análise", abrev: "MA" },
    { name: "Garantia da Qualidade de Processo e Produto", abrev: "PPQA" },
    { name: "Gerência de Configuração", abrev: "CM" },
    { name: "Desenvolvedor", abrev: "Dev" },
    { name: "Agile coach", abrev: "Coach" }
];

var globalId = 0;

class Empregado {
    constructor() {
        var i = irandom(0, pnomes.length),
            j = irandom(0, unomes.length);
        this.pnome = pnomes[i];
        this.unome = unomes[j];
        this.skills = this.generateSkills();
        this.salario = this.computeSalary();
        this.id = ++globalId;
    }

    generateSkills() {
        var generated = [];
        for (var a of areas) {
            generated.push(
                {
                    area: a,
                    skill: irandom(0, 10)
                }
            );
        }
        return generated;
    }

    computeSalary() {
        var salary = 2000;
        var sum = 0;
        for (var a of this.skills) {
            sum += a.skill;
        }
        return salary + (Math.pow(sum,2) * 1.5);
    }

    get nome() {
        return this.pnome + " " + this.unome;
    }

    skillsTable(){
        var string = "<ul>";
        for(var a of this.skills){
            string += "<li>" + a.area.abrev + ": " + a.skill + " </li>"
        }
        string += "</ul>";
        return string;
    }

    get html() {
        return '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start" data-id=' + this.id + ' data-toggle="collapse" data-target="#collapse' + this.id + '" aria-expanded="false" aria-controls="collapseExample"> \
			<div class="d-flex w-100"> \
				<h5 class="mb-1">' + this.nome + '</h5> \
              <div class="collapse" id="collapse' + this.id + '">\
                  ' + this.skillsTable() + '\
              </div>\
			</div> \
			<small> R$' + this.salario + ',00</small> \
		</a>';
    }
}