import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().min(18, "Must be at least 18"),
});

type FormData = z.infer<typeof schema>;

export function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="my-10 py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      {typeof errors.name?.message === 'string' && <p>{errors.name.message}</p>}

      <input type="number" {...register("age")} />
      {typeof errors.age?.message === 'string' && <p>{errors.age.message}</p>}

      <button className="bg-slate-800" type="submit">Submit</button>
    </form>
    </div>
  );
}
