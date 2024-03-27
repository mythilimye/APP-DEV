package com.partyplanner.nandhini.service;

import com.partyplanner.nandhini.dto.request.LoginRequest;
import com.partyplanner.nandhini.dto.request.RegisterRequest;
import com.partyplanner.nandhini.dto.response.LoginResponse;
import com.partyplanner.nandhini.dto.response.RegisterResponse;

public interface AuthenticationService {
RegisterResponse register(RegisterRequest request);
LoginResponse login(LoginRequest request);
}
