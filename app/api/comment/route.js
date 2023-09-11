import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${graphcmsToken}`,
  },
});

const query = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $comment: String!
    $slug: String
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        comment: $comment
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await graphQLClient.request(query, body);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
