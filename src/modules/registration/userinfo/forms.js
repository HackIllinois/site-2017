const left_forms = [
		{
			id: 'github_username'
		},
		{
			id: 'create_password',
			password: true,
		},
		{
			id: 'name',
		},
		{
			id: 'school',
		},
		{
			id: 'grad_year',
		},
		{
			id: 'shirt_size',
			options: ['S','M','L','XL']
		},
		{
			id: 'gender',
			options: ['Male', 'Female', 'Non-Binary', 'Other']
		},
		{
			id: 'are_you_a_novice?',
			options: ['Yes', 'No']
		},
		{
			id: 'resume',
		},
		{
			id: 'placeholder',	
		},
	];

	const right_forms = [
		{
			id: 'email',
		},
		{
			id: 'confirm_password',
			password: true
		},
		{
			id: 'phone_number',
		},
		{
			id: 'major',
		},
		{
			id: 'transportation',
			options: ['Not Needed','Bus Requested','In State','International']
		},
		{
			id: 'dietary_restrictions',
			options: ['None','Vegetarian', 'Vegan', 'Gluten-Free']
		},
		{
			id: 'age',
		},
		{
			id: 'linkedin_username',		
		},
		{
			id: 'professional_interests',		
			options: ['None','Internship','Fulltime','Both']
		},
		{
			id: 'interests',		
		}
	];

	export {left_forms, right_forms}