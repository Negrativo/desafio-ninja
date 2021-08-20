# Descrição do Problema
Temos um problema grande com reuniões, elas são muitas e temos poucas salas disponíveis.
Precisamos de uma agenda para nos mantermos sincronizados e esse será seu desafio!
Temos 4 salas e podemos usá-las somente em horário comercial, de segunda a sexta das 09:00 até as 18:00.
Sua tarefa será de criar uma API REST que crie, edite, mostre e delete o agendamento dos horários para que os usuários não se percam ao agendar as salas.

# Notas
- O teste deve ser escrito utilizando Ruby e Ruby on Rails
- Utilize as gems que achar necessário
- Não faça squash dos seus commits, gostamos de acompanhar a evolução gradual da aplicação via commits.
- Estamos avaliando coisas como design, higiene do código, confiabilidade e boas práticas
- Esperamos testes automatizados. 
- A aplicação deverá subir com docker-compose
- Crie um README.md descrevendo a sua solução e as issues caso houver
- O desafio pode ser entregue abrindo um pull request ou fazendo um fork do repositório 

# Solução proposta

API REST de agendamento em node.js
Contem a seguintes rotinas:
Inclusão de agendamento, Consulta de agendamento único, listagem de agendamentos cadastrados, alteração de agendamento existente e exclusão de agendamento.
Foram criadas validações sobre data, para que somente seja permitido o agendamento em dias comerciais(Seg - Sex), como também foram inclusos validações para horários, sendo permitido somente agendamento em horário comercia(08:00 - 18:00).
Há validações de dados utilizados, para que somente seja possível utilizar as rotinas com dados consistentes:
Data -> DD/MM/AAA     e    Horário -> HH:MM
Há também validação sobre utilização de salas, para que somente seja possível realizar o agendamento nas 4 salas disponíveis e caso já não exista agendamento para o horário solicitado.
