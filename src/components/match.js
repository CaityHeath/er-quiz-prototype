import React, {useEffect} from 'react';
const {GraphQLClient} = require ('graphql-request');
require('dotenv').config();


function Match(){


  async function fetchMeta(){
    const endpoint = `https://${shopname}.com/admin/api/2019-07/graphql.json`
    const headers = { headers: {'Content-Type' : 'application/json', 'X-Shopify-Access-Token' : `${password}`}, mode: 'cors'  }
    const graphQLClient = new GraphQLClient(endpoint, headers);

    const query = `{
      products(first: 30){
        edges{
          node{
            title
            id
            metafields(first: 30){
              edges{
                node{
                  key
                  value
                }
              }
            }
          }
        }
      }
    }`;

    return graphQLClient.request(query)
    .then((result) => {
      let data = JSON.stringify(result, undefined, 2);
      data = JSON.parse(data);
      console.log(data);
      return data;
    })
    .catch(error => console.error);
  }


  useEffect(() => {
    fetchMeta();
  });


  return(
    <>
    </>
  )
}

export default Match;