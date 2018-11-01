package io.hackages.hackjam.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Patient entity.
 */
public class PatientDTO implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 2971323109216760636L;

	private Long id;

    private String name;

    private String location;

    private Integer age;

    private Boolean accepted;

        
    public PatientDTO() {
		super();
	}

	public PatientDTO(Long id, String name, String location, Integer age, Boolean accepted) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.age = age;
		this.accepted = accepted;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Boolean isAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        PatientDTO patientDTO = (PatientDTO) o;
        if (patientDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), patientDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "PatientDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", location='" + getLocation() + "'" +
            ", age=" + getAge() +
            ", accepted='" + isAccepted() + "'" +
            "}";
    }
}
