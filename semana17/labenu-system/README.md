# LABENU SYSTEM

## Estrutura de Dados

* Student
   * id
   * name 
   * email 
   * birthDate
   * hobbies         (livre)
   * mission         (apenas uma por vez)

* Teacher
   * id
   * name
   * email
   * birthDate
   * especialties
      * React
      * Redux
      * CSS
      * Testes
      * Typescript
      * Programação Orientada a Objetos 
      * Backend
   * mission         (apenas uma por vez)

* Mission
   * id
   * name
   * startDate 
   * endDate
   * teachers 
   * students 
   * module (1 a 7 ou `undefined`)
   * shift
      * `integral`
      * `noturna` (nome tem que terminar com `-na-night`)

## Queries para Criação e População das Tabelas

```sql 
CREATE TABLE labenu_system_MISSIONS(
	id VARCHAR(255) PRIMARY KEY,
   name VARCHAR(255) UNIQUE NOT NULL,
   start_date DATE NOT NULL,
   end_date DATE NOT NULL,
	module TINYINT,
   shift ENUM ('INTEGRAL', 'NOTURNA'),
   CHECK (module > 0 AND module < 8)
);
```
```sql 
CREATE TABLE labenu_system_STUDENTS(
	id VARCHAR(255) PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   birth_date DATE NOT NULL,
	mission_id VARCHAR(255),
   FOREIGN KEY(mission_id)REFERENCES labenu_system_MISSIONS(id)
);
```
```sql 
CREATE TABLE labenu_system_TEACHERS(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    birth_date DATE NOT NULL,
	mission_id VARCHAR(255),
    FOREIGN KEY(mission_id)REFERENCES labenu_system_MISSIONS(id)
);
```
```sql 
CREATE TABLE labenu_system_TEACHER_SPECIALTIES(
	teacher_id VARCHAR(255),
   specialty ENUM (
		'REACT',
		'REDUX',
		'CSS',
		'TESTES',
		'TYPESCRIPT',
		'PROGRAMAÇÃO ORIENTADA A OBJETOS',
		'BACKEND'
	),
   PRIMARY KEY (teacher_id, specialty),
   FOREIGN KEY (teacher_id) REFERENCES labenu_system_TEACHERS(id)
);
```
```sql 
CREATE TABLE labenu_system_HOBBIES(
	id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE labenu_system_STUDENT_HOBBIES(
	student_id VARCHAR(255),
   hobby_id INT,
   FOREIGN KEY (student_id) REFERENCES labenu_system_STUDENTS(id),
   FOREIGN KEY (hobby_id) REFERENCES labenu_system_HOBBIES(id)
);
```
```sql
INSERT INTO labenu_system_HOBBIES 
   (name) 
VALUES 
   ("Colecionar selos"),
   ("Jogar videogames"),
   ("Praticar esportes"),
   ("Comer"),
   ("Rezar"),
   ("Amar");
```
## Endpoints 

* Criar estudante

* Criar docente

* Criar turma

* Adicionar estudante na turma

* Adicionar docente na turma

* Pegar a idade de algum estudante a partir do id