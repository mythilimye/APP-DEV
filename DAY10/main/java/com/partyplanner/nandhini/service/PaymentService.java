package com.partyplanner.nandhini.service;

import java.util.List;

import com.partyplanner.nandhini.dto.request.PaymentRequest;
import com.partyplanner.nandhini.dto.response.PaymentResponse;
import com.partyplanner.nandhini.model.Payment;

public interface PaymentService {
    PaymentResponse createPayment(PaymentRequest request);
    List<Payment> getAllPayments();
    List<Payment> getPaymentsByUserId(String userId);
    // Add additional methods if needed
    Long sumAmounts();
}
