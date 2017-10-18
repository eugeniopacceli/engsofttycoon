var pnomes = [ "Breno", "Miguel", "Davi", "Arthur", "Pedro", "Gabriel",
    "Bernardo", "Lucas", "Matheus", "Rafael", "Heitor", "Enzo", "Guilherme",
    "Nicolas", "Lorenzo", "Gustavo", "Felipe", "Samuel", "Daniel", "Vitor",
    "Leonardo", "Henrique", "Eugenio", "Marcos", "Dourvial", "Sophia", "Alice",
    "Julia", "Isabella", "Manuela", "Laura", "Luiza", "Valentina", "Giovanna",
    "Maria Eduarda", "Helena", "Beatriz", "Maria Luiza", "Lara", "Mariana",
    "Nicole", "Rafaela", "Heloísa", "Isadora", "Lívia", "Rodolfo" ];

var unomes = [ "Alves", "Monteiro", "Novaes", "Mendes", "Barros", "Freitas",
    "Barbosa", "Pinto", "Moura", "Cavalcanti", "Dias", "Castro", "Campos",
    "Cardoso", "Silva", "Souza", "Costa", "Santos", "Oliveira", "Pereira",
    "Rodrigues", "Almeida", "Nascimento", "Lima", "Araújo", "Fernandes",
    "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Rezende", "Sales",
    "Diniz", "Gabrich", "Pimentel", "Pacceli" ];
	
var utipos = [ "Desenvolvedor", "Artista", "SCRUM Master" ];

var globalId = 0;

class Empregado {
  constructor(t) {
    var i = irandom(0, pnomes.length),
        j = irandom(0, unomes.length);
    this.pnome = pnomes[i];
    this.unome = unomes[j];
	this.tipo = t;
	this.salario = 0;
	this.id = ++globalId;
  }

  get nome() {
    return this.pnome + " " + this.unome;
  }
  
  get html(){
	  return '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start" data-id=' + this.id + '> \
			<div class="d-flex w-100 justify-content-between"> \
				<h5 class="mb-1">' + this.nome + '</h5> \
				<small class="text-muted">' + this.tipo + '</small> \
			</div> \
			<small> R$' + this.salario + ',00</small> \
		</a>';
  }
}