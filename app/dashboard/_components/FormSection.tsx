"use client"
import React, { useState } from 'react'
import { ArrowLeft, CodeXmlIcon, Loader2Icon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button';
import chatSession from '@/utils/AIModel'

interface PROPS {
    useformdata:any;
    loading:boolean;
}

function FormSection({useformdata,loading}:PROPS) {

    const [formdata,setformdata] = useState<any>();
    

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        useformdata(formdata);

        
    }


    const handleOnChange = (event:any) =>{
        const {name,value} = event.target;
        setformdata({...formdata,[name]:value})
    }

  return (
    <div className=' w-full p-5 shadow-md border rounded-lg bg-white'>
        <div className="icon w-full flex justify-center">
            <CodeXmlIcon width={50} height={50}/>
        </div>
        <div className="codegen my-5">
            <h1 className='font-bold text-lg'>Code Generation</h1>
        </div>
        <div className="desc font-light text-gray-500">
            <p><i>CodeGen useful for simplifying repetitive coding tasks, providing quick solutions, and enhancing productivity by minimizing the time spent writing verbose code...</i></p>
        </div>
        <div className="formm mt-3">
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="inputt" className='font-semibold '>Write the Decsription Of Code you want to generate..</label>
                    <Textarea name='inputt' onChange={handleOnChange} rows={11} required={true}/>
                </div>
                <Button type='submit' className='w-full my-6'>
                    {loading&&<Loader2Icon className='animate-spin'/>}
                    Generate!!</Button>
            </form>
        </div>

    
    </div>
  )
}

export default FormSection
