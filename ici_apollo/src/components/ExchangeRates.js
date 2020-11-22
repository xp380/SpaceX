import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  {
    launches {
      rocket {
        rocket_name
      }
      launch_date_utc
      details
      links {
        video_link
      }
    }
  }
`;

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(({ rocket, links, launch_date_utc, details }) => (
    <div>
      <p>{rocket.rocket_name}</p>
      <a href={links.video_link}>Video link</a>
      <p>{details}</p>
      <p>{launch_date_utc}</p>

    </div>
  ));
}