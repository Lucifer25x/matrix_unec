// Variables for Ollama
const localhost = "http://127.0.0.1";
const default_port = "11434";
let local_port, ollama_local, ollama_local_api;

// ----------------------------
// USAGE OF THE API

// isRunning(ollama_local)
// .then(res => console.log(res));

// getModels(ollama_local_api)
// .then(models => console.log(models));

// getRunningModels(ollama_local_api)
// .then(models => console.log(models));

// getInformation(ollama_local_api, "llama3.1:latest")
// .then(res => console.log(res));

// loadModel(ollama_local_api, "llama3.1:latest")
// .then(res => console.log(res));

// unloadModel(ollama_local_api, "llama3.1:latest")
// .then(res => console.log(res));

// chatWithModel(ollama_local_api, "llama3.1:latest", "Say hello")
// .then(res => console.log(res));

// ----------------------------

// Events to do after window loads
window.addEventListener("load", () => {
    // Set the default port
    local_port = localStorage.getItem("port") || default_port;
    ollama_local = localhost + ":" + local_port + "/";
    ollama_local_api = ollama_local + "api/";

    // Check if ollama is running
    isRunning(ollama_local)
    .then(res => {
        if(res){
            // Hide the not running window
            document.querySelector(".not_running").classList.add("disappear");
            setTimeout(() => {
                document.querySelector(".not_running").classList.remove("disappear");
                document.querySelector(".not_running").classList.add("hidden");

                // Show the main window
                document.querySelector(".main").classList.remove("hidden");
                document.querySelector(".main").classList.add("appear");
                setTimeout(() => {
                    document.querySelector(".main").classList.remove("appear");
                }, 300)
            }, 300)

            // Get the available models list
            getModels(ollama_local_api)
            .then(models => {
                models.forEach(model => {
                    const option = document.createElement("option");
                    option.setAttribute("value", model.name);
                    option.textContent = model.name;

                    document.getElementById("model_list").appendChild(option);
                })
            });
        } else {
            document.querySelector(".not_running").classList.remove("hidden");
            document.getElementById("open_settings").classList.remove("hidden");
        }

        // Remove loading screen
        document.querySelector(".loading_screen").classList.add("disappear");
        setTimeout(() => {
            document.querySelector(".loading_screen").classList.remove("disappear");
            document.querySelector(".loading_screen").classList.add("hidden");
        }, 300)
    });
})

// Start a chat
document.querySelector(".start").addEventListener("click", () => {
    const model_name = document.getElementById("model_list").value;
    document.querySelector(".chat_window .top .name").textContent = model_name;

    document.querySelector(".loading_screen").classList.remove("hidden");

    // Start the model
    loadModel(ollama_local_api, "llama3.1:latest")
    .then(res => {
        if(res){
            document.querySelector(".main").classList.add("hidden");
            document.querySelector(".chat_window").classList.remove("hidden");

            document.querySelector(".loading_screen").classList.add("hidden");
        } else {
            alert("There was an error!");
        }
    });
})

// Send a message
document.getElementById("send").addEventListener("submit", e => {
    e.preventDefault();

    const msg_input = document.getElementById("message_text");
    const msg_text = msg_input.value;
    const model_name = document.querySelector(".chat_window .top .name").textContent;

    // Make the message appear on the screen
    const msg_user = document.createElement("div");
    msg_user.classList.add("message");
    msg_user.classList.add("user");
    msg_user.textContent = msg_text;

    msg_user.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance(msg_text);
        speechSynthesis.speak(utterance);
    })

    document.querySelector(".messages").appendChild(msg_user);

    // Add animation to the message
    msg_user.classList.add("slide_up");
    setTimeout(() => {
        msg_user.classList.remove("slide_up")

        // Make the message of ai appear on the screen
        const msg_ai = document.createElement("div");
        msg_ai.textContent = "Typing...";
        msg_ai.classList.add("message");
        
        document.querySelector(".messages").appendChild(msg_ai);

        // Add animation to the message
        msg_ai.classList.add("slide_right");
        setTimeout(() => {
            msg_ai.classList.remove("slide_right")
        }, 300);

        // Really chat with ai
        chatWithModel(ollama_local_api, model_name, msg_text, msg_ai)
        .then(res => {
            if(!res){
                alert("There was an error!");
            }
        });

        msg_ai.addEventListener("click", () => {
            let utterance = new SpeechSynthesisUtterance(msg_ai.textContent);
            speechSynthesis.speak(utterance);
        })
    }, 300);

    // Clear the input
    msg_input.value = '';
})

// Stop the chat
document.getElementById("stop_chat").addEventListener("click", () => {
    const model_name = document.querySelector(".chat_window .top .name").textContent;

    unloadModel(ollama_local_api, model_name)
    .then(res => {
        if(res){
            window.location.reload();
        } else {
            alert("There was an error!");
        }
    });
})

// Show the running models
document.getElementById("running_list").addEventListener("click", () => {
    // Hide the main window
    document.querySelector(".main").classList.add("disappear");
    setTimeout(() => {
        document.querySelector(".main").classList.remove("disappear");
        document.querySelector(".main").classList.add("hidden");

        // Show the running models list window
        document.querySelector(".running_list").classList.remove("hidden");
        document.querySelector(".running_list").classList.add("appear");
        setTimeout(() => {
            document.querySelector(".running_list").classList.remove("appear");
        }, 300)
    }, 300)

    getRunningModels(ollama_local_api)
    .then(models => {
        models.forEach(model => {
            document.querySelector(".models").innerHTML = '';
            
            const div = document.createElement("div");
            div.classList.add("running_model");

            const nameDiv = document.createElement("div");
            nameDiv.classList.add("name");
            nameDiv.textContent = model.name;

            const stopRunningBtn = document.createElement("button");
            stopRunningBtn.textContent = "Stop Running";
            stopRunningBtn.classList.add("stop");

            stopRunningBtn.addEventListener("click", () => {
                const resp = confirm("Do you really want to stop the running model?");
                if(resp){
                    unloadModel(ollama_local_api, model.name)
                    .then(res => {
                        if(res){
                            alert("Model was succesfully stopped!");
                            document.querySelector(".models").removeChild(div);
                        } else {
                            alert("There was some error!"); 
                        }
                    });
                }
            })

            div.appendChild(nameDiv);
            div.appendChild(stopRunningBtn);

            document.querySelector(".models").appendChild(div);
        })
    });
})

// Show the settings window
document.getElementById("open_settings").addEventListener("click", () => {
    // Hide the main window
    document.querySelector(".not_running").classList.add("disappear");
    setTimeout(() => {
        document.querySelector(".not_running").classList.remove("disappear");
        document.querySelector(".not_running").classList.add("hidden");

        // Show the settings window
        document.querySelector(".settings").classList.remove("hidden");
        document.querySelector(".settings").classList.add("appear");
        setTimeout(() => {
            document.querySelector(".settings").classList.remove("appear");
        }, 300)
    }, 300)
})

// Don't allow non-number inputs for port
document.getElementById("port").addEventListener("keydown", e => {
    const numbers = "0123456789";
    if(!numbers.includes(e.key) && e.key != "Backspace"){
        e.preventDefault();
    }
})

// Set the default port
document.getElementById("settings").addEventListener("submit", e => {
    e.preventDefault();
    const port = document.getElementById("port");
    if(port.value.length == 0){
        localStorage.setItem("port", default_port);
    } else {
        localStorage.setItem("port", port.value);
    }
    window.location.reload();
})

// Close the running models list
document.getElementById("close_running_list").addEventListener("click", () => {
    // Hide the running models list
    document.querySelector(".running_list").classList.add("disappear");
    setTimeout(() => {
        document.querySelector(".running_list").classList.remove("disappear");
        document.querySelector(".running_list").classList.add("hidden");

        // Show the main window
        document.querySelector(".main").classList.remove("hidden");
        document.querySelector(".main").classList.add("appear");
        setTimeout(() => {
            document.querySelector(".main").classList.remove("appear");
        }, 300)
    }, 300)
})

// Stop all the running models
document.getElementById("stop_all").addEventListener("click", () => {
    const resp = confirm("Do you really want to stop all the running models?");
    if(resp){
        document.querySelector(".models").childNodes.forEach(c => {
            const model_name = c.childNodes[0].textContent;
    
            unloadModel(ollama_local_api, model_name)
            .then(res => {
                if(res){
                    document.querySelector(".models").removeChild(c);
                } else {
                    alert("There was an error!");
                }
            });
        })
    }
})

// Refresh the page
document.getElementById("refresh").addEventListener("click", () => {
    window.location.reload();
})