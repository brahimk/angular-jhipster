package io.hackages.hackjam.service.mapper;

import io.hackages.hackjam.domain.Patient;
import io.hackages.hackjam.service.dto.BecomePatientDTO;

import org.mapstruct.Mapper;

/**
 * Mapper for the entity Patient and its DTO BecomePatientDTO.
 */
@Mapper(componentModel = "spring", uses = {  })
public interface BecomePatientMapper
    extends EntityMapper<BecomePatientDTO, Patient> {

    @Override
    /**
     * Have to map accepted field to false automatically
     */
    Patient toEntity(BecomePatientDTO dto);

    default Patient fromId(Long id) {
        if (id == null) {
            return null;
        }
        Patient patient = new Patient();
        patient.setId(id);
        return patient;
    }

}

