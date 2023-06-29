# react-hook-form-zod

[![npm version](https://img.shields.io/npm/v/react-hook-form-zod.svg?style=flat)](https://www.npmjs.com/package/react-hook-form-zod)

react-hook-form-zod is a library that combines [react-hook-form](https://react-hook-form.com/)
and [zod](https://zod.dev/) to create forms with validation.

Its primary purpose is to reduce the boilerplate required to use zod with react-hook-form.

## Install

```bash
npm install react-hook-form-zod zod
```

```bash
yarn add react-hook-form-zod zod
```

```bash
pnpm add react-hook-form-zod zod
```

## Usage

WITHOUT react-hook-form-zod:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(10),
  age: z.number().min(18),
});

type FormValues = z.infer<typeof schema>;

function Form() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  // ...
}
```

WITH react-hook-form-zod:

```tsx
import { useForm } from "react-hook-form-zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(10),
  age: z.number().min(18),
});

function Form() {
  const form = useForm({
    schema,
  });

  // ...
}
```

## API Reference

The API is identical to react-hook-form with the exception of the `useForm` hook.
`useForm` takes three additional options which correspond to the arguments of the `zodResolver` factory function:

- `schema`: a zod schema (required)
- `schemaOptions`: options for the zod schema
- `factoryOptions`: options for the hookform resolver factory
