import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, "Minimum 3 karakter olmalıdır."),
    surname: z.string().min(3, "Minimum 3 karakter olmalıdır."),
    email: z.string().email("Geçerli bir e-posta adresi giriniz."),
    companyID: z.string().optional()
});
type FormData = z.infer<typeof schema>;

const Profile = () => {

    const { data: session } = useSession();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    // Generate a random company name for demonstration purposes
    const [companyName, setCompanyName] = useState("InData");

    return (
        <>
            
            <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
                <label className="input input-bordered flex items-center gap-2">
                    Name:
                    <input type="text" className="grow" defaultValue={`${session?.user?.name}`} placeholder={`${session?.user?.name}`} {...register("name")} />

                </label>
                <div className='h-8 text-red-800'>
                    {typeof errors.name?.message == 'string' && <p className='pt-1 px-1'>{errors.name.message}</p>}
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    Surname:
                    <input type="text" className="grow" defaultValue={`${session?.user?.surname}`} placeholder={`${session?.user?.surname}`} {...register("surname")} />
                </label>
                <div className='h-8 text-red-800'>
                    {typeof errors.surname?.message == 'string' && <p className='pt-1 px-1'>{errors.surname.message}</p>}
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    Email:
                    <input type="text" className="grow" defaultValue={`${session?.user?.email}`} placeholder={`${session?.user?.email}`} {...register("email")} />

                </label>
                <div className='h-8 text-red-800'>
                    {typeof errors.email?.message == 'string' && <p className='pt-1 px-1'>{errors.email.message}</p>}
                </div>

                <label className="input input-bordered flex items-center gap-2 my-3 ">
                    Membership Type:
                    <input type="text" className="grow capitalize" value={`${session?.user?.membership_type}`} readOnly />
                </label>
                {session?.user?.membership_type === 'company' && (
                    <>
                        <label className="input input-bordered flex items-center gap-2 my-3">
                            Company ID:
                            <input type="text" className="grow" defaultValue={`${session?.user?.companyID}`} {...register("companyID")} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-3">
                            Company Name:
                            <input type="text" className="grow" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </label>
                    </>
                )}

                <button onClick={handleSubmit((data) => console.log(data))} className="btn text-white/75 bg-template1 hover:bg-slate-800 my-5 w-[250px]">Save Changes</button>

            </form>

            <hr className='border-2 border-template1' />
            <div className='flex flex-col gap-y-3'>
                <h3 className='pt-2'>Request Account Deletion
                </h3>
                <p className='font-extralight'>On request, a team member will delete your Perma.cc account. It may take up to one full business day for us to process your request. Please note that the deletion of your account will not affect the visibility of any Perma Links you have created.</p>

                <p>If you have any questions, please contact us.</p>

                <button className='btn bg-template1 hover:bg-red-700 text-white/75 w-[250px]'>Delete My Account!</button>
            </div>

        </>
    )
}
export default Profile
