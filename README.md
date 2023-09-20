# TypeScript, What is it?

JavaScript and More: TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors in your editor faster.

TypeScript code converts to JavaScript through a compiler, which runs anywhere that JavaScript runs: In a browser, on Node.js and in your apps.

TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

TypeScript is a **Strongly Typed Language** which means that it **demands** for the **specification of types**. JavaScript **does not** make this demand and is therefore not a Strongly Typed Language, but is instead a **Loosely Typed Language**.

## TypeScript Terminology

- **Statically typed** = Variable types are explicitly declared and thus are determined at compile time. This lets the compiler decide whether a given variable can perform the actions requested from it or not.
  
- **Dynamically typed** = A compiler assigns a type to all variables at run-time. The type of a variable is decided based on its value. Programs written using dynamic-typed languages are more flexible but will compile even if they contain errors.

  *TypeScript is a **statically typed** language and JavaScript is a **dynamically typed** language*

- **Implicit** = The language will infer what data type you are using.
  
  *Example*

    ```typescript
    let myName = "Chris"
    ```

- **Explicit** = You strictly state what data trype you are using. This is also referred to as **annotation.**
  
  *Example*

    ```typescript
    let myName: string = "Chris"
    ```

- **Tuple** = Tuples are arrays with a **fixed** number of elements. They provide a fixed size container that can store values of multiple types, where **order and structure are very important.**
  
  *Example*

    ```typescript
    let myTuple: [string, number, boolean] = ["Chris", 28, true]
    ```

- **Object** = An object is an **instance** that includes a **collection** of **key-value pairs**.
  
  *Example*

    ```typescript
    const exampleObj = {
      prop1: "Chris",
      prop2: true,
    }
    ```

- **Enums** = Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language at runtime.
  
  *Example*

    ```typescript
    enum Grade {
      U = 1,
      D,
      C,
      B,
      A,
    }
    ```

    *TypeScript will adjust the rest of the enummerables depending on the enum given. Instead of the above being 0-4, it is instead 1-5.*

## TypeScript Benefits

- Self-documenting
- Catch errors in dev!
- Great for teams
