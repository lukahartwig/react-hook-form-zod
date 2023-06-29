import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm as useReactHookForm,
  UseFormProps as UseReactHookFormProps,
} from "react-hook-form";
import { z } from "zod";

export * from "react-hook-form";
export type UseFormProps<TSchema extends z.ZodType, TContext = any> = Omit<
  UseReactHookFormProps<TSchema["_input"], TContext>,
  "resolver"
> & {
  schema: TSchema;
  schemaOptions?: Parameters<typeof zodResolver>[1];
  factoryOptions?: Parameters<typeof zodResolver>[2];
};

export function useForm<
  TSchema extends z.ZodType,
  TContext = any,
  TTransformedValues extends TSchema | undefined = undefined
>({
  schema,
  schemaOptions,
  factoryOptions,
  ...rest
}: UseFormProps<TSchema, TContext>) {
  return useReactHookForm<TSchema["_input"], TContext, TTransformedValues>({
    ...rest,
    resolver: zodResolver(schema, schemaOptions, factoryOptions),
  });
}
