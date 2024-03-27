package com.partyplanner.nandhini.service;

import java.util.List;

import com.partyplanner.nandhini.dto.request.EventRequest;
import com.partyplanner.nandhini.dto.request.VenueRequest;
import com.partyplanner.nandhini.dto.response.EventResponse;
import com.partyplanner.nandhini.dto.response.VenueResponse;
import com.partyplanner.nandhini.model.Event;

public interface EventService{
EventResponse createEvent(EventRequest request);
List<Event> getAllEvents();

    EventResponse deleteEvent(Long Id);
    EventResponse updateEvent(Long Id,EventRequest request);
    Long countEvents();

}
