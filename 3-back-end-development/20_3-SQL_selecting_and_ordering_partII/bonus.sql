-- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
SELECT * FROM Scientists WHERE name LIKE '%e%';

-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
SELECT * FROM Projects WHERE Code LIKE 'A%' ORDER BY Name;

-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
SELECT * FROM Projects WHERE Code LIKE '%3%' ORDER BY Name;

-- Escreva uma query para exibir todos os cientistas cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT * FROM AssignedTo WHERE Project IN ('AeH3', 'Ast3', 'Che1');

-- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Projects WHERE Hours > 500;

-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;

-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a A.
SELECT Name, Code FROM Projects WHERE Name NOT LIKE 'A%';

-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT Name, Code FROM Projects WHERE Code LIKE '%H%';