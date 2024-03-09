package project.gym.services;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

import project.gym.pojos.PaymentRequest;

@Service
public class PaymentServices {

	  private final RazorpayClient razorpayClient;

	    @Autowired
	    public PaymentServices(RazorpayClient razorpayClient) {
	        this.razorpayClient = razorpayClient;
	    }

    public String createOrder(PaymentRequest paymentRequest) throws RazorpayException {
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", paymentRequest.getAmount()); // Amount in paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", paymentRequest.getReceiptId());
        Order order = razorpayClient.orders.create(orderRequest);

        return order.toString();
    }

    // Additional methods for handling payment success callback and other logic
}
