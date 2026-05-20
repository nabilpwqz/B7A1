# Why `any` is a Type Safety Hole and `unknown` is Safer

* Introduction

In TypeScript, `any` basically kills static typing. It lets anything go through without any checks. `unknown` is the better and safer option for data you can't trust upfront . it forces you to check the type before using it.

* Why `any` is Unsafe

Use `any` and TypeScript stops checking that value completely. You can call non-existent methods or treat numbers as strings, and it won't complain at compile time.

Example:

```ts
let data: any = getExternalData();
let length = data.length; // No error, even if data is actually a number
```

That's why people call `any` a "type safety hole". It turns off TypeScript's protections and your code starts acting like regular JavaScript again.

* Why `unknown` is Safer

`unknown` means the type is unknown, but TypeScript still keeps guardrails in place. You have to narrow the type first before you can use it.

Example:

```ts
let value: unknown = getExternalData();
if (typeof value === "string") {
  console.log(value.length);
}
```

The compiler won't let you touch anything until you prove what it actually is. This makes your code much safer and easier to work with later.

* What is Type Narrowing?

Type narrowing is just refining a loose type into a specific one using real runtime checks. Common ways:

- `typeof` for basic types like string or number
- `instanceof` for classes
- Checking if certain properties exist

Example:

```ts
function printValue(value: unknown) {
  if (typeof value === "string") {
    console.log("String length:", value.length);
  } else if (typeof value === "number") {
    console.log("Number value:", value.toFixed(2));
  }
}
```

Inside those checks, TypeScript knows the exact type and lets you use it safely.

* Conclusion

`any` weakens your TypeScript code by removing compile-time safety. `unknown` keeps the safety net and makes you handle types properly. For external or unpredictable data always go with `unknown`. It’s the practical choice that keeps your code solid.