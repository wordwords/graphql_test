// 이 부분을 데이터베이스에서 가져온 데이터로 교체해야 함
const man = {
    name: "이름",
    age: 18,
    gender: "양성"
}

// graphql 폴더의 schema.graphql이라는 파일은 'name'을 받아오겠다는 '설명'일 뿐이고, 
// 실제로 그 Query를 resolve(해결)하는 것은 resolvers.js 파일이다.
const resolvers = {
    Query: {
        person: () => man
    }
}

export default resolvers;