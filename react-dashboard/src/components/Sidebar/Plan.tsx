import React from 'react'

export const Plan = () => {
  return (
    <div 
    className='flex sticky top-[calc(100vh_-_48px_-_16px)]
    flex-col h-12 border-t px-2 boredr-stone-300 justify-end text-xs'
    
    >
        <div className='flex justify-between items-center'>
            <div>
                <p className='font-bold'>Enterprise</p>
                <p className='text-stone-500'>Pay as you go</p>
            </div>
            <button className='px-2 py-1.5 font-medium bg-stonw-200 hover:bg-stone-300 transiton-colors rounded'>
                Support
            </button>
        </div>

    </div>
  )
}