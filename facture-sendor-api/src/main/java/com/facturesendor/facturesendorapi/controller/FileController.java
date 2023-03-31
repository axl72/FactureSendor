package com.facturesendor.facturesendorapi.controller;


import com.facturesendor.facturesendorapi.service.FileServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController    //Especificamos que es un controlador
@RequestMapping("/files")    // especificamos la ruta de nuestro controlador
public class FileController {

    @Autowired
    private FileServiceAPI fileServiceAPI;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFiles(@RequestParam("files") List<MultipartFile> files){
        try{
            fileServiceAPI.save(files);
            return ResponseEntity.status(HttpStatus.OK).body("ok");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error");
        }
    }
}
