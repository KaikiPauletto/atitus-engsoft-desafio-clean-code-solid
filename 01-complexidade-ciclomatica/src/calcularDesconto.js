
const regrasDesconto = [
  {
    tipo: 'premium',
    condicao: (valor) => valor > 1000,
    desconto: (cliente) => cliente.anosCadastro > 5 ? 0.20 : 0.15
  },
  {
    tipo: 'premium',
    condicao: (valor) => valor > 500,
    desconto: () => 0.10
  },
  {
    tipo: 'premium',
    condicao: () => true,
    desconto: () => 0.05
  },
  {
    tipo: 'gold',
    condicao: (valor) => valor > 1000,
    desconto: () => 0.10
  },
  {
    tipo: 'gold',
    condicao: () => true,
    desconto: () => 0.02
  }
];

function calcularDesconto(cliente, valor) {
  const regra = regrasDesconto.find(regra =>
    regra.tipo === cliente.tipo && regra.condicao(valor)
  );

  if (!regra) {
    return 0;
  }

  return valor * regra.desconto(cliente);
}

