package com.partyplanner.nandhini.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.partyplanner.nandhini.model.Event;

public interface EventRepository extends JpaRepository<Event,Long> {

}
