export const option = (name: string, public_repos: number, public_gists: number, repos: number) => ({
  chart: {
    type: 'bar',
    height: '300px',
    style: {
      fontFamily: 'Arial, sans-serif'
    }
  },
  title: {
    text: name,
    style: {
      fontSize: '14px',
      fontWeight: 'bold'
    }
  },
  xAxis: {
    categories: ['Repositories'],
    labels: {
      style: {
        fontSize: '14px'
      }
    }
  },
  yAxis: {
    title: {
      text: 'Total Repositories',
      style: {
        fontSize: '14px'
      }
    },
    labels: {
      style: {
        fontSize: '14px'
      }
    }
  },
  series: [{
    name: 'Public',
    data: [public_repos]
  },
  {
    name: 'Public Gists',
    data: [public_gists]
  }, {
    name: 'Own Reposiroies',
    data: [repos]
  }],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            height: '200px',
          },
          title: {
            style: {
              fontSize: '14px'
            }
          },
          xAxis: {
            labels: {
              style: {
                fontSize: '12px'
              }
            }
          },
          yAxis: {
            title: {
              style: {
                fontSize: '12px'
              }
            },
            labels: {
              style: {
                fontSize: '12px'
              }
            }
          }
        }
      },
      {
        condition: {
          maxWidth: 320
        },
        chartOptions: {
          chart: {
            height: '200px',
          },
          title: {
            style: {
              fontSize: '12px'
            }
          },
          xAxis: {
            labels: {
              style: {
                fontSize: '10px'
              }
            }
          },
          yAxis: {
            title: {
              style: {
                fontSize: '10px'
              }
            },
            labels: {
              style: {
                fontSize: '10px'
              }
            }
          }
        }
      }
    ]
  }
});
