// schema.graphql이라는 파일은 'name'을 받아오겠다는 '설명'일 뿐이고, 실제로 그 Query를 resolve(해결)하는 것은 resolvers.js 파일이다.
import { getMovies, getById, addMovie, deleteMovie, getDay, chattingLog } from "./db"
import { PubSub } from "graphql-yoga";

// 구독 추가
const pubsub = new PubSub();
const NEW_CHAT = "NEW_CHAT";



const resolvers = {
    Query: {
        movies: () => getMovies(),          // [1] DB호출 예시
        movie: (_, { id }) => getById(id),  // [1] DB호출 예시
        day: () => getDay(),                // [2] API호출 예시
        chatting: () => chattingLog         // [3] 채팅 예시
    },

    Mutation: {
        // DB 수정 삭제 예시
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id),

        // 채팅 예시
        write: (_, { writer, description }) => {
            const id = chattingLog.length;
            const newChat = {
                id,
                writer,
                description
            };
            chattingLog.push(newChat);

            // 구독 추가
            pubsub.publish(NEW_CHAT, {
                newChat
            })

            return "YES";
        }
    },

    // 구독 추가
    Subscription: {
        newChat: {
            subscribe: (_, __, { pubsub }) =>
                pubsub.asyncIterator(NEW_CHAT)
        }
    }
}

export default resolvers;