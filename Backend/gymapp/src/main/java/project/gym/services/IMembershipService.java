package project.gym.services;

import java.util.List;

import project.gym.pojos.Membership;
import project.gym.pojos.Trainer;

public interface IMembershipService {
	Membership getMembershipById(Long membershipId);

	List<Membership> getAllMemberships();

	Membership saveMembership(Membership membership);

	String deleteMembership(Long membershipId);

	Membership updateMembership(Long membershipId, Membership updatedMembership);
}
