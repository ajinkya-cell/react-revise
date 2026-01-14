import { useEffect, useRef, useState } from "react";


export default function SmartTextEditor() {
    const [text ,setText] = useState("")
    const [showCount , setShowCount] = useState(false)

    const inputRef = useRef<HTMLInputElement | null>(null)
    const keyCountRef = useRef(0)
    const isSubmittingRef = useRef(false);

    useEffect(()=>{
        inputRef.current?.focus();
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value);
        keyCountRef.current+=1;
    }

    const handleReset = ()=>{
        setText("")
        keyCountRef.current=0
        setShowCount(false)
        inputRef.current?.focus();
    };

    const handleSubmit = () => {
    if (isSubmittingRef.current) return;

    isSubmittingRef.current = true;
    console.log("Submitted text:", text);

    // simulate async submit
    setTimeout(() => {
      isSubmittingRef.current = false;
      alert("Submitted successfully!");
    }, 1500);
  };
}

