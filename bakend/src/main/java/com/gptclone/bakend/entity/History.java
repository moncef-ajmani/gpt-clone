package com.gptclone.bakend.entity;

import com.gptclone.bakend.model.HistoryItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("histories")
@Builder
public class History {
    @Id
    private String id;
    @Indexed(unique = true)
    private String userId;
    private List<HistoryItem> historyItems;

}
