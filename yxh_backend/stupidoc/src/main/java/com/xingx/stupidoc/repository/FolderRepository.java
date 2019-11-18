package com.xingx.stupidoc.repository;

import com.xingx.stupidoc.model.Folder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FolderRepository extends JpaRepository<Folder, Integer> {

    Folder findFolderById(Integer id);

}
