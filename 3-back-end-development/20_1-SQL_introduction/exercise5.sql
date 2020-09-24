-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution' AS phrase;

-- Escreva uma query para exibir três números em três colunas.
SELECT 1, 2, 3;

-- Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS sum;

-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 10 * 15;

-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;

-- Escreva uma query para exibir o nome e as horas de cada projeto.
SELECT Name, Hours FROM Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade horas.
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project FROM AssignedTo;

-- Escreva uma query para exibir todos os cientistas cujos projetos são Ast3.
SELECT * FROM AssignedTo WHERE Project = 'Ast3';

-- Escreva uma query para exibir todas as informações dos projetos 5 projetos com a menor quantidade de horas.
SELECT * FROM Projects ORDER BY Hours LIMIT 5;
