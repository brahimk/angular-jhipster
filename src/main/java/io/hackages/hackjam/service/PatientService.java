package io.hackages.hackjam.service;

import io.hackages.hackjam.service.dto.BecomePatientDTO;
import io.hackages.hackjam.service.dto.PatientDTO;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Patient.
 */
public interface PatientService {

    /**
     * Save a patient.
     *
     * @param becomePatientDTO the entity to save
     * @return the persisted entity
     */
    PatientDTO save(BecomePatientDTO becomePatientDTO);

    /**
     * Save a patient.
     *
     * @param patientDTO the entity to save
     * @return the persisted entity
     */
    PatientDTO save(PatientDTO patientDTO);

    /**
     * Get all the patients.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<PatientDTO> findAll(Pageable pageable);

    /**
     * Get the "id" patient.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<PatientDTO> findOne(Long id);

    /**
     * Delete the "id" patient.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

}

