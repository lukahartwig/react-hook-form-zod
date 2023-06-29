# react-hook-form-zod

react-hook-form-zod is a library that combines [react-hook-form](https://react-hook-form.com/)
and [zod](https://zod.dev/) to create forms with validation.

## When to use this library

This package is just a typesafe wrapper around react-hook-form, zod and hookform resolvers.
It adds type inference and removes the boilerplate of integrating zod with react-hook-form.

If that doesn't justify adding another dependency feel free to copy the code from the source file.

## Installation

```bash
npm install react-hook-form-zod react-hook-form zod @hookform/resolvers
```

## Usage

```tsx
import { useForm } from "react-hook-form-zod"; // use this in place of react-hook-form

const schema = z.object({
  name: z.string().min(3).max(10),
  age: z.number().min(18).max(99),
});

const App = () => {
  const form = useForm({
    schema,
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  const errors = form.formState.errors;

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" ref={register} />
      {errors.name && <p>{errors.name.message}</p>}
      <input name="age" ref={register} />
      {errors.age && <p>{errors.age.message}</p>}
      <input type="submit" />
    </form>
  );
};
```
