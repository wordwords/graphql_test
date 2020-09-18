schema.graphql은 사용자가 뭘 할지에 대해 정의한다.

1. Query - DB로부터 정보를 얻는다. 받기만 한다.
2. mutation - DB의 정보를 바꾸는 것이다.

-------------------------------

schema.graphql에서 아래와 같이 쓰면 person이 array라는 거다.
우리는 다수의 person을 보낼거다. 이때 오직 한 person에 접근하려면 ID가 필요하다.

type Query {
    people: [Person]!
    person(id: Int): Person     // 여기서 리턴할건 우리가 찾은 person
}

-------------------------------

graphQL resolvers는 graphQL 서버에서 요청을 받는다.
graphQL 서버가 Query나 Mutation의 정의를 발견하면 resolvers를 찾을 것이고 해당 함수를 실행할거다.

-------------------------------

전체 흐름
1. Operation(schema.graphql)에서 나의 data가 어떻게 보일지 정의한다.
2. Operation(질문)을 resolve(해결하는) 함수를 만든다.
