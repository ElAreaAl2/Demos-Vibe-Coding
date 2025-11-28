package com.example.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "cellphones")
public class CellPhone {
    @Id
    private String id;
    private String number;
    private String brand;
    private String model;
}
