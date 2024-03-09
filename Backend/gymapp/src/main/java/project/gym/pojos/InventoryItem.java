package project.gym.pojos;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name = "inventory")
@Data
public class InventoryItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "item_id")
	private Long itemID;

	@Column(name = "item_name")
	private String itemName;

	@Column(name = "quantity")
	private int quantity;

	@Column(name = "category")
	private String category;

	@Column(name = "location")
	private String location;

}
