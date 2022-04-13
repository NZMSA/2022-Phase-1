import {
  sumTwoNumbers,
  HairColor,
  Person,
  Student,
  PersonInterface,
  sortAndConcat,
} from "../index";

// Question 1 test cases
describe("testing index file", () => {
  test("Question1 case1", () => {
    expect(sumTwoNumbers(0, 0)).toBe(0);
  });
});

describe("testing index file", () => {
  test("Question1 case2", () => {
    expect(sumTwoNumbers(1, 1)).toBe(2);
  });
});

// Question 2 test cases
describe("testing index file", () => {
  test("Question2 case1", () => {
    expect(HairColor.brown).toBe("brown");
  });
});

describe("testing index file", () => {
  test("Question2 case2", () => {
    expect(HairColor.black).toBe("black");
  });
});

describe("testing index file", () => {
  test("Question2 case3", () => {
    expect(HairColor.blonde).toBe("blonde");
  });
});

describe("testing index file", () => {
  test("Question2 case4", () => {
    expect(HairColor.red).toBe("red");
  });
});

// Question 3 test cases
describe("testing index file", () => {
  test("Question3 case1", () => {
    const person = new Person("John", 20);
    expect(person.getName()).toBe("John");
  });
});

describe("testing index file", () => {
  test("Question3 case2", () => {
    const person = new Person("John", 20);
    person.setName("Jane");
    expect(person.getName()).toBe("Jane");
  });
});

describe("testing index file", () => {
  test("Question3 case3", () => {
    const person = new Person("John", 20);
    expect(person.getAge()).toBe(20);
  });
});

describe("testing index file", () => {
  test("Question3 case4", () => {
    const person = new Person("John", 20);
    person.setAge(21);
    expect(person.getAge()).toBe(21);
  });
});

// Question 4 test cases
describe("testing index file", () => {
  test("Question4 case1", () => {
    const student = new Student("John", 20, HairColor.brown);
    expect(student.getName()).toBe("John");
  });
});

describe("testing index file", () => {
  test("Question4 case2", () => {
    const student = new Student("John", 20, HairColor.brown);
    student.setName("Jane");
    expect(student.getName()).toBe("Jane");
  });
});

describe("testing index file", () => {
  test("Question4 case3", () => {
    const student = new Student("John", 20, HairColor.brown);
    expect(student.getAge()).toBe(20);
  });
});

describe("testing index file", () => {
  test("Question4 case4", () => {
    const student = new Student("John", 20, HairColor.brown);
    student.setAge(21);
    expect(student.getAge()).toBe(21);
  });
});

describe("testing index file", () => {
  test("Question4 case5", () => {
    const student = new Student("John", 20, HairColor.brown);
    expect(student.getHairColor()).toBe(HairColor.brown);
  });
});

describe("testing index file", () => {
  test("Question4 case6", () => {
    const student = new Student("John", 20, HairColor.brown);
    student.setHairColor(HairColor.black);
    expect(student.getHairColor()).toBe(HairColor.black);
  });
});

// Question 5 test cases
describe("testing index file", () => {
  test("Question5 case1", () => {
    const person: PersonInterface = {
      name: "John",
      age: 20,
    };
    expect(person.name).toBe("John");
  });
});

describe("testing index file", () => {
  test("Question5 case2", () => {
    const person: PersonInterface = {
      name: "John",
    };
    person.name = "Jane";
    expect(person.name).toBe("Jane");
  });
});

describe("testing index file", () => {
  test("Question5 case3", () => {
    const person: PersonInterface = {
      name: "John",
      age: 20,
    };
    expect(person.age).toBe(20);
  });
});

// Question 6 test cases
describe("testing index file", () => {
  test("Question6 case1", () => {
    const list1 = [1, 6, 3];
    const list2 = [4, 5, 2];
    expect(sortAndConcat(list1, list2)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("testing index file", () => {
  test("Question6 case2", () => {
    const list1 = [1, 2, 3, 2];
    const list2 = [3, 5, 6, 7];
    expect(sortAndConcat(list1, list2)).toEqual([1, 2, 3, 5, 6, 7]);
  });
});

describe("testing index file", () => {
  test("Question6 case3", () => {
    const list1 = ["v", "a", "r"];
    const list2 = ["a", "b", "c"];
    expect(sortAndConcat(list1, list2)).toEqual(["a", "b", "c", "r", "v"]);
  });
});

describe("testing index file", () => {
  test("Question6 case4", () => {
    const list1 = ["a"]
    const list2 = [null];
    expect(sortAndConcat(list1, list2)).toEqual(["a", null]);
  });
});
