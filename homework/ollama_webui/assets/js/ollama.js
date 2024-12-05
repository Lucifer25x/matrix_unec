// Check if Ollama is running
async function isRunning(url){
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (err) {
        // console.log("Ollama isn't running. Error: ", err);
        return false;
    }
}

// Get the list of local models
async function getModels(url){
    const response = await fetch(url + "tags");
    const json = await response.json();
    return json.models;
};

// Get the list of running models
async function getRunningModels(url){
    const response = await fetch(url + "ps");
    const json = await response.json();
    return json.models;
}

// Get information about a model
async function getInformation(url, model){
    const data = {
        model: model
    }

    const response = await fetch(url + "show", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json.model_info;
}

// Load a model
async function loadModel(url, model){
    const data = {
        model: model
    }

    const response = await fetch(url + "generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json.done;
}

// Unload a model
async function unloadModel(url, model){
    const data = {
        model: model,
        keep_alive: 0
    }

    const response = await fetch(url + "generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json.done;
}

// Chat with a model with streaming
async function chatWithModel(url, model, prompt, el) {
    const data = {
        model: model,
        prompt: prompt,
        stream: true // Enable streaming
    };

    const response = await fetch(url + "generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.body) {
        throw new Error("ReadableStream is not supported or response body is missing.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let done = false;
    while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;

        if (value) {
            const chunk = decoder.decode(value, { stream: true });
            processChunk(chunk, el);
        }
    }

    return true
}

// Process the chunks
function processChunk(chunk, el) {
    try {
        const data = JSON.parse(chunk);
        if (data.response) {
            if(el.textContent == "Typing..."){
                el.textContent = "";
            }
            el.textContent += data.response;
        }
    } catch (error) {
        console.error("Error processing chunk:", error);
    }
}
