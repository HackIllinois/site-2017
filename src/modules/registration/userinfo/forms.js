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
			type: 'password'
	},
	{
			id: 'confirmPassword',
			type: 'password'
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
			type: 'file'
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

export {all_form_fields}
