package com.gptclone.bakend.service;

import com.gptclone.bakend.DTOs.ChatGPTRequest;
import com.gptclone.bakend.DTOs.ChatGPTResponse;
import com.gptclone.bakend.DTOs.FirstMessageRequestDTO;
import com.gptclone.bakend.entity.Conversation;
import com.gptclone.bakend.entity.History;
import com.gptclone.bakend.model.*;
import com.gptclone.bakend.repository.ConversationRepository;
import com.gptclone.bakend.repository.HistoryRepository;
import com.gptclone.bakend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ConversationService {
    private final ConversationRepository conversationRepository;
    private final UserRepository userRepository;
    private final RestTemplate restTemplate;
    private final HistoryService historyService;
    private final HistoryRepository historyRepository;


    public Conversation createConversation(){
        Conversation conversation = Conversation.builder()
                .messages(new ArrayList<>())
                .build();
        conversationRepository.save(conversation);
        return conversation;
    }

    public List<Message> getMessagesByConversationId(String conversationId){
        Optional<Conversation> conversation =  conversationRepository.findById(conversationId);
        if (conversation.isPresent()){
            return conversation.get().getMessages();
        }
        return new ArrayList<>();
    }

    public FirstMessageRequestDTO sendFirstMessage(String content){

        History history = historyService.getHistory();

        Conversation conversation = conversationRepository.save(new Conversation(null,new ArrayList<>()));

        HistoryItem historyItem = new HistoryItem();
        historyItem.setConversationId(conversation.getId());
        Message message = sendMessage(conversation.getId(),content);

        String conversationTitle = getConversationTitle("give me a title for this message in maximum 5 words describe the needs'"+message.getContent()+"'");
        historyItem.setTitle(conversationTitle);

        history.getHistoryItems().add(historyItem);
        historyRepository.save(history);

        return FirstMessageRequestDTO.builder()
                .message(message)
                .conversationId(conversation.getId())
                .build();
    }
    public String getConversationTitle(String content){
        List<ChatMessage> chatMessageList = new ArrayList<>();
        chatMessageList.add(ChatMessage.builder()
                        .role("user")
                        .content(content)
                        .build());
        ChatGPTRequest chatGPTRequest = new ChatGPTRequest("gpt-3.5-turbo",chatMessageList);
        ChatGPTResponse chatGPTResponse = restTemplate.postForObject("https://api.openai.com/v1/chat/completions", chatGPTRequest, ChatGPTResponse.class);

        return chatGPTResponse.getChoices().get(0).getMessage().getContent();
    }
    public Message sendMessage(String conversationId, String content){

        Message userMessage = Message.builder()
                .content(content)
                .role("user")
                .timestamp(LocalDateTime.now())
                .build();

        String messageGPT = callChatGPTAPI(conversationId,content);

        Message systemMessage = Message.builder()
                .content(messageGPT)
                .role("system")
                .timestamp(LocalDateTime.now())
                .build();

        Conversation conversation = conversationRepository.findById(conversationId).get();

        conversation.getMessages().add(userMessage);
        conversation.getMessages().add(systemMessage);

        System.out.println(conversation.getMessages());

        conversationRepository.save(conversation);

        return systemMessage;
    }

    private String callChatGPTAPI(String conversationId,String prompt){
        List<ChatMessage> chatMessageList = new ArrayList<>();

        if(getMessagesByConversationId(conversationId) != null){
            chatMessageList = getMessagesByConversationId(conversationId).stream().map(m->{
                ChatMessage chatMessage = ChatMessage.builder()
                        .role(m.getRole())
                        .content(m.getContent())
                        .build();
                return chatMessage;
            }).collect(Collectors.toList());
        }

         ChatMessage promptMesssage = ChatMessage.builder()
                 .role("user")
                 .content(prompt)
                 .build();

         chatMessageList.add(promptMesssage);

        ChatGPTRequest chatGPTRequest = new ChatGPTRequest("gpt-3.5-turbo",chatMessageList);
        ChatGPTResponse chatGPTResponse = restTemplate.postForObject("https://api.openai.com/v1/chat/completions", chatGPTRequest, ChatGPTResponse.class);

        return chatGPTResponse.getChoices().get(0).getMessage().getContent();
    }
}
