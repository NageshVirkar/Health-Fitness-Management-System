package project.gym.dao;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

    import project.gym.pojos.InventoryItem;

	@Repository
	public interface IInventoryItem extends JpaRepository<InventoryItem, Long> {
	    // You can add custom query methods if needed
	}


