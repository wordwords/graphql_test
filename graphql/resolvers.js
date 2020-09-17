// graphql 폴더의 schema.graphql이라는 파일은 'name'을 받아오겠다는 '설명'일 뿐이고, 
// 실제로 그 Query를 resolve(해결)하는 것은 resolvers.js 파일이다.
const resolvers = {
    Query: {
        name: () => "이름 (어떤 사용자가 name이라는 Query를 보내면, 이름을 반환하는 함수로 답함)"
    }
}

export default resolvers;