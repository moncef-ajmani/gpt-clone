package com.gptclone.bakend.controller;

import com.gptclone.bakend.DTOs.FirstMessageRequestDTO;
import com.gptclone.bakend.entity.Conversation;
import com.gptclone.bakend.model.Message;
import com.gptclone.bakend.service.ConversationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/conversations")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")

public class ConversationController {
    private final ConversationService conversationService;
    @PostMapping
    public FirstMessageRequestDTO sendFisrtMessage(@RequestBody String content){

        return conversationService.sendFirstMessage(content);
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
