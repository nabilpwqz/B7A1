type StringOrNumber = string | number;

export function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}


export function reverseString(text: string): string {
    
  return text.split("").reverse().join("");
}

export function checkType(value: StringOrNumber): "String" | "Number" {
  return typeof value === "string" ? "String" : "Number";
}



export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

export function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

export class Person {
  constructor(public name: string, public age: number) {}
}

export class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}




export function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  const secondSet = new Set(secondArray);
  return firstArray.filter((value) => secondSet.has(value));
}
