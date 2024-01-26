package com.gptclone.bakend.DTOs;

import com.gptclone.bakend.model.ChatMessage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatGPTRequest {
    private String model;
    private List<ChatMessage> messages;

}
