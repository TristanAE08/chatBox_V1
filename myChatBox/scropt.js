const KEY = " "
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${KEY}`

const textarea = document.getElementById("question")
const geminiTxt = document.getElementById("response")

async function makeFirstRequest(){



    const question = {
        "contents" : [{
            "parts" :[{
                "text" : textarea.value 
            }]
        }]
    }

    const headers = {
        "Content-Type": "application/jason"
    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(question),
        headers: headers 
    })

    const data = await response.json()

    const text = data.candidates[0].content.parts[0].text

    geminiTxt.innerHTML = text
}

makeFirstRequest()