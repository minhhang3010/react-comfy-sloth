
const items = [
    {id: 1, name:'hang'},
    {id: 2, name:'minh'},
]
exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    }
}