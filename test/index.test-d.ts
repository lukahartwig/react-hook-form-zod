import { expectTypeOf, test } from "vitest";
import { z } from "zod";
import { useForm } from "../dist";

test("should infer type of data in submit handler", () => {
  const schema = z.object({
    name: z.string().min(3),
    age: z.number().min(18),
  });

  const form = useForm({
    schema,
  });

  expectTypeOf(form.handleSubmit)
    .parameter(0)
    .toMatchTypeOf<(data: z.infer<typeof schema>) => void>();
});
