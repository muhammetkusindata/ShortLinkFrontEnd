import { useSession } from 'next-auth/react';
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const passwordSchema = z
  .string()
  .min(8, "Şifre en az 8 karakter olmalıdır.") // Minimum 8 karakter
  .max(20, "Şifre en fazla 20 karakter olabilir.") // Maksimum 20 karakter
  .regex(/[A-Z]/, "Şifre en az bir büyük harf içermelidir.") // Büyük harf
  .regex(/[a-z]/, "Şifre en az bir küçük harf içermelidir.") // Küçük harf
  .regex(/[0-9]/, "Şifre en az bir rakam içermelidir.") // Rakam
  .regex(/[@$!%*?&#]/, "Şifre en az bir özel karakter içermelidir."); // Özel karakter

const schema = z.object({
  newPassword: passwordSchema,
  confirmPassword: passwordSchema,
});

type FormData = z.infer<typeof schema>;

const Password = () => {
  const { data: session } = useSession();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  return (
    <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
      <label className="input input-bordered flex items-center gap-2">
        Old Password:
        <input type="password" className="grow" />
      </label>
      <div className='h-8 text-red-800'>
        <p className='pt-1 px-1 hidden'>Şifreniz Hatalıdır</p>
      </div>
      <label className="input input-bordered flex items-center gap-2">
        New password:
        <input type="password" className="grow" {...register("newPassword")} />
      </label>
      <div className='h-8 text-red-800'>
        {typeof errors.newPassword?.message == 'string' && <p className='pt-1 px-1'>{errors.newPassword.message}</p>}
      </div>
      <label className="input input-bordered flex items-center gap-2">
        Confirm Password:
        <input type="password" className="grow" {...register("confirmPassword")} />
      </label>
      <div className='h-8 text-red-800'>
        {typeof errors.confirmPassword?.message == 'string' && <p className='pt-1 px-1'>{errors.confirmPassword.message}</p>}
      </div>
      <button onClick={handleSubmit((data) => console.log(data))} className="btn text-white/75 bg-template1 hover:bg-slate-800 my-5 w-[250px]">Save Changes</button>
    </form>
  )
}

export default Password