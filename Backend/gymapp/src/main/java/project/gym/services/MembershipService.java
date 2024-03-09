package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import project.gym.customException.NotFoundException;
import project.gym.dao.IMembership;
import project.gym.pojos.Membership;

import java.util.List;
import java.util.Optional;

@Service
public class MembershipService implements IMembershipService {
	@Autowired
	private final IMembership membershipDAO;

	public MembershipService(IMembership membershipDAO) {
		this.membershipDAO = membershipDAO;
	}

	@Override
	public Membership getMembershipById(Long membershipId) {
		return membershipDAO.findById(membershipId).orElse(null);
	}

	@Override
	public List<Membership> getAllMemberships() {
		return membershipDAO.findAll();
	}

	@Override
	public Membership saveMembership(Membership membership) {
		return membershipDAO.save(membership);
	}

	@Override
	public String deleteMembership(Long membershipId) {
		try {
			membershipDAO.deleteById(membershipId);
			return "Membership with ID " + membershipId + " has been deleted.";
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException("Membership not found with ID: " + membershipId);
		} catch (DataAccessException e) {
			throw new RuntimeException("Error deleting Membership with ID: " + membershipId, e);
		}
	}

	@Override
	public Membership updateMembership(Long membershipId, Membership updatedMembership) {
		Optional<Membership> optionalMembership = membershipDAO.findById((Long) membershipId);
		if (optionalMembership.isPresent()) {
			Membership existingMembership = optionalMembership.get();
			if (updatedMembership.getRegistrationDate() != null) {
				existingMembership.setRegistrationDate(updatedMembership.getRegistrationDate());
			}
			if (updatedMembership.getExpirationDate() != null) {
				existingMembership.setExpirationDate(updatedMembership.getExpirationDate());
			}
			if (updatedMembership.getMembershipType() != null) {
				existingMembership.setMembershipType(updatedMembership.getMembershipType());
			}
			if (updatedMembership.getRenewalDate() != null) {
				existingMembership.setRenewalDate(updatedMembership.getRenewalDate());
			}
			return membershipDAO.save(existingMembership);
		} else {
			throw new NotFoundException("membershipId not found with ID: " + membershipId);
		}
	}
}
