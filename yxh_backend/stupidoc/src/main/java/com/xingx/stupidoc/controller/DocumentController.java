package com.xingx.stupidoc.controller;

import com.xingx.stupidoc.model.Document;
import com.xingx.stupidoc.model.Folder;
import com.xingx.stupidoc.repository.DocumentRepository;
import com.xingx.stupidoc.repository.FolderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DocumentController {

    private final Logger log = LoggerFactory.getLogger(DocumentController.class);
    private DocumentRepository repository;
    private FolderRepository folderRepository;

    public DocumentController(DocumentRepository repository, FolderRepository folderRepository) {
        this.repository = repository;
        this.folderRepository = folderRepository;
    }

    @GetMapping("/documents")
    Collection<Document> documents() {
        return repository.findAll();
    }

    @GetMapping("/document/{id}")
    ResponseEntity<?> getDocument(@PathVariable Integer id) {
        Optional<Document> document = repository.findById(id);
        return document.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/document")
    ResponseEntity<Document> createDocument(@Valid @RequestBody Document document) throws URISyntaxException {
        log.info("Request to create document: {}", document);
        Document result = repository.save(document);
        return ResponseEntity.created(new URI("/api/document/" + result.getId())).body(result);
    }

    @DeleteMapping("/document")
    void deleteDocument(@Valid @RequestBody Document document) {
        log.info("Request to create document: {}", document);
        repository.delete(document);
    }

    @GetMapping("/folder/{id}")
    ResponseEntity getFolder(@PathVariable Integer id) {
        Optional<Folder> folder = folderRepository.findById(id);
        return folder.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
