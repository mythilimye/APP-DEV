package com.partyplanner.nandhini.repository;

import com.partyplanner.nandhini.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Query("SELECT p FROM Payment p WHERE p.userId = :userId")
    List<Payment> findByUserId(@Param("userId") String userId);

    @Query("SELECT SUM(p.amount) FROM Payment p")
    Long sumAmounts();
}
