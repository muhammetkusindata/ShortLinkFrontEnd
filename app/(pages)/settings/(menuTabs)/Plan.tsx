import React from 'react'

const Plan = () => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
      <div className='w-[200px] h-[200px] border-2 border-template1 rounded-lg p-4 flex flex-col gap-y-4 cursor-pointer'>
        <h1 className='font-semibold text-xl'>For Personel Use</h1>
        <h2>Fee: Free</h2>
        <p>Limit: 10 Links</p>
        <button className='btn bg-template1 hover:bg-template1 text-white/75'>Current Plan</button>
      </div>

      <div className='w-[200px] h-[200px] border-2 border-template1 rounded-lg p-4 flex flex-col gap-y-4 cursor-pointer'>
        <h1 className='font-semibold text-xl'>For Group Use</h1>
        <h2>Fee: $50</h2>
        <p>Limit: 100 Links</p>
        <button className='btn btn-active btn-accent'>Select Plan</button>
      </div>

      <div className='w-[200px] h-[200px] border-2 border-template1 rounded-lg p-4 flex flex-col gap-y-4 cursor-pointer'>
        <h1 className='font-semibold text-xl'>For Company Use</h1>
        <h2>Fee: $500</h2>
        <p>Limit: Unlimited Links</p>
        <button className='btn btn-active btn-accent'>Select Plan</button>
      </div>
    </div>
  )
}

export default Plan