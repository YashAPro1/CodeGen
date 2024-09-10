"use client"
import React, { useState } from 'react'
import FormSection from './_components/FormSection';
import OutputSection from './_components/OutputSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LogOutIcon } from 'lucide-react'
import Link from 'next/link';
import chatSession from '@/utils/AIModel';

function Dashboard() {

  const [loading,setLoading] = useState<any>(false);
  const [output,setOutput] = useState<any>(false);

  const GenerateCode = async (formdata:any) =>{
    console.log(formdata);
        setLoading(true);
        const Prompt = "Generate the code in the given language specified."

        const finalprompt = JSON.stringify(formdata)+", "+Prompt;
        const result = await chatSession.sendMessage(finalprompt)
        setOutput(result?.response.text());
        setLoading(false);
  }
  return (
    <div className='p-5'>
      <div className='flex justify-between items-center'>
      <Link href={"/"}>
        <Button><ArrowLeft/>Back </Button>
      </Link>
      <Link href={"/"}>
        <Button className='flex items-center gap-1 font-semibold'><LogOutIcon/>LogOut </Button>
      </Link>

      </div>

    <div className=' w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-2 p-5 '>
      {/* form Section */}
      <div className='w-full'>
        <FormSection useformdata = {(formdata:any)=>GenerateCode(formdata)} 
            loading={loading}
          />
      </div>
      {/* OutputSection */}
      <div className='col-span-2'>

      <OutputSection aiOutput={output}/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
