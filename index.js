import { GraphQLServer, PubSub } from "graphql-yoga"
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",  // 내가 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명 (graphql 폴더의 schema.graphql이라는 파일)
    resolvers: resolvers,                // 위의 '설명'을 가지고 그 Query를 resolve(해결)하는 것은 resolvers.js 파일.
    context: { PubSub }                  // Subscription로 먼저 “NEW_CHAT”이라는 토픽(topic)을 구독을 해놓으면 mutation에서 “NEW_CHAT” 토픽에게 newChat 데이터를 발행합니다.
});

server.start(() => console.log("서버가 실행됨"))