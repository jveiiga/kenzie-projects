class Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo) {
        this.idCliente = idCliente
        this.tipoCliente = tipoCliente
        this.dataCriacao = dataCriacao
        this.codBanco = codBanco
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
        this.historico = []
    }
}

class PessoaFisica extends Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, nome, cpf, email, telefone, dataDeNascimento) {
        super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo)
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.telefone = telefone
        this.dataDeNascimento = dataDeNascimento
    }
}

class PessoaJuridica extends Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, nomeFantasia, cnpj, email, telefone, dataDaFundacao) {
        super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo)
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.email = email
        this.telefone = telefone
        this.dataDaFundacao = dataDaFundacao
    }
}

class Transacao {

    static transferencia(contaOrigem, contaDestino, idTransacao, dataDeTransacao, valorDaTransferencia) {
        if (contaOrigem.saldo >= valorDaTransferencia) {

            contaOrigem.historico.push({
                idTransacao: idTransacao,
                dataDeTransacao: dataDeTransacao,
                valorDaTransferencia: valorDaTransferencia,
                tipo: "pagamento",
            })
            contaDestino.historico.push({
                idTransacao: idTransacao,
                dataDeTransacao: dataDeTransacao,
                valorDaTransferencia: valorDaTransferencia,
                tipo: "recebimento",
            })
            contaOrigem.saldo -= valorDaTransferencia
            contaDestino.saldo += valorDaTransferencia
            return { mensagem: "Transferência realizada com sucesso!" }
        }
        return { mensagem: "Saldo insuficiente para transferência!" }
    }

    static deposito(contaDestino, idDeposito, dataDoDeposito, valorDoDeposito) {

        contaDestino.saldo += valorDoDeposito

        contaDestino.historico.push({
            idDeposito: idDeposito,
            dataDoDeposito: dataDoDeposito,
            valorDoDeposito: valorDoDeposito,
            tipo: "recebimento",
        })
        return { mensagem: "Depósito realizado com sucesso!" }
    }

    static pagamentoSalario(contaOrigem, contaDestino, idPagamento, dataDoPagamento, valorDoSalario) {
        if (contaOrigem instanceof PessoaFisica) {
            if (valorDoSalario > 1000) {
                return { mensagem: "Seu limite máximo para este tipo de operação é de 1000. Entre em contato com o banco." }
            }
        }
        
        if (contaOrigem.saldo < valorDoSalario) {
            return { mensagem: "Saldo insuficiente para realizar o pagamento!" }
        }

        contaDestino.saldo += valorDoSalario
        contaOrigem.saldo  -= valorDoSalario

        contaDestino.historico.push({
            idPagamento: idPagamento,
            dataDoPagamento: dataDoPagamento,
            valorDoSalario: valorDoSalario,
            tipo: "recebimento",
        })

        contaOrigem.historico.push({
            idPagamento: idPagamento,
            dataDoPagamento: dataDoPagamento,
            valorDoSalario: valorDoSalario,
            tipo: "pagamento",
        })

        return { mensagem: "Pagamento realizado com sucesso!" }
    }
}

const testes = () => {
    const Lennon = new PessoaJuridica("01", "Vip", "16/05/2022", 156, 2798, 987654321, 1000, "Lennon", "1011121314", "lennon@email.com.br", 1234567890, "16/05/2022");

    const Joao = new PessoaFisica("02", "Comum", "16/03/2022", 156, 2798, 91919292, 100, "João", "2345678901", "joao@kenzie.com.br", "90919293", "01/01/2019");

    const Maria = new PessoaFisica("03", "Vip", "16/03/2022", 156, 2798, 10121416, 5000, "Maria", "3456789012", "maria@kenzie.com.br", "90919293", "01/01/2019");
    console.log(Lennon)
    console.log(Lennon.saldo); // Deve retornar 1000
    console.log(Lennon.nomeFantasia); // Deve retornar "Lennon"
    console.log(Lennon.historico); // Deve retornar []
    console.log(Joao.nome); // Deve retornar "João"
    console.log(Joao.saldo); // Deve retornar 100
    console.log(Maria.idCliente); // Deve retornar "03"
    console.log(Maria.tipoCliente); // Deve retornar "Vip"

    console.log(Transacao.transferencia(Joao, Maria, 1, "25/07/2022", 200)); // Deve retornar {mensagem: "Saldo insuficiente para transferência!"}

    console.log(Transacao.transferencia(Lennon, Joao, 2, "20/07/2022", 500)); // Deve retornar {mensagem: "Transferência realizada com sucesso!"}

    console.log(Lennon.saldo); // Deve retornar 500
    console.log(Joao.saldo); // Deve retornar 600

    console.log(Transacao.deposito(Lennon, 3, "02/07/2022", 650)); // Deve retornar {mensagem: "Depósito realizado com sucesso!"}

    console.log(Lennon.historico[1]); // Deve retornar {idDeposito: 3, dataDoDeposito: "02/07/2022", valorDoDeposito: 650, tipo: "recebimento"}

    console.log(Lennon.saldo); // Deve retornar 1150

    console.log(Transacao.pagamentoSalario(Maria, Joao, 4, "22/07/2022", 1100)); // Deve retornar {mensagem: "Seu limite máximo para este tipo de operação é de 1000. Entre em contato com o banco."}

    console.log(Transacao.pagamentoSalario(Joao, Maria, 5, "23/07/2022", 700)); // Deve retornar {mensagem: "Saldo insuficiente para realizar o pagamento!"}

    console.log(Transacao.pagamentoSalario(Maria, Joao, 6, "22/12/2022", 900)); // Deve retornar {mensagem: "Pagamento realizado com sucesso!"}

    console.log(Lennon.historico); // Deve retornar [{idTransacao: 2, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "pagamento"}, {idDeposito: 3, dataDoDeposito: '02/07/2022', valorDoDeposito: 650, tipo: 'recebimento'}]

    console.log(Joao.historico); // Deve retornar [{idTransacao: 2, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "recebimento"}, {idPagamento: 6, dataDoPagamento: '22/12/2022', valorDoSalario: 900, tipo: 'recebimento'}]

    console.log(Maria.saldo); // Deve retornar 4100
    console.log(Maria.historico); // Deve retornar [{idPagamento: 6, dataDoPagamento: "22/12/2022", valorDoSalario: 900, tipo: "pagamento"}]

    console.log(Joao.historico[1]); // Deve retornar {idPagamento: 6, dataDoPagamento: "22/12/2022", valorDoSalario: 900, tipo: "recebimento"}
}

testes()

