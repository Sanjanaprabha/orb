export const arrayItems =[
    {
        name:"Q&A",
        id:"Q&A",
        description:"Act as a content writer,answers basic Question answers",
        option:{
            model: "text-davinci-003",
            temperature: 1,
            max_tokens: 2500,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
             
        }
    },
    {
        name:"Language Translation",
        id:"languagetranslation",
        description:"Translate english to other languages ",
        option:{
            model: "text-davinci-003",
            prompt: "Translate this into 1. French, 2. Spanish and 3. Japanese:\n\nWhat rooms do you have available?\n\n1.",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
             
        }
    },
    {
        name:"Image Generation",
        id:"image generation",
        description:"Generates exact or similar images according to the input taken by the user ",
        
    },
    {
        name:"Querry Generator",
        id:"Querry",
        description:"This feature generates SQL querry according to the text written by the user",
        option:{
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
           
        }
    },
    {
        name:"Grammer Correction",
        id:"grammerCorrection",
        description:"this corrects grammatical errors from the user input ",
        option:{
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            
        }
    },
    {
        name:"about Movies",
        id:"aboutMovies",
        description:"This feature gives us brief description about any movie ",
        option:{
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
           
        }
    },


]