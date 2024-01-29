package com.gptclone.bakend.DTOs;

import com.gptclone.bakend.entity.Conversation;
import com.gptclone.bakend.model.Message;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FirstMessageRequestDTO {
    private String conversationId;
    private Message message;
}
