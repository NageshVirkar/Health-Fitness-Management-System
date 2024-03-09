package project.gym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.gym.dto.InventoryItemDto.InventoryItemDto;
import project.gym.mapper.InventoryItemMapper;
import project.gym.pojos.InventoryItem;
import project.gym.services.IInventoryService;

@RestController
@RequestMapping("/inventory")
@CrossOrigin("*")
public class InventoryItemController {
	@Autowired
	private IInventoryService iInventoryService;

	@PostMapping("/addItem")
	public ResponseEntity<String> addInventory(@RequestBody InventoryItem inventoryItem) {

		iInventoryService.saveItem(inventoryItem);
		return new ResponseEntity<>("Item Add successfully", HttpStatus.OK);
	}

	@GetMapping("/getAllItem")
	public List<InventoryItemDto> getAllItems() {
		List<InventoryItem> items = iInventoryService.getAllItems();
		return InventoryItemMapper.entityListToResponseDtoList(items);
	}

	@PutMapping("/updateItem/{id}")
	public ResponseEntity<InventoryItemDto> updateItemsById(@PathVariable Long id,
			@RequestBody InventoryItemDto inventoryItemResponseDto) {
		try {
			InventoryItem updatedItems = iInventoryService.updateItem(id,
					InventoryItemMapper.dtoToEntity(inventoryItemResponseDto));
			return ResponseEntity.ok(InventoryItemMapper.entityToResponseDto(updatedItems));
		} catch (Exception e) {
			// Handle exception properly
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getItembyid/{id}")
	public ResponseEntity<InventoryItemDto> getItemById(@PathVariable Long id) {
		try {
			InventoryItem items = iInventoryService.getItemById(id);
			return ResponseEntity.ok(InventoryItemMapper.entityToResponseDto(items));
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteItem/{id}")
	public ResponseEntity<String> deleteItem(@PathVariable Long id) {
		try {
			String result = iInventoryService.deleteItem(id);
			return ResponseEntity.ok(result);
		} catch (Exception e) {
			// Handle exception properly
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
