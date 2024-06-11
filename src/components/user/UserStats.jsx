import React from 'react';
import Head from '../helpers/Head';
import useFetch from '../../hooks/useFetch';
import LoadingBone from '../helpers/LoadingBone';
import Error from '../helpers/Error';
import { GET_STATS } from '../../api';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

function UserStats() {
  const { data, error, isLoading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');
      const { url, options } = GET_STATS(token);

      await request(url, options);
    }

    getData();
  }, [request]);

  if (isLoading) {
    return <LoadingBone />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  }

  return null;
}

export default UserStats;
