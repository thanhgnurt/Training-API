var initialState = [
    {
        id : 1,
        name : 'iphone 11',
        price : 650,
        status : true,
    },
    {
        id : 2,
        name : 'Samsung Galaxy Note 10',
        price : 650,
        status : true,
    },
    {
        id : 3,
        name : 'Huewei P20 Pro',
        price : 650,
        status : true,
    },
]

var products = (state = initialState, action) => {
    return [...state]
}

export default products