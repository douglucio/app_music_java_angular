package net.ronaldoreis.apimusic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.ronaldoreis.apimusic.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
