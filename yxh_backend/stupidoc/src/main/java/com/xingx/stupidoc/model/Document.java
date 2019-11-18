package com.xingx.stupidoc.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "document")
@Data
public class Document {

    @Id
    @GeneratedValue
    private Integer id;
    @NonNull
    private String title;
    private String type;
    private String description;
    @Lob
    private String content;
    private Long createTime;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<User> users;

}
