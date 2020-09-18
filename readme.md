yarn start로 서버 켠 뒤 플레이그라운드(localhost:4000)나 포스트맨에서 아래처럼 입력하면 된다.


```
// 예시로 만든 "외부 날짜 API 호출" 함수 발동
query {
    day {
      date
      name
      category
      nation
    }
}
```
----------------


내 데이터들
(참고: DB에서 값을 가져온 경우를 가정하여 하드코딩으로 박아둔 테스트 데이터라서 새로고침하면 초기화된다)


[값 확인]
```
query {
  movies {
    name
    score
  }
}
```


[값추가]
```
mutation {
   addMovie(name: "새영화", score:9) {
     name 
   }
}
```


[값 삭제]
```
mutation {
  deleteMovie(id:4)
}
```





schema.graphql은 사용자가 뭘 할지에 대해 정의한다.

1. Query - DB로부터 정보를 얻는다. 받기만 한다.
2. mutation - DB의 정보를 바꾸는 것이다.

-------------------------------

schema.graphql에서 아래와 같이 쓰면 person이 array라는 거다.
우리는 다수의 person을 보낼거다. 이때 오직 한 person에 접근하려면 ID가 필요하다.

```
type Query {
    people: [Person]!
    person(id: Int): Person     // 여기서 리턴할건 우리가 찾은 person
}
```

-------------------------------

graphQL resolvers는 graphQL 서버에서 요청을 받는다.
graphQL 서버가 Query나 Mutation의 정의를 발견하면 resolvers를 찾을 것이고 해당 함수를 실행할거다.

-------------------------------

전체 흐름
1. Operation(schema.graphql)에서 나의 data가 어떻게 보일지 정의한다.
2. Operation(질문)을 resolve(해결하는) 함수를 만든다.
