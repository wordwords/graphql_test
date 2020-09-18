import fetch from "node-fetch";
const API_URL = "https://api.manana.kr/calendar.json";

export const getDay = () => {

    // 저 API 주소를 주소창에 입력하면 JSON 데이터가 뜨는데, 그게 어떤 형태로 들어오는지 콘솔 로그로 확인 필요 (상황에 따라 json => json.data 이런 식으로 작성해야 한다)
    return fetch(`${API_URL}`)
        .then(res => res.json())
        .then(json => json)
}


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
    const filteredMovies = people.filter(movie => movie.id === id);
    return filteredMovies[0]
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }

    movies.push(newMovie);
    return newMovie;
}