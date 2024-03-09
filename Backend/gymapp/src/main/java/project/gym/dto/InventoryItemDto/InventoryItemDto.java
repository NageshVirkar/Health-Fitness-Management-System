package project.gym.dto.InventoryItemDto;

import lombok.Data;

@Data
public class InventoryItemDto {
	private String itemName;
	private int quantity;
	private String category;
	private String location;
}
