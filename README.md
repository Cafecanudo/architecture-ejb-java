# Softbox - Architecture EJB3.1, JAX-RS on Java 8
Arquitetura para descrever uso EJB e JAX-RAS para serviços RestFul. Modelo simples de fácil implementação para 
serem usados em projetos que precisem usar Hibernate JPA ou qualquer outra camada de persistência.


Ao projetar sistemas EJB (Enterprise JavaBean) pela primeira vez, a escolha de uma arquitetura correta,
ou o particionamento de lógica, que satisfaça a preocupações do projeto, como desempenho,
manutenção, escalabilidade e portabilidade, é uma das tarefas mais difíceis encontradas pelos desenvolvedores.

# Objetivo
Este repositório propõe uma maneira simples e rapida de criar BACK-END seguindo padrões e conformidade com a
comunidade de desenvolvimento Java. Todo fluxo para implementação leva menos de 1 hora (Exceto a regra de negócio),
Serviços RestFul, Services(Component EJB) e repositório.

Alguns padrões de arquitetura básicos atualmente em uso na indústria,
especificamente:

    # Session Façade.
        O mais usado de todos os padrões de projeto EJB, ele mostra como particionar
        adequadamente a lógica de negócio em seu sistema para ajudar a minimizar as dependências
        entre cliente e servidor, ao mesmo tempo em que força os casos de uso a serem
        executados em uma chamada de rede e em uma transação.

    # EJB Command.
        Sendo a antítese do padrão Session Façade, este padrão advoga a colocação
        da lógica de negócio em Command Beans Java pequenos e simples. Os maiores benefícios
        deste padrão são o completo desacoplamento do cliente em relação ao próprio EJB e a
        execução de casos de uso em uma chamada de rede e em uma transação.

    # Data Transfer Object Factory.
        Desmistifica a velha prática de colocar a lógica de criação/
        uso de DTOs no próprio Entity Bean e prescreve a centralização da lógica de criação e uso do
        objeto de transferência de dados para uma única camada (implementada como Session
        Beans ou fábricas Java normais).
        
    # Generic Attribute Access.
        Este padrão discute quando e como fornecer uma interface de
        domínio genérico para os atributos de um Entity Bean para fins de manutenção e desempenho.
        É uma boa prática, mas não é muito usado.
        
    # Business Interface. Também conhecido como Business Object(BO)
        Este padrão mostra como implementar um esquema de implementação
        de interface que possa fornecer checagem em tempo de compilação das assinaturas dos
        métodos nas interfaces Remota/Local e na classe EJB Bean.
### Demonstraões        
Descrição de uso de transporte de dados sem FACADE.
![Alt text](readme-docs/image-facade.png?raw=true)

![Alt text](readme-docs/image-facade-2.png?raw=true)

# Documentação de interfaces de serviços.

Foi implementado [Swagger](https://swagger.io/swagger-ui/) para documentação dos serviços RestFul,
este plugin auxilia o desenvolvimento e teste, além de documentar os mesmo para que 
o desenvolvedor possa consultar os serviços disponíves afim de não criar um novo com mesmo objetivo.
















###Contato
Wellton S. Barros
- welltonbarros@softbox.com.br
- cafecanudo@gmail.com<br/>
- https://www.linkedin.com/in/wellton-barros/

Obrigado!.

Comentem tudo que quiser.