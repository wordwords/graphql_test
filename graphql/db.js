// 이 부분을 데이터베이스에서 가져온 데이터로 교체해야 함
// people에 해당하는 array를 만들자
export const people = [
    {
        id: "0",
        name: "이름",
        age: 11,
        gender: "성1"
    },
    {
        id: "1",
        name: "이름2",
        age: 12,
        gender: "성2"
    },
    {
        id: "2",
        name: "이름3",
        age: 13,
        gender: "성3"
    },
]; 


// people 배열 안에 있는 모든 Object 확인후 조건에 맞는걸 return
export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}