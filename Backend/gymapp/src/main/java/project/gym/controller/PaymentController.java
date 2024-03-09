package project.gym.controller;

import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

import project.gym.pojos.PaymentRequest;

@RestController
@RequestMapping("/payment")
@CrossOrigin("*")
public class PaymentController {

    private final RazorpayClient razorpayClient;

    public PaymentController(RazorpayClient razorpayClient) {
        this.razorpayClient = razorpayClient;
    }

    @PostMapping("/createOrder")
    public ResponseEntity<String> createOrder(@RequestBody PaymentRequest paymentRequest) throws RazorpayException {
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", paymentRequest.getAmount()); // Amount in paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", paymentRequest.getReceiptId());
        Order order = razorpayClient.orders.create(orderRequest);

        return ResponseEntity.ok(order.toString());
    }

    // Additional endpoint to handle payment success callback
    // Implement logic to verify payment signature and update your system accordingly
}

