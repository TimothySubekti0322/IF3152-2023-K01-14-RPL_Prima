import { capitalize, camelCaseToTitle } from "../src/app/dashboard/components/Capitalization"; // Update the path as per your file structure

describe('capitalize string', () => {
  test('capitalizes valid string', () => {
    const  input = "abc"; 
    const formatted = capitalize(input);
    expect(formatted).toBe("Abc");
  });

  test('capitalizes valid string', () => {
    const  input = "abc def ghi jkl"; 
    const formatted = capitalize(input);
    expect(formatted).toBe("Abc def ghi jkl");
  });
});

describe('camel vase string', () => {
    test('turns valid string into camel case', () => {
      const  input = "testing testing jest ta an"; 
      const formatted = camelCaseToTitle(input);
      expect(formatted).toBe("Testing Testing Jest Ta An");
    });

    test('returns invalid string', () => {
        const  input = "!?"; 
        const formatted = camelCaseToTitle(input);
        expect(formatted).toBe("!?");
      });

  });