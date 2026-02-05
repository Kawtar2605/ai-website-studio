    setToolInUse
  )
}

export const handleHostedChat = async (
  payload: ChatPayload,
  profile: Tables<"profiles">,
  modelData: LLM,
  tempAssistantChatMessage: ChatMessage,
  isRegeneration: boolean,
  newAbortController: AbortController,
  newMessageImages: MessageImage[],
  chatImages: MessageImage[],
  setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>,
  setFirstTokenReceived: React.Dispatch<React.SetStateAction<boolean>>,
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  setToolInUse: React.Dispatch<React.SetStateAction<string>>
) => {
  const provider =
    modelData.provider === "openai" && profile.use_azure_openai
      ? "azure"
      : modelData.provider

  let draftMessages = await buildFinalMessages(payload, profile, chatImages)

  let formattedMessages : any[] = []
  let formattedMessages: any[] = []
  if (provider === "google") {
    formattedMessages = await adaptMessagesForGoogleGemini(payload, draftMessages)
    formattedMessages = await adaptMessagesForGoogleGemini(
      payload,
      draftMessages
    )
  } else {
    formattedMessages = draftMessages
  }

  const apiEndpoint =
    provider === "custom" ? "/api/chat/custom" : `/api/chat/${provider}`

  const requestBody = {
    chatSettings: payload.chatSettings,
    messages: formattedMessages,
    customModelId: provider === "custom" ? modelData.hostedId : ""
  }

  const response = await fetchChatResponse(
    apiEndpoint,
    requestBody,
    true,
    newAbortController,
    setIsGenerating,
    setChatMessages
  )

  return await processResponse(
    response,
    isRegeneration