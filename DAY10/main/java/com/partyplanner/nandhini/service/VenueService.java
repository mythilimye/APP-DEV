package com.partyplanner.nandhini.service;

import java.util.List;

import com.partyplanner.nandhini.dto.request.VenueRequest;
import com.partyplanner.nandhini.dto.response.VenueResponse;
import com.partyplanner.nandhini.model.Venue;

public interface VenueService {
    VenueResponse createVenue(VenueRequest request);

    List<Venue> getAllVenues();

    void deleteVenue(Long venueId);


    

}
