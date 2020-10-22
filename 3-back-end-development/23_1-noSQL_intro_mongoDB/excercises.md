Exercício 1: Retorne o documento com _id igual a 8.

db.bios.find({_id: 8}).pretty()

Exercício 2: Retorne o documento com _id igual a 8, mas só exiba os campos: _id e name.

db.bios.find({_id: 8}, {name: 1}).pretty()

Exercício 3: Retorne apenas os campos name e birth do documento com _id igual a 8.

db.bios.find({_id: 8}, {name: 1, birth: 1, _id: 0}).pretty()

Exercício 4: Retorne todos os documentos em que o campo name.first seja igual a John, utilizando o método pretty().

db.bios.find({"name.first": "John"}).pretty()

Exercício 5: Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty().

db.bios.find().limit(3).pretty()

Exercício 6: Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

db.bios.find().skip(5).limit(2).pretty()

Exercício 7: Retorne a quantidade de documentos da coleção books.

db.books.count()

Exercício 8: Conte quantos livros existem com o status "PUBLISH".

db.books.count({"status": "PUBLISH"})

Exercício 9: Exiba os campos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o campo _id.

db.books.find({}, {title: 1, isbn: 1, _id: 0}).limit(3)

Exercício 10: Pule 5 documentos e exiba os campos _id, title, authors e status do livros com status "MEAP", limitando-se a 10 documentos.

db.books.find({status: "MEAP"}, {title: 1, authors: 1, status: 1}).skip(5).limit(10)