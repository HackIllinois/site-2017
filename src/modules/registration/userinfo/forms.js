const all_form_fields = [
	{
			id: 'firstName',
	},
	{
			id: 'lastName',
	},
	{
			id: 'email',
	},
	{
			id: 'github'
	},
	{
			id: 'createPassword',
			password: true,
	},
	{
			id: 'confirmPassword',
			password: true
	},
	{
			id: 'school',
	},
	{
			id: 'major',
	},
	{
			id: 'graduationYear',
	},
	{
			id: 'transportation',
			options: ['NOT_NEEDED','BUS_REQUESTED','IN_STATE', 'OUT_OF_STATE', 'INTERNATIONAL']
	},
	{
			id: 'shirtSize',
			options: ['S','M','L','XL']
	},
	{
			id: 'diet',
			options: ['NONE','VEGETARIAN', 'VEGAN', 'GLUTEN_FREE']
	},
	{
			id: 'gender',
			options: ['MALE', 'FEMALE', 'NON_BINARY', 'OTHER']
	},
	{
			id: 'age',
	},
	{
			id: 'isNovice',
			options: ['YES', 'NO']
	},
	{
			id: 'linkedin',		
	},
	{
			id: 'resume',
	},
	{
			id: 'professionalInterest',		
			options: ['NONE','INTERNSHIP','FULLTIME','BOTH']
	},
	{
			id: 'phoneNumber',	
	},
	{
			id: 'interests',		
	}
]


const left_forms = [
		{
			id: 'github'
		},
		{
			id: 'createPassword',
			password: true,
		},
		{
			id: 'firstName',
		},
		{
			id: 'school',
		},
		{
			id: 'graduationYear',
		},
		{
			id: 'shirtSize',
			options: ['S','M','L','XL']
		},
		{
			id: 'gender',
			options: ['MALE', 'FEMALE', 'NON_BINARY', 'OTHER']
		},
		{
			id: 'isNovice',
			options: ['YES', 'NO']
		},
		{
			id: 'resume',
		},
		{
			id: 'phoneNumber',	
		},
	];

	const right_forms = [
		{
			id: 'email',
		},
		{
			id: 'confirmPassword',
			password: true
		},
		{
			id: 'lastName',
		},
		{
			id: 'major',
		},
		{
			id: 'transportation',
			options: ['NOT_NEEDED','BUS_REQUESTED','IN_STATE', 'OUT_OF_STATE', 'INTERNATIONAL']
		},
		{
			id: 'diet',
			options: ['NONE','VEGETARIAN', 'VEGAN', 'GLUTEN_FREE']
		},
		{
			id: 'age',
		},
		{
			id: 'linkedin',		
		},
		{
			id: 'professionalInterest',		
			options: ['NONE','INTERNSHIP','FULLTIME','BOTH']
		},
		{
			id: 'interests',		
		}
	];

	export {all_form_fields, left_forms, right_forms}