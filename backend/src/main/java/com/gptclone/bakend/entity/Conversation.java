package com.gptclone.bakend.entity;

import com.gptclone.bakend.model.Message;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("conversations")
public class Conversation {
    @Id
    private String id;
    private List<Message> messages;
}
