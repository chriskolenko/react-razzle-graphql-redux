import gql from 'graphql-tag'

export default gql`
query ($id:ID!) {
  item: contentItemById(id: $id) {
    id
    groupId
    type
    title
    description
    order
    date
  }
}
`;
