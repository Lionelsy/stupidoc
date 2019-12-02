package com.xingx.stupidoc.controller;

import com.xingx.stupidoc.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@Slf4j
public class LoginController {

    @GetMapping("/login/{user}/{password}")
    @CrossOrigin
    public boolean login(@PathVariable String user,@PathVariable String password) {
        log.info("received username={}, password={}", user, password);
        return true;
    }

}
