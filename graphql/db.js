import fetch from "node-fetch";
const API_URL = "https://api.manana.kr/calendar.json";


// [예시1] 만약 외부 RESTful API를 가져오는 경우 (이번달 매주 월요일 데이터 가져오기)
export const getDay = () => {
    return fetch(`${API_URL}`)
        .then(res => res.json())
        .then(json => json)
}


// [예시2] 만약 데이터베이스에서 이런 형태로 데이터 가져온 경우
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


// DB에서 가져온 데이터 전체출력 예시
export const getMovies = () => movies;

// DB에서 가져온 데이터 특정값 탐색 예시 (people 배열 안에 있는 모든 Object 확인후 조건에 맞는걸 return)
export const getById = id => {
    const filteredMovies = people.filter(movie => movie.id === id);
    return filteredMovies[0]
}

// DB의 데이터 삭제 예시
export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

// DB에 데이터 추가 예시
export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }

    movies.push(newMovie);
    return newMovie;
}