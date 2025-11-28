package com.example.demo.controller;

import com.example.demo.model.CellPhone;
import com.example.demo.repository.CellPhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cellphones")
@CrossOrigin(origins = "http://localhost:4200")
public class CellPhoneController {

    @Autowired
    private CellPhoneRepository cellPhoneRepository;

    @GetMapping
    public List<CellPhone> getAllCellPhones() {
        return cellPhoneRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CellPhone> getCellPhoneById(@PathVariable String id) {
        return cellPhoneRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CellPhone createCellPhone(@RequestBody CellPhone cellPhone) {
        return cellPhoneRepository.save(cellPhone);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CellPhone> updateCellPhone(@PathVariable String id, @RequestBody CellPhone cellPhoneDetails) {
        return cellPhoneRepository.findById(id)
                .map(cellPhone -> {
                    cellPhone.setNumber(cellPhoneDetails.getNumber());
                    cellPhone.setBrand(cellPhoneDetails.getBrand());
                    cellPhone.setModel(cellPhoneDetails.getModel());
                    return ResponseEntity.ok(cellPhoneRepository.save(cellPhone));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCellPhone(@PathVariable String id) {
        if (cellPhoneRepository.existsById(id)) {
            cellPhoneRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
