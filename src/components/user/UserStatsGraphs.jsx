import React from 'react';
import styles from './UserStatsGraphs.module.scss';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

function UserStatsCharts({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    const total = data
      .map(({ acessos }) => Number(acessos))
      .reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
      }, 0);

    setTotal(total);
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          colorScale={['#8ebbff', '#fe8eba', '#fed28e', '#8efed2', '#998efe']}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#f4f8ff',
            },
          }}
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart domainPadding={50}>
          <VictoryBar
            barWidth={15}
            alignment="center"
            data={graph}
            style={{
              data: {
                fill: ({ index }) => {
                  switch (index) {
                    case 0:
                      return '#8ebbff';
                    case 1:
                      return '#fe8eba';
                    case 2:
                      return '#fed28e';
                    case 3:
                      return '#8efed2';
                    case 4:
                      return '#998efe';
                    default:
                      return '#333';
                  }
                },
                fillOpacity: 0.9,
              },
            }}
          ></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsCharts;
