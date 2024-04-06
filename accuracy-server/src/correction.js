const Express = require('express')
const router = Express()

router.post('/solve',async(req,res,next)=>{
    
    const OpenAI = require('openai')
    const OPENAI_API_KEY = "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"
    
    const openai = new OpenAI({apiKey:OPENAI_API_KEY});
    const data = req.body;
    // console.log(req.body);

    const aiModel = "gpt-3.5-turbo"
    
    const messages = [
        {
            role:'system',
            content:' you are a helpful assistant who can fix the grammatical, lexical and spelling error. '
        },
        {
            role:'user',
            content:`fix the grammatical, lexical and spelling error in the text: ${data.text}. `
        }
    ]
    
    const complition = await openai.chat.completions.create({
        model: aiModel,
        messages:messages
    })

    const aiResponse = complition.choices[0].message.content
    console.log('AI RESPONSE - ', aiResponse);

    res.json(aiResponse)
})

module.exports = router
