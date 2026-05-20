# How Generics Keep TypeScript Components Reusable and Strictly Typed

* Introduction

Generics are one of the strongest tools in TypeScript. They let you build reusable functions and classes that work with different types while keeping full type safety.

* Reusable Functions with Generics

A generic function can take any type but still tracks the exact connection between what goes in and what comes out. The compiler stays smart about it.

Example:

```ts
function identity<T>(value: T): T {
  return value;
}

const text = identity("hello");
const num = identity(42);
```

This single function works with strings, numbers, objects . And the return type always matches whatever you passed in.

* Generic Constraints for Safety

You can limit what types a generic accepts so it only works with values that have certain properties. This stops you from writing the same code over and over.

Example:

```ts
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("hello");
getLength([1, 2, 3]);
```

It accepts anything with a `length` property and stays strictly typed. No guesswork.

* Reusable Classes and Data Structures

Generics work great with classes too. You can create a class that handles any type while keeping everything type-safe.

Example:

```ts
class DataStore<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringStore = new DataStore<string>();
const numberStore = new DataStore<number>();
```

Each store remembers its type. `stringStore` only takes strings. `numberStore` only takes numbers. Clean and safe.

* Why Generics Matter

Generics stop you from copying the same function or class for every different type. They keep your code DRY, maintain strong type links, and reduce bugs.

* Conclusion

Use generics when you need flexible but safe code. They make your components reusable across many data types without losing TypeScript’s protections. This approach keeps your codebase maintainable and less prone to errors in the long run.