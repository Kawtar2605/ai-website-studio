 })

  if (messageFileItems.length > 0) {
    const retrievalText = buildRetrievalText(messageFileItems)

    finalMessages[finalMessages.length - 1] = {
      ...finalMessages[finalMessages.length - 1],
      content: `${
        finalMessages[finalMessages.length - 1].content
      }\n\n${retrievalText}`
    }
  }

  return finalMessages
}

function buildRetrievalText(fileItems: Tables<"file_items">[]) {
  const retrievalText = fileItems
    .map(item => `<BEGIN SOURCE>\n${item.content}\n</END SOURCE>`)
    .join("\n\n")

  return `You may use the following sources if needed to answer the user's question. If you don't know the answer, say "I don't know."\n\n${retrievalText}`
}

function adaptSingleMessageForGoogleGemini(message: any) {

  let adaptedParts = []

  let rawParts = []
  if(!Array.isArray(message.content)) {
    rawParts.push({type: 'text', text: message.content})
  if (!Array.isArray(message.content)) {
    rawParts.push({ type: "text", text: message.content })
  } else {
    rawParts = message.content
  }

  for(let i = 0; i < rawParts.length; i++) {
  for (let i = 0; i < rawParts.length; i++) {
    let rawPart = rawParts[i]

    if(rawPart.type == 'text') {
      adaptedParts.push({text: rawPart.text})
    } else if(rawPart.type === 'image_url') {
    if (rawPart.type == "text") {
      adaptedParts.push({ text: rawPart.text })
    } else if (rawPart.type === "image_url") {
      adaptedParts.push({
        inlineData: {
          data: getBase64FromDataURL(rawPart.image_url.url),
          mimeType: getMediaTypeFromDataURL(rawPart.image_url.url),
          mimeType: getMediaTypeFromDataURL(rawPart.image_url.url)
        }
      })
    }
  }

  let role = 'user'
  if(["user", "system"].includes(message.role)) {
    role = 'user'
  } else if(message.role === 'assistant') {
    role = 'model'
  let role = "user"
  if (["user", "system"].includes(message.role)) {
    role = "user"
  } else if (message.role === "assistant") {
    role = "model"
  }

  return {
    role: role,
    parts: adaptedParts
  }
}

function adaptMessagesForGeminiVision(
  messages: any[]
) {
function adaptMessagesForGeminiVision(messages: any[]) {
  // Gemini Pro Vision cannot process multiple messages
  // Reformat, using all texts and last visual only

  const basePrompt = messages[0].parts[0].text
  const baseRole = messages[0].role
  const lastMessage = messages[messages.length-1]
  const visualMessageParts = lastMessage.parts;
  let visualQueryMessages = [{
    role: "user",
    parts: [
      `${baseRole}:\n${basePrompt}\n\nuser:\n${visualMessageParts[0].text}\n\n`,
      visualMessageParts.slice(1)
    ]
  }]
  const lastMessage = messages[messages.length - 1]
  const visualMessageParts = lastMessage.parts
  let visualQueryMessages = [
    {
      role: "user",
      parts: [
        `${baseRole}:\n${basePrompt}\n\nuser:\n${visualMessageParts[0].text}\n\n`,
        visualMessageParts.slice(1)
      ]
    }
  ]
  return visualQueryMessages
}

export async function adaptMessagesForGoogleGemini(
  payload: ChatPayload,
  messages:  any[]
  messages: any[]
) {
  let geminiMessages = []
  for (let i = 0; i < messages.length; i++) {
    let adaptedMessage = adaptSingleMessageForGoogleGemini(messages[i])
    geminiMessages.push(adaptedMessage)
  }

  if(payload.chatSettings.model === "gemini-pro-vision") {
  if (payload.chatSettings.model === "gemini-pro-vision") {
    geminiMessages = adaptMessagesForGeminiVision(geminiMessages)
  }
  return geminiMessages
}