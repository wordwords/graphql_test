import { GraphQLServer, PubSub } from "graphql-yoga"
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    // 스키마 필요함 (내가 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명)
    typeDefs: "graphql/schema.graphql",  // graphql 폴더의 schema.graphql이라는 파일은 'name'을 받아오겠다는 '설명'일 뿐이고,
    resolvers: resolvers                 // 실제로 그 Query를 resolve(해결)하는 것은 resolvers.js 파일이다
});

server.start(() => console.log("서버가 실행됨"))