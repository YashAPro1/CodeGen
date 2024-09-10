"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS {
  aiOutput : string
}

function OutputSection({aiOutput}:PROPS) {

  // const editorRef:any =useRef();
  const editorRef = useRef<Editor>(null);
  
  useEffect(()=>{
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(String(aiOutput));
    }
  },[aiOutput])

  const handleCopy = () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard.writeText(markdown).then(() => {
        alert('Copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>

      <div className='flex justify-between items-center p-3'>
        <h2 className='font-bold text-lg'>Your Result</h2>
        <Button className='flex items-center gap-2'><Copy className='' width={15} height={15}/>Copy</Button>
      </div>

      <Editor
        ref = {editorRef}
        initialValue="hello react editor world!"
        height="590px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>{editorRef.current?.getInstance().getMarkdown();}}
      />
    </div>
  )
}

export default OutputSection
