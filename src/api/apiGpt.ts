import key from './key.json'

const {API_KEY} = key

export interface IGptMessage {
    [x: string]: any;
    role: string,
    content: string
}

export const fetchGpt = async (message: string) => {
    return await fetch("https://api.openai.com/v1/chat/completions",
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo-1106",
                "messages": [
                    {
                        "role": "system",
                        "content": "You are an professional React programmer 5 yesrs exp."
                    },
                    {
                        "role": "user",
                        "content": message
                    }
                ]
            })
        }
    ).then(data => data.json()).then(resp => resp);
}