export const CredentialsSchema = {
  type: 'object' as const,
  required: ['email', 'password'] as const,
  properties: {
    email: {
      type: 'string' as const,
      format: 'email' as const,
    },
    password: {
      type: 'string' as const,
      minLength: 8 as const,
    },
  },
};
export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': {schema: CredentialsSchema},
  }
}
// function CredentialsRequestBody(CredentialsRequestBody: any) {
//   throw new Error('Function not implemented.');
// }
