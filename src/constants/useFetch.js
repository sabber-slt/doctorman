export const api = 'https://kartoon.hasura.app/v1/graphql';

export const fetchPublics = async () => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        doctors_public {
          id
          item1
          item2
          item3
        }
      }      
      `,
    }),
  }).then((res) => res.json());
  return response.data.doctors_public;
};
export const fetchDoctors = async (city, title) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($info: jsonb) {
        doctors_doctors(where: {info: {_contains: $info}}) {
          info
          id
        }
      }
      `,
      variables: {
        info: {
          city: city,
          specialities: title,
        },
      },
    }),
  }).then((res) => res.json());
  return response.data;
};

export const fetchComments = async (doctorId) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($doctorId:String) {
        doctors_comments(where: {doctorId: {_eq: $doctorId}}) {
          comment
          user
          id
        }
      }
      
      `,
      variables: {
        doctorId: doctorId,
      },
    }),
  }).then((res) => res.json());
  return response.data;
};

export const fetchMagazine = async (slug) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($slug:String) {
        doctors_magazine(where: {slug: {_eq: $slug}}) {
          content
          content2
          id
          pic1
          pic2
          slug
          title
        }
      }
      `,
      variables: {
        slug: slug,
      },
    }),
  }).then((res) => res.json());
  return response.data;
};
