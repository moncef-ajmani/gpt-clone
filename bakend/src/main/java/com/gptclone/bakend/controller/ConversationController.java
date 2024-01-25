package com.gptclone.bakend.controller;

import com.gptclone.bakend.model.Conversation;
import com.gptclone.bakend.model.Message;
import com.gptclone.bakend.service.ConversationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/conversations")
@RequiredArgsConstructor
public class ConversationController {
    private final ConversationService conversationService;

    @PostMapping("/")
    public Conversation createConversation(@RequestParam String userId){
        System.out.println(userId);
        return conversationService.createConversation(userId);
    }

    @GetMapping("/{conversationId}")
    public List<Message> getMessagesByConversationId(@PathVariable String conversationId) {
        return conversationService.getMessagesByConversationId(conversationId);
    }

    @PostMapping("/{conversationId}")
    public Message sendMessage(@PathVariable String conversationId,@RequestBody String content){
        return conversationService.sendMessage(conversationId,content);
    }
}
