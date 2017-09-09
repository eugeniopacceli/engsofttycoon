var pnomes = [ "Breno", "Miguel", "Davi", "Arthur", "Pedro", "Gabriel",
    "Bernardo", "Lucas", "Matheus", "Rafael", "Heitor", "Enzo", "Guilherme",
    "Nicolas", "Lorenzo", "Gustavo", "Felipe", "Samuel", "Daniel", "Vitor",
    "Leonardo", "Henrique", "Eugenio", "Marcos", "Dourvial", "Sophia", "Alice",
    "Julia", "Isabella", "Manuela", "Laura", "Luiza", "Valentina", "Giovanna",
    "Maria Eduarda", "Helena", "Beatriz", "Maria Luiza", "Lara", "Mariana",
    "Nicole", "Rafaela", "Heloísa", "Isadora", "Lívia" ];

var unomes = [ "Alves", "Monteiro", "Novaes", "Mendes", "Barros", "Freitas",
    "Barbosa", "Pinto", "Moura", "Cavalcanti", "Dias", "Castro", "Campos",
    "Cardoso", "Silva", "Souza", "Costa", "Santos", "Oliveira", "Pereira",
    "Rodrigues", "Almeida", "Nascimento", "Lima", "Araújo", "Fernandes",
    "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Rezende", "Sales",
    "Diniz", "Gabrich", "Pimentel", "Pacceli" ];

class Empregado {
  constructor() {
    var i = irandom(0, pnomes.length),
        j = irandom(0, unomes.length);
    this.pnome = pnomes[i];
    this.unome = unomes[j];
  }

  get nome() {
    return this.pnome + " " + this.unome;
  }
}

