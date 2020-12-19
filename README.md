# tdd
TDD studies using JavaScript with Mocha and Chai for the Sensedia Mentoring Program.

#### Aprendizados
- deep equal
module which you can use to determine if two objects are "deeply" equal - that is, rather than having referential equality (a === b), this module checks an object's keys recursively

##### TDD
TDD é o Desenvolvimento Orientado por Testes (Test Driven Development). Desenvolvemos o nosso software baseado em testes que são escritos antes do nosso código de produção.

###### Ciclo de desenvolvimento
- Red,Green, Refactor. Ou seja:	
    - Escrevemos um Teste que inicialmente não passa (Red)
	- Adicionamos uma nova funcionalidade do sistema
	- Fazemos o Teste passar (Green)
	- Refatoramos o código da nova funcionalidade (Refactoring)
	- Escrevemos o próximo Teste
	
###### Vantagens:
- Feedback rápido sobre a nova funcionalidade e sobre as outras funcionalidades existentes no sistema
- Código mais limpo, já que escrevemos códigos simples para o teste passar
- Segurança no Refactoring pois podemos ver o que estamos ou não afetando
