export async function sendMessageToChatbot(message) {
// end up for proxt server 
  const apiUrl = "http://localhost:8000/chat";  
  console.log("API URL:", apiUrl);
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,  
    }),
  });

  const data = await response.json();
  console.log("FULL API RESPONSE:", data);

  return data.reply; 
}
