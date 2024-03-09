package project.gym.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import project.gym.customException.InvalidRegistrationException;
import project.gym.dto.MembershipDto.MembershipDto;
import project.gym.pojos.Membership;
import project.gym.pojos.Users;

@Component
public class MembershipMapper {

	public static MembershipDto entityToDto(Membership membership) {
		if (membership == null) {
			throw new IllegalArgumentException("Membership entity cannot be null");
		}

		MembershipDto dto = new MembershipDto();
		dto.setMembershipID(membership.getMembershipID());
		dto.setUserId(membership.getUser().getUserId());
		dto.setMembershipType(membership.getMembershipType());
		dto.setRegistrationDate(membership.getRegistrationDate());
		dto.setRenewalDate(membership.getRenewalDate());
		dto.setExpirationDate(membership.getExpirationDate());
		return dto;
	}

	public static List<MembershipDto> entityListToDtoList(List<Membership> memberships) {
		return memberships.stream().map(MembershipMapper::entityToDto).collect(Collectors.toList());
	}

	public static Membership dtoToEntity(MembershipDto dto, Users users) {
		if (dto == null) {
			throw new InvalidRegistrationException("Invalid membership DTO: MembershipDto is null");
		}

		// Validate required fields
		if (StringUtils.isEmpty(dto.getMembershipType()) || dto.getRegistrationDate() == null
				|| dto.getRenewalDate() == null || dto.getExpirationDate() == null) {
			throw new InvalidRegistrationException("Invalid membership DTO: Missing required fields");
		}

		Membership membership = new Membership();
		membership.setMembershipID(dto.getMembershipID());
		if (users != null) {
			membership.setUser(users.getUserById(dto.getUserId()));
		}
		membership.setMembershipType(dto.getMembershipType());
		membership.setRegistrationDate(dto.getRegistrationDate());
		membership.setRenewalDate(dto.getRenewalDate());
		membership.setExpirationDate(dto.getExpirationDate());
		return membership;
	}
}
