const user = require ("./user") //importando

describe("user", () => {
    it("should be greather than or equal to 18", () =>{
        expect(user.idade).toBeGreaterThanOrEqual(18);
    })
})

function soma(a, b) {
    return a + b;
}
describe("test", () => {
    it("soma", () => {
        expect(soma(1, 2)).toBe(3)
        expect(soma(5,7)).toBe(12)
    })
    it("fail", () => {
        expect(soma(1, 2)).toBe(3)
        expect(soma(5,7)).not.toBe(13)
    })
})