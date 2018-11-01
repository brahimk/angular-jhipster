package io.hackages.hackjam.service.impl;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.hackages.hackjam.domain.Patient;
import io.hackages.hackjam.repository.PatientRepository;
import io.hackages.hackjam.service.PatientService;
import io.hackages.hackjam.service.dto.BecomePatientDTO;
import io.hackages.hackjam.service.dto.PatientDTO;
import io.hackages.hackjam.service.mapper.BecomePatientMapper;
import io.hackages.hackjam.service.mapper.PatientMapper;

/**
 * Service Implementation for managing Patient.
 */
@Service
@Component
@Transactional
public class PatientServiceImpl implements PatientService {

    private final Logger log = LoggerFactory.getLogger(PatientServiceImpl.class);

    @Autowired
    private PatientRepository patientRepository;
    
    @Autowired(required=false)
    private PatientMapper patientMapper;
    
    @Autowired(required=false)
    private BecomePatientMapper becomePatientMapper;
    
	public PatientServiceImpl() {
		
	}
    
	public PatientServiceImpl(PatientRepository patientRepository, PatientMapper patientMapper) {
        this.patientRepository = patientRepository;
        this.patientMapper = patientMapper;
        //this.becomePatientMapper = becomePatientMapper;
    }

    /**
     * Save a patient.
     *
     * @param patientDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public PatientDTO save(PatientDTO patientDTO) {
        log.debug("Request to save Patient : {}", patientDTO);
        Patient patient = patientMapper.toEntity(patientDTO);
        patient = patientRepository.save(patient);
        return patientMapper.toDto(patient);
    }

    @Override
    public PatientDTO save(BecomePatientDTO becomePatientDTO) {
        log.debug("Request to save Patient : {}", becomePatientDTO);
        Patient patient = becomePatientMapper.toEntity(becomePatientDTO);
        patient = patientRepository.save(patient);
        return patientMapper.toDto(patient);
    }

    /**
     * Get all the patients.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<PatientDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Patients");
        return patientRepository.findAll(pageable)
            .map(patientMapper::toDto);
    }


    /**
     * Get one patient by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PatientDTO> findOne(Long id) {
        log.debug("Request to get Patient : {}", id);
        return patientRepository.findById(id)
            .map(patientMapper::toDto);
    }

    /**
     * Delete the patient by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Patient : {}", id);
        patientRepository.deleteById(id);
    }
}
