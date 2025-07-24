
const API_KEY = "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";
const MODEL_NAME = "deepseek/deepseek-r1-0528:free";

async function runChat(prompt) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": "http://localhost:5173/", // Optional
        "X-Title": "steller ai", // Optional
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          {
            role: "system",
            content: "You are an assistant that always responds in English. Never reply in any other language."
          },
          {
            role: "system",
           content: "You are a helpful assistant. Always reply in well-formatted English using bullet points, new lines, or markdown when appropriate.",
          }
          ,

          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();

    const markdownText = data.choices?.[0]?.message?.content || "No response received";
    console.log(markdownText);

    return markdownText;
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return "Error occurred during chat.";
  }
}

export default runChat;












{/* <div>
    // import{
//     GoogleGenerativeAI,
//     HarmCategory ,
//     HarmBlockThreshold,
// } from "@google/generative-ai"

// const MODEL_NAME="gemini-1.5-flash-latest";
// const API_KEY="AIzaSyCAHpmdSUUgKd3Ptygx5q2q2TUw5RvFYqE";

// async function runChat(prompt) {
//     const genAI=new GoogleGenerativeAI(API_KEY);
//     const model=genAI.getGenerativeModel({model:MODEL_NAME})

//     const generationConfig={
//         temperature:0.9,
//         topK:1,
//         topP:1,
//         maxOutputTokens:2048
//     };

//     const saftySettings=[
//         {
//             category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//             threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//         {
//             category:HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//             threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//         {
//             category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//             threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//         {
//             category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//             threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//     ];

//     const chat=model.startChat({
//         generationConfig,
//        saftySettings,
//         history:[

//         ],

//     });

//     const result=await chat.sendMessage(prompt)
//     const response=result.response;
//     const res=response.text();
//     return res;


    
// }

// export default runChat;

// const apiKey='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';

// async function runChat(){
// const respone=await fetch("https://openrouter.ai/api/v1/chat/completions", {
//   method: "POST",
//   headers: {
//     "Authorization": "Bearer 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 ",
//     "HTTP-Referer": "http://localhost:5173/", // Optional. Site URL for rankings on openrouter.ai.
//     "X-Title": "steller ai", // Optional. Site title for rankings on openrouter.ai.
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     "model": "deepseek/deepseek-r1-0528:free",
//     "messages": [{"role": "user","content": prompt,}]
//   })
// }
// );
// const data=await respone.json();
// console.log(data)
// const markdownText=data.choices?.[0]?.message?.content || 'No response recieved';
// console.log(markdownText)

// }
// export default runChat;









//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

</div> */}

