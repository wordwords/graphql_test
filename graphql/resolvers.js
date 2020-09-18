import { getMovies, getById, addMovie, deleteMovie } from "./db"

// graphql 폴더의 schema.graphql이라는 파일은 'name'을 받아오겠다는 '설명'일 뿐이고, 
// 실제로 그 Query를 resolve(해결)하는 것은 resolvers.js 파일이다.
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },

    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
}

export default resolvers;