import {useState} from 'react';

import CodeMirror from '@uiw/react-codemirror';
import {markdown, markdownLanguage} from '@codemirror/lang-markdown';
import {languages} from '@codemirror/language-data';

export const NoteEditor = ({
  onSave
}: {
  onSave: (note: {title: string; content: string}) => void;
}) => {
  const [code, setCode] = useState("");
  const [title,setTitle] = useState("");
  return(
    <div className="card mt-5 border-gray-200 bg-base-100 shadow-xl">
    <div className="card-body">
      <div className="card-title">
        <input type="text" className="input-base input input-lg w-full font-bold" 
          placeholder="Note title"
          value={title}
          onChange={e=> setTitle(e.currentTarget.value)}
        />
      </div>
      <CodeMirror 
        value={code}
        width="500px"
        height='30vh'
        minWidth='100%'
        minHeight='30vh'
        extensions={[
          markdown({base: markdownLanguage, codeLanguages: languages})
        ]}
        onChange={v => setCode(v)}
        className="border border-gray-300"
      />
      <div className="card-actions justify-end">
      <button 
        className="btn-primary btn"
        onClick={() => {
          onSave({
            title,
            content: code,
          });
          setCode("");
          setTitle("");
        }}
        disabled={title.trim().length === 0 || code.trim().length === 0}
        >
        Save
      </button>
    </div>
    </div>
</div>
  )
}