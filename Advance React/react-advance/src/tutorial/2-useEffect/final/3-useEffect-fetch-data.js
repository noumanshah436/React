import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// second argument

const UseEffectFetchData = () => {

	console.log('start');	
	
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
		// console.log(users);
	};

	// if the useEffect callback function is triggerring re-render ( calling setUsers ),
	// make sure that you add the dependency array in the useEffect functiona as second argument
	// otherwise there will be an infinite loop ( render again and call useEffect again)
	useEffect(() => {
		console.log('useEffect');
		
		getUsers();
	}, []);

	console.log('render');
	
	return (
		<>
			<h3>github users</h3>
			<ul className="users">
				{/* if users array is empty , map will not run obviouly */}
				{users.map((user) => {
					const { id, login, avatar_url, html_url } = user;
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>profile</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default UseEffectFetchData;

// clog output:

// start
// render
// useEffect
// start
// render