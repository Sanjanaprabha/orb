import { useState } from 'react'
import { Configuration,OpenAIApi } from 'openai'


const Image_gen = () => {
    const [prompt, setPrompt]=useState(" ");
    const [result,setresult] = useState(" ");
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPEN_AI_KEY,
      });
    
      const openai = new OpenAIApi(configuration);

      const generateImage = async ()=>{

        const res= await openai.createImage({
          
            prompt: prompt,
            n:1,
            size:"1024x1024"
            
          });
          setresult(res.data.data[0].url);
      };
return (
<div className='app-main'>
    <h3>Generate an Image</h3>
    <input type="text"
    className='app-input'
    placeholder='Type something to generate an image' 
    onChange={(e)=>setPrompt(e.target.value)}/>
    <button onClick={generateImage}>generate image</button>
    {result.length >0 ? <img src={result} alt="result"/> : <></>}
</div>
   );
}

export default Image_gen


