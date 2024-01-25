package com.gptclone.bakend.service;

import com.gptclone.bakend.model.Conversation;
import com.gptclone.bakend.model.Message;
import com.gptclone.bakend.model.User;
import com.gptclone.bakend.repository.ConversationRepository;
import com.gptclone.bakend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ConversationService {
    private final ConversationRepository conversationRepository;
    private final UserRepository userRepository;


    public Conversation createConversation(String userId){
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        Conversation conversation = Conversation.builder()
                .title("New chat")
                .messages(new ArrayList<>())
                .build();
        conversationRepository.save(conversation);

        user.getConversations().add(conversation);
        userRepository.save(user);
        return conversation;
    }

    public List<Message> getMessagesByConversationId(String conversationId){
        return conversationRepository.findById(conversationId).get().getMessages();
    }

    public Message sendMessage(String conversationId, String content){
        List<Message> messageList = getMessagesByConversationId(conversationId);

        Message userMessage = Message.builder()
                .content(content)
                .role("user")
                .timestamp(LocalDateTime.now())
                .build();

        Message systemMessage = Message.builder()
                .content("Generate Response for this message '"+content+"' Using ChatGPT")
                .role("system")
                .timestamp(LocalDateTime.now())
                .build();

        messageList.add(userMessage);
        messageList.add(systemMessage);

        Conversation conversation = conversationRepository.findById(conversationId).get();
        conversation.getMessages().add(userMessage);
        conversation.getMessages().add(systemMessage);


        if(messageList.size() == 2){
            conversation.setTitle("Title: "+conversation.getId());
        }

        conversationRepository.save(conversation);

        return systemMessage;
    }

    /*private String callChatGPTAPI(String input){

    }*/
}
