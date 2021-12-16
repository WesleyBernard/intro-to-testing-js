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

// describe("isFive", function (){
//     it('should be a defined function', function () {
//         expect(typeof isFive).toBe("function");
//
//     });
//     it('should should return a boolean of true or fals', function () {
//         expect(typeof isFive()).toBe("boolean");
//
//     });
//     it('should return true when passed 5', function () {
//         expect(isFive(5)).toBe(true);
//
//     });
//     it('should return false if the input is a string', function () {
//         expect(isFive("5")).toBe(false);
//
//     });
// })

// describe("isEven", function () {
//     it('should be a defined function', function () {
//         expect(typeof isEven).toBe("function");
//
//     });
//     it('should always return a boolean', function () {
//         expect(typeof isEven()).toBe("boolean");
//
//     });
//     it('should return true when the input is 2', function () {
//         expect(isEven(2)).toBe(true);
//
//     });
//     it('should return true when the input is -4', function () {
//         expect(isEven(-4)).toBe(true);
//
//     });
//     it('should return false when the input is 3', function () {
//         expect(isEven(3)).toBe(false);
//
//     });
//     it('should return false when the input is banana', function () {
//         expect(isEven("banana")).toBe(false);
//
//     });
//     it('should return true when the input is 8', function () {
//         expect(isEven(8)).toBe(true);
//
//     });
//     it('should return false when the input is Infinity', function () {
//         expect(isEven(Infinity)).toBe(false);
//
//     });
//     it('should return false when input is a boolean', function () {
//         expect(isEven(true)).toBe(false);
//
//     });
//     it('should return false when not given an input', function () {
//         expect(isEven()).toBe(false);
//
//     });
// });

// describe("isVowel", function () {
//     it('should be a defined function', function () {
//         expect(typeof isVowel).toBe("function");
//
//     });
//     it('should always return a boolean', function () {
//         expect(typeof isVowel()).toBe("boolean");
//
//     });
//     it('should should return true when the input is "A"', function () {
//         expect(isVowel("A")).toBe(true);
//
//     });
//     it('should return true when the input is "a"', function () {
//         expect(isVowel("a")).toBe(true);
//
//     });
//     it('should return false when the input is 4', function () {
//         expect(isVowel(4)).toBe(false);
//
//     });
//     it('should return false if the input is a boolean', function () {
//         expect(isVowel(true)).toBe(false);
//
//     });
//     it('should return false if the input is a boolean (false)', function () {
//         expect(isVowel(false)).toBe(false);
//
//     });
//     it('should return false if the input is "banana"', function () {
//         expect(isVowel("banana")).toBe(false);
//
//     });
//     it('should return false if there is no input', function () {
//         expect(isVowel()).toBe(false);
//
//     });
//     it('should return true if the input is "U"', function () {
//         expect(isVowel("U")).toBe(true);
//
//     });
//     it('should return false if the input is null', function () {
//         expect(typeof isVowel() === null).toBe(false);
//
//     });
// });

describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");

    });
    it('should return 5 when the inputs are 2 and 3', function () {
        expect(add(2, 3)).toBe(5);

    });
    it('should return NaN when one or both of the inputs are strings', function () {
        expect(isNaN(add("banana", "split"))).toBe(true)

    });
    it('should return Nan when no input is given', function () {
        expect(isNaN(add())).toBe(true);

    });
    it('should return NaN when one input is a number and the other is a string', function () {
        expect(isNaN(add(2 + "String"))).toBe(true);

    });
});


