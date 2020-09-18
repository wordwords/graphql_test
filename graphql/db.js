// 이 부분을 데이터베이스에서 가져온 데이터로 교체해야 함
// people에 해당하는 array를 만들자
let movies = [
    {
        id: 0,
        name: "이름1",
        score: 11
    },
    {
        id: 1,
        name: "이름2",
        score: 12
    },
    {
        id: 2,
        name: "이름3",
        score: 13
    },

]; 

// 전체출력
export const getMovies = () => movies;

// people 배열 안에 있는 모든 Object 확인후 조건에 맞는걸 return
export const getById = id => {
    const filteredMovies = people.filter(movie => movie.id === String(id));
    return filteredMovies[0]
}

