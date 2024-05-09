//get a user 
const axios = require("axios");

//ENDPOINTS
/**
 * # From Users
 */
const RegisterUser = "http://localhost:1337/magic-library/api/v1/register"
const CreateUser = "http://localhost:1337/magic-library/api/v1/ld"
const GetUser = "http://localhost:1337/magic-library/api/v1/get-a-user"
const GetAllUsers = "http://localhost:1337/magic-library/api/v1/get-all-users"
const UpdateUser = "http://localhost:1337/magic-library/api/v1/update-a-user"
const DeleteUser = "http://localhost:1337/magic-library/api/v1/delete-a-user"

/**
 * # From Books
 */
const getBook = "http://localhost:1337/magic-library/api/v1/get-a-book"
const getAllBooks = "http://localhost:1337/magic-library/api/v1/get-all-books"
const createBook = "http://localhost:1337/magic-library/api/v1/create-a-book"
const updateBook = "http://localhost:1337/magic-library/api/v1/update-a-book"
const deleteBook = "http://localhost:1337/magic-library/api/v1/delete-a-book"

function getUserFromDB() {
    axios.get(GetUser).then(function (response) {
        console.log(response);
        return response
    })
}

test('could get a user from database', async () => {
    const data = await getUserFromDB();
    expect(data).toBe({
        title: { type: String },
        subtitle: { type: String },
        author: { type: String },
        published: { type: Date },
        publisher: { type: String },
        pages: { type: Number },
        description: { type: String },
        website: { type: String },
        category: [String],
    })
})
