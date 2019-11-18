package com.xingx.stupidoc.repository;

import com.xingx.stupidoc.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Integer> {

    Document findDocumentById(Integer id);

    Document findDocumentByTitle(String title);
}
