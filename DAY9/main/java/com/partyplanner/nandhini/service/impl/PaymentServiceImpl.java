package com.partyplanner.nandhini.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.partyplanner.nandhini.dto.request.PaymentRequest;
import com.partyplanner.nandhini.dto.response.PaymentResponse;
import com.partyplanner.nandhini.model.Payment;
import com.partyplanner.nandhini.repository.PaymentRepository; // Assuming you have a PaymentRepository
import com.partyplanner.nandhini.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository; // Assuming you have a PaymentRepository

    @Override
    public PaymentResponse createPayment(PaymentRequest request) {
        Payment payment = Payment.builder()
                .userId(request.getUserId())
                .amount(request.getAmount())
                .paidDate(request.getPaidDate())
                .paymentMethod(request.getPaymentMethod())
                .build();

        paymentRepository.save(payment);

        return PaymentResponse.builder()
                .message("Payment created successfully!")
                .build();
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public List<Payment> getPaymentsByUserId(String userId) {
        return paymentRepository.findByUserId(userId);
    }
    @Override
    public Long sumAmounts() {
        return paymentRepository.sumAmounts();
    }
}
