use PiecesProviders;

-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT Provider, Piece, Price FROM Provides WHERE Provider = 'RBT';

-- Escreve uma query para exibir todas as informações dos 5 peças com os maiores preços.
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

-- Escreva uma query para exibir o nome das empresas, sem repetições, que proveem as peças com os 4 maiores preços.
SELECT DISTINCT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4;

-- Escreva uma query para exibir todas as informações das peças que são providos pela empresa HAL.
-- Ordene o resultado pelos preços dos peças de forma decrescente.
SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;

-- Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT count(DISTINCT Provider) FROM Provides WHERE Piece = 1;