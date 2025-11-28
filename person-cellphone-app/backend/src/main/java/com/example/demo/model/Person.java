package com.example.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "persons")
public class Person {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private int age;

    @DBRef
    private CellPhone cellPhone;
}
