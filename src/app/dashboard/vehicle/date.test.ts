import formatDate from "./date"; 

describe('formatDate component', () => {
  test('formats date correctly for valid inputs', () => {
    const  inputDate = new Date("2022-11-11"); 
    const formatted = formatDate(inputDate);
    expect(formatted).toBe("2022-11-11");
  });

});

describe('formatDate component', () => {
    test('pronounces error for invalid inputs', () => {
      const  inputDate = new Date("1230000"); 
      const formatted = formatDate(inputDate);
      expect(formatted).toBe("NaN-NaN-NaN");
    });
  
  });