## 🏁 Entrega - Blog M2

- Protocolo HTTP (Utilizado na comunicação cliente servidor)
- Servidores (recebe uma informação JSON através do HTTP processa e devolve um JSON)
- Requisição (faz uma solicitação(request line) e injeta um HTTP de uma possível ação, dizendo o que quer. Exmplo: acessar, consultar,excluir etc... dependendo da solicitação da informação o método utilizado deve converter em um JSON antes do envio)
- headers (O protocolo http passa qual a solicitação que está sendo feita ao acessar o site)
- body (parâmetro do método - Obj JSON)
- Response (Respota da consulta no servidor. Um JSON que deve ser convertido para objeto)
- JSON (linguagem padrão dos Servidores)
- Verbos HTTP (enviam requisições para ações especificas no servidor)
    GET(Busca) - utilizado para consulta. Exemplo: pegar dado, entrar num site, mudar de página. É indepotente, sempre retorna a mesma resposta, e não deve mudar nada.  
    POST(Cria) - utilizado para criação e pesquisa através do seu parâmetro body.
    PUT(Atualiza tudo) - utilizado para atualização("editar" - obrigatoriamente precisa enviar todos os campos da requisição)
    PATCH(Atualiza parcial) - utilizado para atualização("editar" - precisa apenas dos campos necessários).
    DELETE(Remove) - utilizado para deletar.
- API (Sistema que recebe a requisição(resquest), processa, consulta no servidor e retorna(response) as informações de forma organizada e uniforme podendo ser acessada por qualquer línguagem de programação).
- Comunicação Cliente Servidor (resquest e response)
- Onde a informação é mantida no HTTP (headers e body)
- Código de resposta
    200 (OK), requisição atendida com sucesso;  
    201 (CREATED), objeto ou recurso criado com sucesso; 
    204 (NO CONTENT), objeto ou recurso deletado com sucesso 
    400 (BAD REQUEST), ocorreu algum erro na requisição (podems existir inumeras causas);
    404 (NOT FOUND), rota ou coleção não encontrada;
    500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor;
