package com.partyplanner.nandhini.service;

import com.partyplanner.nandhini.dto.response.BasicResponse;
import com.partyplanner.nandhini.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
