const seriesDurations = [
    {
      title: "Lost",
      days: 3,
      hours: 16,
      minutes: 30,
    },
    {
      title: "Money Heist",
      days: 5,
      hours: 17,
      minutes: 1,
    },
    {
      title: "Prison Break",
      days: 8,
      hours: 11,
      minutes: 1,
    },
  ];
  const averageLifeSpanMinutes = 80 * 365 * 24 * 60;
  
  function logOutSeriesText() {
    let totalPercentage = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        const series = seriesDurations[i];
        const totalMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
    const percentage = (totalMinutes / averageLifeSpanMinutes) * 100;
    console.log(`${series.title} took  ${percentage.toFixed(3)} of my life `);

        totalPercentage +=percentage;
            
        
    }
    console.log(`In total that is ${totalPercentage.toFixed(3)} % of my life. `);
  }
  
  logOutSeriesText(); 