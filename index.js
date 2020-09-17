import { GraphQLServer } from "graphql-yoga"

const server = new GraphQLServer({
    // 스키마 필요함 (내가 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명)
})

server.start(() => console.log("서버가 실행됨"))