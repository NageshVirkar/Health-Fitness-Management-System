package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import project.gym.customException.NotFoundException;
import project.gym.dao.IInventoryItem;
import project.gym.pojos.InventoryItem;
import project.gym.pojos.Trainer;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService implements IInventoryService {

	@Autowired
	private final IInventoryItem inventoryDAO;

	public InventoryService(IInventoryItem inventoryDAO) {
		this.inventoryDAO = inventoryDAO;
	}

	@Override
	public InventoryItem getItemById(Long itemId) {
		return inventoryDAO.findById(itemId).orElse(null);
	}

	@Override
	public List<InventoryItem> getAllItems() {
		return inventoryDAO.findAll();
	}

	@Override
	public InventoryItem saveItem(InventoryItem item) {
		return inventoryDAO.save(item);
	}

	@Override
	public String deleteItem(Long itemId) {
		try {
			inventoryDAO.deleteById(itemId);

			return "Inventory with ID " + itemId + " has been deleted.";
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException("Inventory not found with ID: " + itemId);
		} catch (DataAccessException e) {
			throw new RuntimeException("Error deleting Inventory with ID: " + itemId, e);
		}
	}

	@Override
	public InventoryItem updateItem(Long itemId, InventoryItem updatedinventoryItem) {

		Optional<InventoryItem> optionalInventoryItem = inventoryDAO.findById((long) itemId);
		if (optionalInventoryItem.isPresent()) {
			InventoryItem existingInventoryItem = optionalInventoryItem.get();
			if (updatedinventoryItem.getItemName() != null && !updatedinventoryItem.getItemName().isEmpty()) {
				existingInventoryItem.setItemName(updatedinventoryItem.getItemName());
			}
			if (updatedinventoryItem.getQuantity() != 0 && updatedinventoryItem.getQuantity() > 0) {
				existingInventoryItem.setQuantity(updatedinventoryItem.getQuantity());
			}
			if (updatedinventoryItem.getCategory() != null && !updatedinventoryItem.getCategory().isEmpty()) {
				existingInventoryItem.setCategory(updatedinventoryItem.getCategory());
			}
			if (updatedinventoryItem.getLocation() != null && !updatedinventoryItem.getLocation().isEmpty()) {
				existingInventoryItem.setLocation(updatedinventoryItem.getLocation());
			}

			return inventoryDAO.save(existingInventoryItem);
		} else {
			throw new NotFoundException("InventoryItem not found with ID: " + itemId);
		}
	}
}
