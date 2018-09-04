import gql from 'graphql-tag'

export default gql`
query ($groupID:ID!, $sortBy:String!, $orderBy:OrderBy!) {
  items: contentItemsByGroupId(
    groupId: $groupID,
    pagination: {
    	sort: {
      	sortBy: $sortBy,
        orderBy: $orderBy
      }
    }
  ) {
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
