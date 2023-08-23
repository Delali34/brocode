// schemas/user.js
export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
    },
    // ... other fields like username, dob, etc.
  ],
  // You can add preview, orderings, etc. as required.
}
