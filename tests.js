// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

// describe("sayHello", function () {
//     it('should be a defined function', function () {
//         expect(typeof sayHello).toBe("function");
//     });
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string");
//     });
//     it('should return "Hello, Jane!"', function () {
//         expect(sayHello("Jane")).toBe("Hello, Jane!")
//
//     });
//     it('should should return "Hello, Alex!" if the input is Alex', function () {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//
//     });
//     it('should return "Hello, Pat!" when the input is Pat', function () {
//         expect(sayHello("Pat")).toBe("Hello, Pat!");
//
//     });
//     it('should return "Hello, world!" when input is empty', function () {
//         expect(sayHello()).toBe("Hello, World!");
//
//     });
//     it('should should return "Hello, World!" when the input is true', function () {
//         expect(sayHello(true)).toBe("Hello, World!");
//
//     });
//     it('should return "Hello, World!" when the input is false', function () {
//         expect(sayHello(false)).toBe("Hello, World!");
//
//     });
//
// });

describe("isFive", function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");

    });
    it('should should return a boolean of true or fals', function () {
        expect(typeof isFive()).toBe("boolean");

    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);

    });
    it('should return false if the input is a string', function () {
        expect(isFive("5")).toBe(false);

    });
})



